import { Outlet } from "react-router-dom";
import Header from "../../headers/Base/Header";
import Footer from "../../Footer/Footer";

interface PublicLayoutProps
{
    redir?: string;
};

const PublicLayout = ({ redir = "/" }: PublicLayoutProps) =>
{
    return (
    <>
        <Header redir={redir} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
    );
};

export default PublicLayout;
