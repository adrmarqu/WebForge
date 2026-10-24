import { create } from 'zustand';

interface NavigationState
{
    lastValidRoute: string;
    setLastValidRoute: (route: string) => void;

    export: () => { lastValidRoute: string }
};

export const useNavigationStore = create<NavigationState>((set, get) =>
({
    lastValidRoute: '/dashboard',
    setLastValidRoute: (route: string) => set({ lastValidRoute: route }),

    export: () =>
    {
        return { lastValidRoute: get().lastValidRoute }
    }
}));