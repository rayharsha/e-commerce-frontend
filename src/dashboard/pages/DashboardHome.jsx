import Charts from "../components/Charts";
import DashboardCards from "../components/DashboardCards";
import RecentOrders from "../components/RecentOrders";
import SmallCards from "../components/SmallCards";

const DashboardHome = () => {
    return (
        <>
            <DashboardCards />
            <SmallCards />
            <Charts />
            <RecentOrders />
        </>
    )
}
export default DashboardHome;