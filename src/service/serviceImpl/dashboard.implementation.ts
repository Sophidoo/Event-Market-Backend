import { StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";
import HttpException from "../../utils/exception";
import DashboardService from "../dashboard.service";
import { BookingRequest, Category, PaymentStatus } from "../../../generated/prisma";


export default class DashboardServiceImpl implements DashboardService{
    async fetchDashboardStats(userId: string): Promise<object> {

        const user = await prisma.user.findUnique({
            where: {id: userId}
        })

        if(!user){
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "User not found"
            )
        }

        const vendor = await prisma.vendor.findUnique({
            where: { userId }
        });

        if (!vendor) {
            throw new HttpException(
                StatusCodes.NOT_FOUND,
                "Vendor profile not found"
            );
        }

        const now = new Date();
        const currentYear = now.getFullYear()

        const credit = await prisma.payment.aggregate({
            where: {
                status: PaymentStatus.COMPLETED,
                booking: {
                    vendorId: vendor.id,
                },
            },
            _sum: {
                credit: true,
            },
        });
        const debit = await prisma.payment.aggregate({
            where: {
                status: PaymentStatus.COMPLETED,
                booking: {
                    vendorId: vendor.id,
                },
            },
            _sum: {
                debit: true,
            },
        });

        const balance = (credit._sum.credit || 0) - (debit._sum.debit || 0) 

        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);

        const dueToday = await prisma.booking.findMany({
            where: {
                vendorId: vendor.id,
                endDate: {
                    lte: endOfDay,
                    gte: startOfDay,
                },
            },
            include: {
                item: true,
                user: true,
            },
        });

        const pendingRequests = await prisma.booking.findMany({
            where: {
                vendorId: vendor.id,
                request: BookingRequest.PENDING,
            },
            include: {
                item: true,
                user: true,
            },
        });

        const revenuePipeline = [
            { $lookup: { from: "Booking", localField: "bookingId", foreignField: "_id", as: "booking" } },
            { $unwind: "$booking" },
            {
                $match: {
                    "booking.vendorId": { $eq: vendor.id },
                    status: "COMPLETED",
                    createdAt: {
                        $gte: new Date(currentYear, 0, 1),
                        $lt: new Date(currentYear + 1, 0, 1),
                    },
                },
            },
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    total: { $sum: "$paidAmount" },
                },
            },
        ];
        const revenueResult = await prisma.payment.aggregateRaw({ pipeline: revenuePipeline });
        const revenueGraph = Array(12).fill(0);
        const revenueArray = Array.isArray(revenueResult) ? revenueResult : [];
        revenueArray.forEach((res) => {
            revenueGraph[res._id - 1] = res.total;
        });

        const totalBookings = await prisma.booking.count({
            where: { vendorId: vendor.id },
        });

        // Current bookings (today is between startDate and endDate inclusive)
        const currentBookings = await prisma.booking.count({
            where: {
                vendorId: vendor.id,
                startDate: { lte: now },
                endDate: { gte: now },
            },
        });

        // Total items
        const totalItems = await prisma.item.count({
            where: { vendorId: vendor.id },
        });

        // Item percentages by category
        const itemCounts = await prisma.item.groupBy({
            by: ["category"],
            where: { vendorId: vendor.id },
            _count: { id: true },
        });

        let rentalsCount = 0, servicesCount = 0, packagesCount = 0;
        itemCounts.forEach((count) => {
            if (count.category === Category.RENTALS) rentalsCount = count._count.id;
            if (count.category === Category.SERVICES) servicesCount = count._count.id;
            if (count.category === Category.PACKAGES) packagesCount = count._count.id;
        });
        const rentalsPercent = totalItems > 0 ? (rentalsCount / totalItems) * 100 : 0;
        const servicesPercent = totalItems > 0 ? (servicesCount / totalItems) * 100 : 0;
        const packagesPercent = totalItems > 0 ? (packagesCount / totalItems) * 100 : 0;

        return {
            balance,
            dueToday,
            pendingRequests,
            revenueGraph,
            totalBookings,
            currentBookings,
            totalItems,
            percentages: {
                rentals: rentalsPercent,
                services: servicesPercent,
                packages: packagesPercent,
            },
        };
    }


    async fetchAdminDashboardStats(): Promise<object> {
        const now = new Date();
        const currentYear = now.getFullYear();

        // Balance: sum of paidAmount from all completed payments
        const credit = await prisma.payment.aggregate({
            where: {
                status: PaymentStatus.COMPLETED
            },
            _sum: {
                credit: true,
            },
        });
        const debit = await prisma.payment.aggregate({
            where: {
                status: PaymentStatus.COMPLETED
            },
            _sum: {
                debit: true,
            },
        });

        const balance = (credit._sum.credit || 0) - (debit._sum.debit || 0) 

        // Start and end of today
        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);

        // Bookings due today (endDate is today)
        const dueToday = await prisma.booking.findMany({
            where: {
                endDate: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            include: {
                item: true,
                user: true,
                vendor: true,
            },
        });

        // Pending booking requests
        const pendingRequests = await prisma.booking.findMany({
            where: {
                request: BookingRequest.PENDING,
            },
            include: {
                item: true,
                user: true,
                vendor: true,
            },
        });

        // Revenue graph: monthly revenue from Jan to Dec of current year
        const revenuePipeline = [
            {
                $match: {
                    status: "COMPLETED",
                    created_at: {
                        $gte: { $date: `${currentYear}-01-01T00:00:00.000Z` },
                        $lte: { $date: `${currentYear + 1}-01-01T00:00:00.000Z` },
                    },
                },
            },
            {
                $group: {
                    _id: { $month: "$created_at" },
                    total: { $sum: "$paid_amount" },
                },
            },
        ];
        const revenueResult = await prisma.payment.aggregateRaw({ pipeline: revenuePipeline });
        const revenueGraph = Array(12).fill(0);
        const revenueArray = Array.isArray(revenueResult) ? revenueResult : [];
        revenueArray.forEach((res) => {
            if (res._id >= 1 && res._id <= 12) {
                revenueGraph[res._id - 1] = res.total || 0;
            }
        });

        if (revenueArray.length === 0 || revenueArray.every(res => res._id === null)) {
            console.log("aggregateRaw returned empty or invalid data. Falling back to Prisma ORM.");
            const payments = await prisma.payment.findMany({
                where: {
                    status: PaymentStatus.COMPLETED,
                    createdAt: {
                        gte: new Date(currentYear, 0, 1),
                        lte: new Date(currentYear + 1, 0, 1),
                    },
                },
                select: { createdAt: true, paidAmount: true },
            });
            console.log("Prisma ORM payments:", payments);
            const monthlySums = Array(12).fill(0);
            payments.forEach(payment => {
                const month = payment.createdAt.getMonth(); // 0-based (0 = Jan)
                monthlySums[month] += payment.paidAmount;
            });
            revenueGraph.splice(0, 12, ...monthlySums);
            console.log("Prisma ORM revenueGraph:", revenueGraph);
        }

        // Total bookings
        const totalBookings = await prisma.booking.count();

        // Current bookings (today is between startDate and endDate inclusive)
        const currentBookings = await prisma.booking.count({
            where: {
                startDate: { lte: now },
                endDate: { gte: now },
            },
        });

        // Total items
        const totalItems = await prisma.item.count();

        // Item percentages by category
        const itemCounts = await prisma.item.groupBy({
            by: ["category"],
            _count: { id: true },
        });
        let rentalsCount = 0,
            servicesCount = 0,
            packagesCount = 0;
        itemCounts.forEach((count) => {
            if (count.category === Category.RENTALS) rentalsCount = count._count.id;
            if (count.category === Category.SERVICES) servicesCount = count._count.id;
            if (count.category === Category.PACKAGES) packagesCount = count._count.id;
        });
        const rentalsPercent = totalItems > 0 ? (rentalsCount / totalItems) * 100 : 0;
        const servicesPercent = totalItems > 0 ? (servicesCount / totalItems) * 100 : 0;
        const packagesPercent = totalItems > 0 ? (packagesCount / totalItems) * 100 : 0;

        return {
            balance,
            dueToday,
            pendingRequests,
            revenueGraph,
            totalBookings,
            currentBookings,
            totalItems,
            percentages: {
                rentals: rentalsPercent,
                services: servicesPercent,
                packages: packagesPercent,
            },
        };
    }
    
}