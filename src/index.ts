import App from "./app"
import BookingRoutes from "./routes/booking.route"
import ItemRoutes from "./routes/Item.route"
import TransactionRoutes from "./routes/transaction.route"
import UserRoutes from "./routes/user.routes"
import dotenv from "dotenv"

dotenv.config()

const app = new App([
    new UserRoutes(),
    new ItemRoutes(),
    new BookingRoutes(),
    new TransactionRoutes()
])

app.listen()

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});