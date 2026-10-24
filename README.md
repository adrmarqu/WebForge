# What do you need before start
# How to start the project

# My installations
## React & TypeScript

npm install -g pnpm
pnpm create vite client --template react-ts
cd client
pnpm install

- EsLint
- No

## Core dependecies

pnpm approve-builds
pnpm add zustand react-router-dom i18next react-i18next lucide-react clsx sonner
pnpm add -D sass

# CLSX

className={clsx('base-btn', {
    'btn-active': isActive,    // Se añade si isActive es true
    'btn-disabled': isDisabled // Se añade si isDisabled es true
})}

# Toaster

toast(string msg);           // White
toast.info(string msg);      // Blue
toast.success(string msg);   // Green
toast.error(string msg);     // Red
toast.warning(string msg);   // Yellow