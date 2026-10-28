all: dev

install:
	npm install -g pnpm
	pnpm create vite client --template react-ts
	cd client
	pnpm install
	pnpm approve-builds
	pnpm add zustand react-router-dom i18next react-i18next lucide-react clsx sonner jszip
	pnpm add -D sass

pnpm:
	pnpm -C client install

dev:
	pnpm -C client run dev

clean:
	rm -rf client/node_modules client/dist

update:
	git add .
	git commit -m "Updating to new version"
	git push
	pnpm -C client version patch

.PHONY: all install dev clean