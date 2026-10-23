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

pnpm add zustand react-router-dom i18next react-i18next lucide-react clsx
pnpm add -D sass

# CLSX

className={clsx('base-btn', {
    'btn-active': isActive,    // Se añade si isActive es true
    'btn-disabled': isDisabled // Se añade si isDisabled es true
})}