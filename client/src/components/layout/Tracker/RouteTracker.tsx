import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigationStore } from '../../../store/useNavigationStore';

const RouteTracker = (): React.ReactNode =>
{
    const location = useLocation();
    const setLastValidRoute = useNavigationStore((state) => state.setLastValidRoute);

    useEffect(() =>
    {
        const currentPath = location.pathname;

        const isInvalidRoute =
            currentPath === '/error/404' ||
            currentPath === '/admin/login' ||
            currentPath === '/' ||
            currentPath === '/home';

        if (!isInvalidRoute) setLastValidRoute(currentPath);

    }, [location, setLastValidRoute]);

    return null;
};

export default RouteTracker;