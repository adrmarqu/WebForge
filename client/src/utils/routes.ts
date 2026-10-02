export const ROUTES = {
    ROOT: '/',
    HOME: '/home',

    DASHBOARD: '/dashboard',
    DASH_HOME: '/dashboard',

    CONFIG: '/config',
    CONFIG_MAKE: '/config/makefile',

    HTML: '/docs/html',
    CSS: '/docs/css'
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];

export const VALID_ROUTES = new Set<string>(Object.values(ROUTES));