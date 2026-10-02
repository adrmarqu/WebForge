import { Outlet } from "react-router-dom";

function Dashboard()
{
    return (
    <div>
        {/* Header superior */}
        {/* Header lateral */}
        {/* Main */}
        <main>
            <Outlet />
        </main>
    </div>);
}

export default Dashboard;