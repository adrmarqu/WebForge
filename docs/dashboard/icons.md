# icons

GET /dashboard/icons

## Lista de iconos

### Contenido

- Titulo
- Añadir iconos
- icono + nombre
    - Boton desplegable (editar, descargar, eliminar)

### Actions

- Añadir iconos -> /icons/upload
- Pulsar icono -> abrir dialog Modificar icono
- Editar -> abrir Modificar icono
- Descargar -> Descarga la icono
- Eliminar -> Elimina la icono

### Modificar icono

### Contenido

- Image
- Rotate
- Nombre
- Categoria
- Cancelar
- Guardar

### Actions

- Cancelar -> close dialog
- Guardar -> save changes and close dialog

## Añadir icono

GET /dashboard/icons/upload

### Contenido

- Title
- Contenedor para añadir iconos

### Actions

- Añadir arrastrando -> Abre la vista de Lista de iconos
- Añadir por click -> Selecciona las iconos y abre Lista de iconos

### Lista de iconos

### Contenido

- Titulo
- Añadir mas
- Guardar
- Lista de iconos
    - Image
    - Rotate
    - Nombre
    - Categoria
    - X (Delete)
    - Save
- Añadir mas
- Cancelar
- Guardar

### Actions

- Añadir mas -> puedes seleccionar mas por click
- Guardar -> Guarda todas las iconos en la galeria
- Cancelar -> Descarta todas las iconos
- X -> Elimina una icono en concreto
- Save -> Guarda una icono en concreto