all: install up

# Instala las dependencias del cliente
install:
	@echo "==> Instalando dependencias del cliente..."
	cd client && npm install
	@echo "✨ ¡Dependencias instaladas con éxito! ✨"

# Arranca el cliente en desarrollo
up:
	@echo "🧹 Limpiando el puerto 5173 si estaba ocupado..."
	@npx kill-port 5173 2>/dev/null || true
	@echo "🚀 Encendiendo el cliente de React..."
	@cd client && npm run dev > ../client.log 2>&1 & echo $$! > ../client.pid
	@echo "✅ ¡Sistema encendido! (Logs en client.log)"

# Apaga el cliente limpiamente
down:
	@echo "🛑 Apagando el cliente..."
	@if [ -f client.pid ]; then kill $$(cat client.pid) 2>/dev/null || true; rm client.pid; fi
	@rm -f *.log
	@echo "💤 Sistema apagado."

# Comprueba si está corriendo
status:
	@if [ -f client.pid ]; then \
		echo "🟢 El cliente está ENCENDIDO."; \
	else \
		echo "🔴 El cliente está APAGADO."; \
	fi

# Limpia los node_modules para empezar de cero
clean: down
	rm -rf client/node_modules
	@echo "🧹 Módulos eliminados."

# Abre la app en el navegador automáticamente
open: 
	@open -a "Google Chrome" http://localhost:5173

.PHONY: install up down status clean open