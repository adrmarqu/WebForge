import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { ROUTES } from "../../utils/routes";

export function RequireTemplate()
{
    const isActive = useStore((state: any) => state.active);

    if (!isActive)
        return <Navigate to={ROUTES.HOME} replace />;
    
    return <Outlet/>;
}