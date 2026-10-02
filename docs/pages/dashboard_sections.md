# Dashboard

La pantalla de inicio del dashboard es la sección de **Introducción** (`/dashboard`).

---

## 1. Home (`/dashboard`)
Panel principal de bienvenida y resumen del estado de la web.

- **Introducción / Inicio**
  - **Constante:** `DASH_HOME`
  - **Ruta:** `/dashboard`
  - **Descripción:** Vista de bienvenida con accesos rápidos y guía de inicio.
- **Estadísticas de la Web**
  - **Constante:** `DASH_STATS`
  - **Ruta:** `/dashboard/stats`
  - **Descripción:** Métricas del proyecto (peso estimado, total de páginas, componentes usados, etc.).

---

## 2. General (`/dashboard/general`)
Ajustes globales y metadatos del sitio.

- **Datos de la Web**
  - **Constante:** `DASH_GENERAL_WEB`
  - **Ruta:** `/dashboard/general/web`
  - **Descripción:** Nombre del sitio, favicon, SEO y metadatos básicos.
- **Configuración Global**
  - **Constante:** `DASH_GENERAL_CONFIG`
  - **Ruta:** `/dashboard/general/config`
  - **Descripción:** Ancho máximo del contenedor, paddings por defecto y color/imagen de fondo global.
- **Idiomas**
  - **Constante:** `DASH_GENERAL_LANGS`
  - **Ruta:** `/dashboard/general/langs`
  - **Descripción:** Gestión de idiomas soportados y textos multilenguaje.

---

## 3. Colores (`/dashboard/colors`)
Sistema de variables de color y paleta del proyecto.

- **Paleta de Colores**
  - **Constante:** `DASH_COLORS`
  - **Ruta:** `/dashboard/colors`
  - **Descripción:** Lista y previsualización de todos los colores guardados.
- **Añadir Color**
  - **Constante:** `DASH_COLORS_ADD`
  - **Ruta:** `/dashboard/colors/add`
  - **Descripción:** Formulario y selector (color picker) para crear nuevas variables de color.

---

## 4. Tipografía (`/dashboard/typography`)
Gestión tipográfica y fuentes del sitio web.

- **Lista de Tipografías**
  - **Constante:** `DASH_TYPOGRAPHY`
  - **Ruta:** `/dashboard/typography`
  - **Descripción:** Lista de fuentes disponibles y aplicadas en el proyecto.
- **Añadir Tipografía**
  - **Constante:** `DASH_TYPOGRAPHY_ADD`
  - **Ruta:** `/dashboard/typography/add`
  - **Descripción:** Importación de fuentes (Google Fonts o locales).

---

## 5. Páginas (`/dashboard/pages`)
Estructura de rutas y páginas de contenido de la web.

- **Lista de Páginas**
  - **Constante:** `DASH_PAGES`
  - **Ruta:** `/dashboard/pages`
  - **Descripción:** Listado de todas las páginas creadas con opciones de edición, configuración y eliminación.
- **Crear Página**
  - **Constante:** `DASH_PAGES_ADD`
  - **Ruta:** `/dashboard/pages/add`
  - **Descripción:** Asistente para crear una nueva página (título, prefijos, sufijos, header y footer asociados).

---

## 6. Layouts (`/dashboard/layouts`)
Estructuras y marcos compartidos (Cabeceras y Pies de página reutilizables).

- **Lista de Layouts**
  - **Constante:** `DASH_LAYOUTS`
  - **Ruta:** `/dashboard/layouts`
  - **Descripción:** Listado de cabeceras (headers) y pies (footers) configurados.
- **Crear Layout**
  - **Constante:** `DASH_LAYOUTS_ADD`
  - **Ruta:** `/dashboard/layouts/add`
  - **Descripción:** Creador/editor de un nuevo marco estructural (header o footer).

---

## 7. Media (`/dashboard/media`)
Biblioteca de recursos multimedia y archivos subidos.

- **Galería de Medios**
  - **Constante:** `DASH_MEDIA`
  - **Ruta:** `/dashboard/media`
  - **Descripción:** Galería con imágenes, iconos y assets disponibles.
- **Subir Archivo**
  - **Constante:** `DASH_MEDIA_ADD`
  - **Ruta:** `/dashboard/media/add`
  - **Descripción:** Zona de carga para nuevos assets multimedia.

---

## 8. Formularios (`/dashboard/forms`)
Gestor y constructor de formularios interactivos.

- **Lista de Formularios**
  - **Constante:** `DASH_FORMS`
  - **Ruta:** `/dashboard/forms`
  - **Descripción:** Lista de formularios diseñados para la web.
- **Crear Formulario**
  - **Constante:** `DASH_FORMS_ADD`
  - **Ruta:** `/dashboard/forms/add`
  - **Descripción:** Creador/editor visual de campos de formulario.

---

## 9. Creación de Componentes (`/dashboard/components`)
Biblioteca de componentes modulares y bloques reutilizables.

- **Lista de Componentes**
  - **Constante:** `DASH_COMPONENTS`
  - **Ruta:** `/dashboard/components`
  - **Descripción:** Catálogo de componentes personalizados creados en el proyecto.
- **Crear Componente**
  - **Constante:** `DASH_COMPONENTS_ADD`
  - **Ruta:** `/dashboard/components/add`
  - **Descripción:** Constructor de nuevos componentes modulares.

---

## 10. Proyecto (`/dashboard/project`)
Acciones de ciclo de vida del proyecto, importación, exportación y compilación.

- **Generar y Descargar (Build)**
  - **Constante:** `DASH_PROJECT_BUILD`
  - **Ruta:** `/dashboard/project/build`
  - **Descripción:** Compila el proyecto y lo empaqueta en archivos HTML, CSS y JS listos para producción.
- **Exportar Proyecto**
  - **Constante:** `DASH_PROJECT_EXPORT`
  - **Ruta:** `/dashboard/project/export`
  - **Descripción:** Descarga el estado del proyecto en formato JSON.
- **Importar Proyecto**
  - **Constante:** `DASH_PROJECT_IMPORT`
  - **Ruta:** `/dashboard/project/import`
  - **Descripción:** Carga un archivo JSON existente para continuar editándolo.
- **Plantillas y Reseteo**
  - **Constante:** `DASH_PROJECT_TEMPLATE`
  - **Ruta:** `/dashboard/project/template`
  - **Descripción:** Cambiar la plantilla base activa o reiniciar el proyecto a su estado inicial.
