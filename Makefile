all: dev

install:
	npm install -g pnpm
	pnpm create vite client --template react-ts
	cd client
	pnpm install
	pnpm approve-builds
	pnpm add zustand react-router-dom i18next react-i18next lucide-react clsx sonner
	pnpm add -D sass

pnpm:
	cd client && pnpm install

dev:
	cd client && pnpm run dev

clean:
	rm -rf client/node_modules client/dist

.PHONY: all install dev clean