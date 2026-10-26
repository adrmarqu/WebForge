# Project
## Download

GET /project/download

### Contenido

- Fase Select
    - Titulo
    - Instrucciones
    - Lista de paginas, forms, colores, tipografias... a descargar
    - Boton de siguiente
- Fase Config
    - Titulo
    - Instrucciones
    - Lista de configuraciones
    - Boton de descargar
    - Boton de previsualizar

### Actions

- Descargar -> Descarga un zip de las opciones elegidas
- Previsualizar -> Va a /download y muestra las opciones elegidas

## Export

GET /project/export

### Contenido

- Titulo
- Instrucciones
- Lista de seleccion
- Boton de exportar

### Actions

- Boton de exportar, exporta un json/zip

## Import

GET /project/import

### Contenido

- Titulo
- Instrucciones
- Contenedor para recibir los archivos importados (json/zip)
- Boton de importar

### Actions

- Importar -> Importa los archivos y sobrescribe los datos

## Remove

GET /project/delete

### Contenido

- Titulo
- Explicacion
- Boton de eliminar

### Actions

- Boton de eliminar -> Elimina el proyecto -> va al /home