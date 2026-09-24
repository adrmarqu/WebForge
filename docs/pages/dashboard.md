# Dashboard

Menu principal

## Contenido

- **Header**
    - Global
        - Colores
        - Tipografia
        - Layout (ancho maximo, padding, margen...)
        - Idiomas
    - Paginas
        - Editar web
        - Lista de paginas (puedes crear, editar o eliminar paginas). Al editar, la vista cambia y se pone otra.
    - Creacion
        - Lista de componentes (crear, editar, eliminar)
        - Añadir plantilla actual (Hace de la pagina actual una plantilla)
        - Guardar estilo (Guarda los colores)
    - Proyecto
        - Guardar / Cargar
        - Exportar
        - Eliminar

### Colores

Aqui podras crear los colores de la página web. Podras escoger plantillas predeterminadas y tambien meter el modo oscuro. En este apartado, los colores estan en una lista vertical, si activas el modo oscuro, aparecera una columan a la derecha con todos los colores que tengas invertidos.

- Colores de la pagina
    - Fondo (max 10)
    - Texto (max 10)
    - Estados + Hovers (max 20)

- Botones (puedes crear estilos de botones -> texto + fondo + hover) -> max 10
- Links (puedes crear estilos para links -> texto + active) -> max 5

### Tipografia

Aqui puedes escoger hasta 10 tipografias

### Layout

Aqui puedes escoger el ancho de pantalla de la web, el padding (que tan alejado esta el contenido de los bordes), el favicon, un prefijo y sufijo para los titulos de las paginas (ej. (prefijo)Camagru | (titulo)... (sufijo)| 2026).

### Idiomas

El idioma predeterminado esta en Español (es), puedes añadir diferentes idiomas. Si solo hay un idioma hay una casilla que puedes marcar, si esta marcada los textos te los separara en un archivo por ejemplo 'es.json', si tienes mas de un idioma te pondra los textos en base.json, y te creara los archivos de los idomas escogidos (es.json, en.json...)

### Editar web

Un enlace al editor de páginas, te lleva al home (la primera página), ahi podras ir moviendote entre todas las páginas para editarlas

### Lista de paginas

Aqui esta la lista de las paginas. Estara dividio en 3 partes: header, pagina, footer. Las páginas tendran el primer header y el primer footer y podras cambiarlos. Puede haber mas de un header y footer. Podras entrar dentro y cambiarlas como quieras, tambien podras editarlas.

- Header y Footer: Podras cambiarles el nombre y eliminarlos
- Paginas: Podras cambiarles el titulo, el nombre, asignarles un header y footer, el ancho maximo, el padding. Tambien podras eliminarlas

### Lista de componentes - admin

Lista de todos los componentes, similar a la lista de paginas pero con componentes. Podras crear, editar, descargar y elminar componentes.

### Añadir plantilla actual - admin

Guarda los datos actuales de la página en el apartado de plantillas

### Guardar estilo - admin

Guarda la actual paleta de colores, puedes elegir si guardar el modo oscuro y/o el modo claro

### Guardar / Cargar

Puedes descargar un zip/json con los datos actuales de la página. Puedes elegir diferentes opciones.
 - Formato: Clasico, php
 - Incluir imagenes
 - Incluir favicon
 - Incluir traducciones (bool)
 - Incluir Makefile de React
    - TS - JS
    - Tailwind - CSS
    - SPA - Basico
    - npm - pnpm - yarn
    
Puedes cargar un zip/json para remplazar los datos actuales de la página por unos nuevos

### Exportar

Te muestra todos los archivos (html, css, js) de tu web, puedes copiarlos o descargarlos en un zip

### Eliminar

Eliminar tu web actual y la pone en blanco (predeterminado)