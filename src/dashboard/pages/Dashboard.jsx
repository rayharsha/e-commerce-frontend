import DashboardCards from "../components/DashboardCards";
import SmallCards from "../components/SmallCards";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div>
                <h1>dashbordd</h1>
                <DashboardCards />
                <SmallCards />
            </div>
        </DashboardLayout>
    )
}
export default Dashboard;