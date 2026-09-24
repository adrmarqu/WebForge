import { create } from 'zustand';

interface SiteState
{
    siteName: string;
    setSiteName: (name: string) => void;
}

export const useSiteStore = create<SiteState>((set) => (
{
    siteName: 'Mi Web Estática Inicial',
    setSiteName: (name) => set({ siteName: name }),
}));