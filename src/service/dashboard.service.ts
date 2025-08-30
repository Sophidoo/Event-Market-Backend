

export default interface DashboardService{
    fetchDashboardStats(userId: string) : Promise<object>
    fetchAdminDashboardStats(): Promise<object>;
}