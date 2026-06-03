import { Outlet } from "react-router-dom";
import Charts from "../components/Charts";
import DashboardCards from "../components/DashboardCards";
import Navbar from "../components/Navbar";
import RecentOrders from "../components/RecentOrders";
import Sidebar from "../components/Sidebar"
import SmallCards from "../components/SmallCards";

const DashboardLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div className="content" style={{ flex: "1", }}>
                <Navbar />
                <div style={{ padding: "20px" }}>
                    {/* {children} */}
                    <Outlet />
                    {/* <DashboardCards /> */}
                    {/* <SmallCards /> */}
                    {/* <Charts /> */}
                    {/* <RecentOrders /> */}
                </div>
            </div>
        </div>
    )

}

export default DashboardLayout;