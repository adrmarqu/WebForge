# Home

Página de inicio

# Contenido

## Card

Un card en el centro con las opciones disponibles

## Boton continuar proyecto

### Antes

La pagina comprueba que en zustand exista un proyecto, en caso de existir este boton aparecera.

### Acciones

Al pulsarlo te dirigiras a la ultima pagina visitada.

### Errores

En caso de que el proyecto este corrupto, saldra mensaje de error
En caso de que zustand no guarde la ultima pagina o esa pagina no exista, te mandara al dashboard con el proyecto

## Boton nuevo proyecto

### Acciones

Al pulsarlo abre un dialog con todos los templates, al seleccionar uno de ellos te mandara al dashboard.

### Errores

En caso de que los datos no se carguen bien, haya datos extras o falten datos, solo se utilizara lo que se pueda y te iras al dashboard

## Boton de cargar proyecto

### Acciones

Abrira un archivo .json y luego ire al dashboard y mostrare un mensaje de success en una ventana flotante.

### Errores

En caso de estar vacio mostrara error
En caso de no tener el elemento 'template' dara error.

## Enlace HTML

Enlace que te lleva a la guia de HTML

## Enlace CSS

Enlace que te lleva a la guia de CSS

## Enlace Makefile

Enlace que te lleva a la configuracion del Makefile


## Contenido

- **Card con todo el home:** Tiene 5 botones
- **Boton de continuar proyecto**
- **Boton de nuevo proyecto**
    - Acción: Abre un dialog con las plantillas
    - Contenido: Blanco, (otras opciones), boton de cancelar, boton de elegir
- **Boton de cargar proyecto**
    - Acción: Permite subir un archivo .zip/.json para cargar un proyecto
    - Comportamiento: Lee el archivo, actualiza el json de los datos y redirige al dashboard
        - Si falla, lanza un mensaje de error
- **Enlace de html docs**
    - Acción: Te dirige a la página de información de html
- **Enlace de css docs**
    - Acción: Te dirige a la página de información de css
- **Boton para descargar un proyecto base de React**
    - Acción: Abre un dialog con las opciones con lo que lo quieres
    - Contenido: JS/TS, Tailwind/Css/inline, SPA/Basico, npm/pnpm/yarn, boton de cancelar, boton de descargar

