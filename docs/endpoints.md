- Pagina de inicio: Aqui te pregunta si quires crear/continuar/cargar un proyecto, si quieres mirar las guias, o si quieres descargar un Makefile.

- Dashboard: Aqui estan todos los aprartados y los ajustes globales (parecido al dashboard de wordpress).

- Editor: Aqui puedes editar tu web (como wordpress), puedes editar paginas, layouts, componentes y forms. 

- Configurar: Aqui debes escoger las opciones que quieres para configurar el proyecto inicial de react, php o como quieres descargar la web. Crea un Makefile y los archivos necesarios para compilarlo.

- Descargar: Aqui puedes ver, copiar y descargar el resultado de config (Muestra todos los archivos que vas a descargar).

- Informacion: Aqui hay una guia de html (etiquetas y atributos) y de css (cosas como: meter una x encima de una imagen, un desplegable...).

- Login: Este es el login solo de admin, si te logueas podras subir componentes y guardar estilos y plantillas a la web. Solo valido en local.

- Vista previa: Esta pagina es para ver como s veria la web. (Puedo utilizar la misma pagina que el editor pero quitando las ediciones)

# Home (los 2 llevan al mismo lugar)
GET /
GET /home

# Dashboard
GET /dashboard

# Editor
GET /editor

# Live preview
GET /preview

# Build configuration
GET /config/makefile
GET /config/web

# Export / Download

# Documentation / Guides
GET /docs/html
GET /docs/css

# Admin login