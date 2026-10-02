1. Estructura Raíz y Metadatos (Documento y Configuración)
<!DOCTYPE html>: Define el tipo de documento y la versión de HTML (HTML5).
<html>: Representa la raíz de un documento HTML; el contenedor de todo el contenido.
<head>: Contiene la metainformación del documento (título, scripts, estilos, codificación).
<title>: Define el título de la página web que aparece en la pestaña del navegador.
<meta>: Proporciona metadatos estructurados como la codificación de caracteres, autor y diseño responsivo.
<link>: Vincula el documento a recursos externos, principalmente hojas de estilo CSS.
<style>: Contiene estilos CSS internos para la página web.
<script>: Incrusta o hace referencia a código ejecutable (scripts de JavaScript).
2. Estructura y Contenido Principal (Secciones y Bloques)
<body>: Contiene todo el contenido visible de una página web.
<header>: Representa un contenedor de contenido introductorio o de navegación (cabecera).
<nav>: Define una sección de la página destinada a enlaces de navegación.
<main>: Especifica el contenido principal y dominante del cuerpo de un documento.
<section>: Define una sección temática genérica dentro de un documento.
<article>: Representa una composición autocontenida en un documento, como un artículo de blog o noticia.
<aside>: Define contenido secundario tangencialmente relacionado con el contenido principal (barra lateral).
<footer>: Representa el pie de página para su sección ancestro más cercana (autor, enlaces legales, etc.).
<div>: Elemento contenedor genérico en bloque para agrupar contenido y aplicar estilos.
3. Texto y Tipografía (Contenido en Línea y Bloques de Texto)
<h1> a <h6>: Niveles de encabezado (títulos), donde <h1> es el más importante y <h6> el menor.
<p>: Representa un párrafo de texto.
<span>: Contenedor en línea genérico para fraseo y texto, útil para aplicar estilos puntuales.
<br>: Introduce un salto de línea simple dentro del texto.
<hr>: Produce una ruptura temática entre elementos a nivel de bloque (una línea horizontal).
<strong>: Indica que su contenido tiene fuerte importancia, urgencia o seriedad (se muestra en negrita).
<em>: Marca texto que tiene énfasis por estrés o tono (se muestra en cursiva).
<b>: Pone el texto en negrita por estilo visual, sin darle importancia semántica especial.
<i>: Pone el texto en cursiva por estilo visual (ej. términos técnicos o pensamientos).
<blockquot>: Indica que el texto contenido es una cita larga en bloque proveniente de otra fuente.
<q>: Define una cita corta en línea.
<cite>: Contiene el título de una obra creativa o fuente citada.
<code>: Representa un fragmento de código de programación informático.
<pre>: Define texto preformateado que respeta los espacios y saltos de línea tal cual se escriben.
<abbr>: Representa una abreviatura o acrónimo.
<mark>: Destaca o marca texto por su relevancia contextual.
<small>: Representa comentarios secundarios o texto de letra pequeña (como derechos de autor).
<del>: Representa texto que ha sido borrado o eliminado de un documento.
<ins>: Define texto que ha sido añadido o insertado en un documento.
<sub>: Define texto subíndice (más pequeño y abajo).
<sup>: Define texto superíndice (más pequeño y arriba).
4. Enlaces, Multimedia e Inserts (Contenido Visual y Externo)
<a> (Anchor): Define un hiperenlace para navegar entre páginas, archivos o ubicaciones.
<img>: Incrusta una imagen en la página web.
<audio>: Incrusta contenido de sonido o flujo de audio.
<video>: Incrusta un reproductor de contenido de video compatible.
<source>: Especifica recursos multimedia alternativos para <audio>, <video> o <picture>.
<track>: Especifica pistas de texto cronometradas (subtítulos) para <video> o <audio>.
<picture>: Contenedor para múltiples elementos <source> y una etiqueta <img> para imágenes adaptativas.
<iframe>: Incrusta otra página web o documento HTML anidado dentro de la actual.
<canvas>: Utilizado para dibujar gráficos, animaciones o juegos mediante scripts (JavaScript).
<embed>: Incrusta contenido externo o complementos multimedia de aplicaciones de terceros.
<object>: Representa un recurso externo como una imagen, documento PDF o aplicación integrada.
5. Tablas de Datos
<table>: Define una tabla de datos tabulares.
<caption>: Define el título o descripción general de una tabla.
<thead>: Agrupa el contenido de la cabecera dentro de una tabla.
<tbody>: Agrupa el contenido principal del cuerpo de una tabla.
<tfoot>: Agrupa el contenido del pie de la tabla (totales, resúmenes).
<tr>: Define una fila de celdas dentro de una tabla.
<th>: Define una celda de encabezado dentro de una tabla (negrita y centrada por defecto).
<td>: Define una celda de datos estándar dentro de una tabla.
<colgroup>: Especifica un grupo de una o más columnas en una tabla para aplicar estilos.
<col>: Define las propiedades de una columna dentro de un elemento <colgroup>.
6. Formularios e Interacción de Usuario
<form>: Representa una sección interactiva de un formulario para enviar datos al servidor.
<input>: Control de interfaz de usuario interactivo para aceptar datos del usuario (texto, checkbox, radio, ficheros, etc.).
<button>: Un botón interactivo clickeable para enviar formularios o ejecutar acciones.
<label>: Representa una etiqueta descriptiva para un control de un formulario.
<select>: Crea una lista desplegable de opciones seleccionables.
<option>: Define un elemento u opción individual dentro de un menú desplegable <select>.
<optgroup>: Agrupa opciones relacionadas dentro de un elemento <select>.
<textarea>: Define un control de entrada de texto multilínea.
<fieldset>: Agrupa elementos relacionados dentro de un formulario con un borde visual.
<legend>: Define una leyenda o título para el contenedor <fieldset>.
<output>: Representa el resultado calculado de una acción o cálculo de script.
<progress>: Muestra el indicador de progreso de la finalización de una tarea.
<meter>: Representa un valor escalar dentro de un rango conocido (ej. medidor de disco).
<datalist>: Contiene un conjunto de elementos <option> que representan valores sugeridos para otros controles.
7. Elementos Dinámicos y Avanzados
<details>: Crea un widget disclosure (desplegable) donde la información solo es visible si el usuario lo abre.
<summary>: Define un resumen o leyenda visible para el control interactivo <details>.
<dialog>: Representa una ventana de diálogo flotante o cuadro emergente (modal o no modal).
<template>: Contenedor oculto para la carga de plantillas HTML que pueden clonarse con JavaScript.
<slot>: Un marcador de posición dentro de un Web Component donde puedes insertar tu propio marcado.