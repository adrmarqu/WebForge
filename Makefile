all: dev

install:
	cd client && pnpm install

dev:
	cd client && pnpm run dev

clean:
	rm -rf client/node_modules client/dist

.PHONY: all install dev clean