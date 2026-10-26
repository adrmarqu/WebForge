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

        const isValidRoute = 
            currentPath.startsWith('/dashboard') || 
            currentPath.startsWith('/editor');

        if (isValidRoute && currentPath !== '/dashboard') 
            setLastValidRoute(currentPath);

    }, [location, setLastValidRoute]);

    return null;
};

export default RouteTracker;