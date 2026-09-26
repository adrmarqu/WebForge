import type { TemplateType } from "../types/dialog";
import blank from "./web/blank";

const modulesWeb = import.meta.glob('./web/*.ts', {eager: true});
const modulesCol = import.meta.glob('./colors/*.ts', {eager: true});
const modulesCom = import.meta.glob('./components/*.ts', {eager: true});

// Web templates
const webTemplatesRaw = Object.entries(modulesWeb).map(([path, module]: [string, any]) => { return { ...module.default }; });

// Color templates
const colorTemplates = Object.entries(modulesCol).map(([path, module]: [string, any]) => { return { ...module.default }; });

// Component temmplates
const compTemplates = Object.entries(modulesCom).map(([path, module]: [string, any]) => { return { ...module.default }; });

// First element blank in web
const webTemplates = 
[
    blank,
    ...webTemplatesRaw.filter(t => t.code !== "blank") 
];

// First element blank in color
/* const colorTemplates = 
[
    base,
    ...webTemplatesRaw.filter(t => t.code !== "base") 
]; */

export const getTemplates = (type: TemplateType): any[] =>
{
    if (type === "web") return webTemplates;
    else if (type === "color") return colorTemplates;
    else if (type === "component") return compTemplates;
    return [];
};