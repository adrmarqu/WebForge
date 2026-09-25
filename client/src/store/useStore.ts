import { create } from 'zustand';
import type { 
    WebStore, 
    WebState, 
    ConfigState, 
    ColorState,
    TextState,
    AssetState,
    FileState,
    LayoutState,
    PageState,
    TagState
} from '../types/zustand';

const initialState: WebState = {
    template: null,
    config: {
        max_width: { value: 100, type: '%' },
        padding: { value: 0, type: 'none' },
        bg: '#ffffff'
    },
    colors: [],
    texts: [],
    assets: [],
    css: [],
    ts: [],
    layouts: [],
    pages: [],
    tags: [],
};

const config = (set: any) => ({
    set: (data: ConfigState) => set({ config: data }),
    update: (data: Partial<ConfigState>) => set((state: WebState) => ({
        config: { ...state.config, ...data }
    }))
});

const colors = (set: any) => ({
    add: (data: ColorState) => set((state: WebState) => ({
        colors: [...state.colors, data]
    })),
    update: (id: number, data: Partial<ColorState>) => set((state: WebState) => ({
        colors: state.colors.map((c) => c.id === id ? { ...c, ...data } : c)
    })),
    remove: (id: number) => set((state: WebState) => ({
        colors: state.colors.filter((c) => c.id !== id)
    }))
});

const texts = (set: any) => ({
    add: (data: TextState) => set((state: WebState) => ({
        texts: [...state.texts, data]
    })),
    update: (id: number, data: Partial<TextState>) => set((state: WebState) => ({
        texts: state.texts.map((t) => t.id === id ? { ...t, ...data } : t)
    })),
    remove: (id: number) => set((state: WebState) => ({
        texts: state.texts.filter((t) => t.id !== id)
    }))
});

const assets = (set: any) => ({
    add: (data: AssetState) => set((state: WebState) => ({
        assets: [...state.assets, data]
    })),
    update: (id: number, data: Partial<AssetState>) => set((state: WebState) => ({
        assets: state.assets.map((a) => a.id === id ? { ...a, ...data } : a)
    })),
    remove: (id: number) => set((state: WebState) => ({
        assets: state.assets.filter((a) => a.id !== id)
    }))
});

const fileActions = (set: any, key: 'css' | 'ts') => ({
    add: (name: string, content: string) => set((state: WebState) => {
        const newId = state[key].length > 0 ? Math.max(...state[key].map(f => f.id)) + 1 : 1;
        const newFile: FileState = { id: newId, name, content };
        return { [key]: [...state[key], newFile] };
    }),
    update: (id: number, data: Partial<FileState>) => set((state: WebState) => ({
        [key]: state[key].map((f) => f.id === id ? { ...f, ...data } : f)
    })),
    remove: (id: number) => set((state: WebState) => ({
        [key]: state[key].filter((f) => f.id !== id)
    }))
});

const layouts = (set: any) => ({
    add: (data: LayoutState) => set((state: WebState) => ({
        layouts: [...state.layouts, data]
    })),
    update: (id: number, data: Partial<LayoutState>) => set((state: WebState) => ({
        layouts: state.layouts.map((l) => l.id === id ? { ...l, ...data } : l)
    })),
    remove: (id: number) => set((state: WebState) => ({
        layouts: state.layouts.filter((l) => l.id !== id)
    }))
});

const pages = (set: any) => ({
    add: (data: PageState) => set((state: WebState) => ({
        pages: [...state.pages, data]
    })),
    update: (id: number, data: Partial<PageState>) => set((state: WebState) => ({
        pages: state.pages.map((p) => p.id === id ? { ...p, ...data } : p)
    })),
    remove: (id: number) => set((state: WebState) => ({
        pages: state.pages.filter((p) => p.id !== id)
    }))
});

const tags = (set: any) => ({
    add: (data: TagState) => set((state: WebState) => ({
        tags: [...state.tags, data]
    })),
    update: (id: string, data: Partial<TagState>) => set((state: WebState) => ({
        tags: state.tags.map((t) => t.id === id ? { ...t, ...data } : t)
    })),
    remove: (id: string) => set((state: WebState) => ({
        tags: state.tags.filter((t) => t.id !== id)
    }))
});

const webLoader = (set: any) => ({
    loadTemplate: (templateData: WebState) => set(templateData)
});

export const useStore = create<WebStore>((set) => ({
    // Init store
    ...initialState,

    // Functions
    loadTemplate: webLoader(set).loadTemplate,
    configActions: config(set),
    colorsActions: colors(set),
    textsActions: texts(set),
    assetsActions: assets(set),
    cssActions: fileActions(set, 'css'),
    tsActions: fileActions(set, 'ts'),
    layoutActions: layouts(set),
    pagesActions: pages(set),
    tagsActions: tags(set),
}));