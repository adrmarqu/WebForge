import type { TemplateType } from "../types/dialog";
import blank from "./web/blank";

const modulesWeb = import.meta.glob('./web/*.ts', {eager: true});
const modulesCol = import.meta.glob('./colors/*.ts', {eager: true});
const modulesCom = import.meta.glob('./components/*.ts', {eager: true});

const uniqueByCode = (list: any[]) =>
{
    const seen = new Set();
    return list.filter(item =>
    {
        if (!item?.code) return true;
        if (seen.has(item.code)) return false;
        seen.add(item.code);
        return true;
    });
};

// Web templates
const webTemplatesRaw = Object.values(modulesWeb).map((module: any) => ({ ...module.default }));

// Color templates
const colorTemplates = Object.values(modulesCol).map((module: any) => ({ ...module.default }));

// Component temmplates
const compTemplates = Object.values(modulesCom).map((module: any) => ({ ...module.default }));

// First element blank in web
const webTemplates = 
[
    blank,
    ...uniqueByCode(webTemplatesRaw).filter(t => t.code !== "blank") 
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