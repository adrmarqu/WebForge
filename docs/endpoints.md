# Home

El home, aqui podras cargar un proyecto, ir al login o crear un makefile

GET /
GET /home

# Login

GET /login
POST /login
- Subir los datos del usuario

# Dashboard
## Home/Main

Pagina de bienvenida, etc

GET /dashboard
GET /dashboard/home

## Website/General

Datos de tu web: nombre de la web, favicon...
Configuracion global: ancho maximo, paddings por defecto...
Idiomas

GET /dashboard/website
PUT /dashboard/website

## Colors

Colores de la web

GET /dashboard/colors
POST /dashboard/colors
- Nuevo color
PUT /dashboard/colors
- Actualizar color
DELETE /dashboard/colors
- Eliminar color

## Typography

Letras de la web

GET /dashboard/typography
POST /dashboard/typography
PUT /dashboard/typography
DELETE /dashboard/typography

## Pages

Lista de paginas de la web

GET /dashboard/pages
POST /dashboard/pages
PUT /dashboard/pages
DELETE /dashboard/pages

## Layouts

Lista de headers y footers de la web

GET /dashboard/layouts
POST /dashboard/layouts
PUT /dashboard/layouts
DELETE /dashboard/layouts

## Media

Lista de imagenes

GET /dashboard/media
POST /dashboard/media
PUT /dashboard/media
DELETE /dashboard/media

## Forms

Lista de forms

GET /dashboard/forms
POST /dashboard/forms
PUT /dashboard/forms
DELETE /dashboard/forms

## Components

Lista de componentes de la web

GET /dashboard/components
POST /dashboard/components
PUT /dashboard/components
DELETE /dashboard/components

## Project

Descargar (en html,css,js), Exportar (json), Importar (json), Plantilla (para cambiar la plantilla o resetera el proyecto)

GET /dashboard/project
POST /dashboard/project/:action
- Si guarda, exporta, importa, o cambia de plantilla

# Editor

GET /editor
POST /editor
- Nueva pagina/componente
PUT /editor
- Actualizar pagina/componente
DELETE /editor
- Eliminar pagina/componente

# Preview

GET /preview

# Download

GET /download
POST /download
- Darle a descargar proyecto