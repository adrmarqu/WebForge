import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import RouteTracker from "../Tracker/RouteTracker";

interface AppLayoutProps 
{
    header?: React.ReactNode;
    showFooter?: boolean;
};

const AppLayout = ({header = null, showFooter = false}: AppLayoutProps) =>
{
    return (
    <>
    <RouteTracker />
    {header}
    <main><Outlet /></main>
    {showFooter && <Footer />}
    </>
    );
};

export default AppLayout;