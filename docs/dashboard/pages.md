# Pages

GET /dashboard/pages
**Solo admin**
POST /dashboard/pages/:data
PUT /dashboard/pages/:data
DELETE /dashboard/pages/:data

## Contenido

- Titulo
- Nueva pagina
- Lista de paginas
    - Nombre
    - Desplegable (Abrir, editar, exportar, eliminar)
- Lista de paginas (new/edit)
    - Page title (new -> Nueva pagina, edit -> Nombre anterior)
    - Nombre
    - Title
    - Nav
    - Description
    - Header
    - Footer
    - Cancelar
    - Guardar

## Action

- Nueva pagina -> Abre el new
- Abrir -> /editor
- Editar -> Abre el edit
- Exportar -> Abre dialog config -> exporta un json
- Eliminar -> Elimina la pagina
- Cancelar New -> No crea nada
- Cancelar Edit -> No aplica los cambios
- Guardar New -> Crea una nueva pagina
- Guardar Edit -> Guarda los cambios