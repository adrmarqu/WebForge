import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState } from '../types/app';

export const useAppStore = create<AppState>()(persist((set, get) => 
({

}),
{ name: 'webforge-app' }
));