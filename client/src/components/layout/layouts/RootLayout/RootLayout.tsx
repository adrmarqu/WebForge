import { Outlet } from "react-router-dom";
import RouteTracker from "../../Tracker/RouteTracker";

const RootLayout = () =>
{
    return (
    <>
        <RouteTracker />
        <Outlet />
    </>
    );
};

export default RootLayout;
