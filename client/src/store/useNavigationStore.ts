import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NavigationState
{
    lastValidRoute: string;
    setLastValidRoute: (route: string) => void;

    export: () => { lastValidRoute: string }
};

export const useNavigationStore = create<NavigationState>()(
    persist((set, get) => (
    {
        lastValidRoute: '/dashboard/welcome',
        setLastValidRoute: (route) => set({ lastValidRoute: route }),
        export: () => ({ lastValidRoute: get().lastValidRoute }),
    }),
    { name: 'webforge-navigation' }
));