import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState } from '../types/app';

interface AppStore extends AppState
{

}

export const useAppStore = create<AppStore>()(persist((set, get) => 
({
    website:
    {
        name: "",
        template: "blank",
        version: __APP_VERSION__
    }
}),
{ name: 'webforge-app' }
));