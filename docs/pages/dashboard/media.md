# Media

GET /dashboard/media

## Lista de imagenes

### Contenido

- Titulo
- Añadir imagenes
- Imagen + nombre
    - Boton desplegable (editar, descargar, eliminar)

### Actions

- Añadir imagenes -> /media/upload
- Pulsar imagen -> abrir dialog Modificar imagen
- Editar -> abrir Modificar imagen
- Descargar -> Descarga la imagen
- Eliminar -> Elimina la imagen

### Modificar imagen

### Contenido

- Image
- Width
- Height
- Rotate
- Cut
- Nombre
- Title
- Alt
- Cancelar
- Guardar

### Actions

- Cancelar -> close dialog
- Guardar -> save changes and close dialog

## Añadir imagen

GET /dashboard/media/upload

### Contenido

- Title
- Contenedor para añadir imagenes

### Actions

- Añadir arrastrando -> Abre la vista de Lista de imagenes
- Añadir por click -> Selecciona las imagenes y abre Lista de imagenes

### Lista de imagenes

### Contenido

- Titulo
- Añadir mas
- Guardar
- Lista de imagenes
    - Imagen
    - Width
    - Height
    - Rotate
    - Cortar
    - Nombre
    - Alt
    - Title
    - X (Delete)
    - Save
- Añadir mas
- Cancelar
- Guardar

### Actions

- Añadir mas -> puedes seleccionar mas por click
- Guardar -> Guarda todas las imagenes en la galeria
- Cancelar -> Descarta todas las imagenes
- X -> Elimina una imagen en concreto
- Save -> Guarda una imagen en concreto