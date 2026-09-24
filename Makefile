all: install up

# Instala las dependencias tanto del servidor como del cliente
install:
	@echo "==> Instalando dependencias del servidor..."
	cd server && npm install
	@echo "==> Instalando dependencias del cliente..."
	cd client && npm install
	@echo "✨ ¡Todas las dependencias instaladas con éxito! ✨"

# Arranca el sistema en segundo plano (UP)
up:
	@echo "🧹 Limpiando puertos 3000 y 5173 si estaban ocupados..."
	@npx kill-port 3000 5173 2>/dev/null || true
	@echo "🚀 Encendiendo servidor y cliente..."
	@cd server && npm run dev > ../server.log 2>&1 & echo $$! > ../server.pid
	@cd client && npm run dev > ../client.log 2>&1 & echo $$! > ../client.pid
	@echo "✅ ¡Sistema encendido! (Logs en server.log y client.log)"

# Apaga el sistema limpiamente (DOWN)
down:
	@echo "🛑 Apagando servidor y cliente..."
	@if [ -f server.pid ]; then kill $$(cat server.pid) 2>/dev/null || true; rm server.pid; fi
	@if [ -f client.pid ]; then kill $$(cat client.pid) 2>/dev/null || true; rm client.pid; fi
	@rm -f *.log
	@echo "💤 Sistema apagado."

# Comprueba si están corriendo
status:
	@if [ -f server.pid ] || [ -f client.pid ]; then \
		echo "🟢 El sistema está ENCENDIDO."; \
	else \
		echo "🔴 El sistema está APAGADO."; \
	fi

# Limpia los node_modules para empezar de cero
clean: down
	rm -rf server/node_modules client/node_modules
	@echo "🧹 Módulos eliminados."

.PHONY: install up down status clean