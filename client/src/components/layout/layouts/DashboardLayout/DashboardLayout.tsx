import { Outlet } from "react-router-dom";
import HeaderDash from "../../headers/Dashboard/Header";
import DashboardNav from "../../../../views/Dashboard/DashboardNav";

const DashboardLayout = () =>
{
    return (
    <>
        <HeaderDash />
        <DashboardNav />
        <main>
            <Outlet />
        </main>
    </>
    );
};

export default DashboardLayout;
