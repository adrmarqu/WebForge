export type TagType =
/* Configuracion */
| "!DOCTYPE html" | "html" | "head" | "meta" 
| "link" | "script" | "style" | "title" | "base"

/* Listas */
| "ul" | "ol" | "li" | "dl" | "dt" | "dd" | "menu"

/* Semantica */
| "address" | "time" | "data" | "var" | "kbd" | "samp"
| "bdi" | "bdo" | "wbr"
| "ruby" | "rt" | "rp"

/* Estructura */
| "body" | "header" | "nav" | "main" | "section" 
| "article" | "aside" | "footer" | "div"

/* Tipografia */
| "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
| "p" | "span" | "br" | "hr" | "strong" | "em"
| "b" | "i" | "blockquote" | "q" | "cite" | "code" | "pre"
| "abbr" | "mark" | "small" | "del" | "ins" | "sub" | "sup"

/* Multimedia */
| "a" | "img" | "audio" | "video" | "source" | "track"
| "picture" | "iframe" | "canvas" | "embed" | "object"
| "svg" | "math" | "portal" | "area" | "map"

/* Tablas */
| "table" | "caption" | "thead" | "tbody" | "tfoot"
| "tr" | "th" | "td" | "colgroup" | "col"

/* Formularios */
| "form" | "input" | "label" | "button" | "select" 
| "option" | "optgroup" | "textarea" | "fieldset" 
| "legend" | "output" | "progress" | "meter" | "datalist" 

/* Interactivos */
| "details" | "summary" | "dialog" | "template" | "slot";

export type AttributeType =
/* Globales */
| "id" | "class" | "style" | "title" | "lang" | "hidden"
| "tabindex" | "accesskey" | "contenteditable" | "dir" | "translate"

/* Enlaces y recursos */
| "href" | "src" | "alt" | "target" | "download" | "rel"

/* Formularios */
| "type" | "name" | "value" | "placeholder" | "required"
| "disabled" | "readonly" | "checked" | "selected"
| "rows" | "cols" | "min" | "max" | "step"

/* Multimedia */
| "controls" | "autoplay" | "loop" | "poster"
| "width" | "height" | "colspan" | "rowspan" | "open"

/* Especiales */
| "data-*" | "aria-*" | "role";


export type HtmlProps =
{
    tag: TagType;
    title: string;
    attributes: AttributeType[];
    syntax: string;
};
