import type { TemplateType } from "../types/dialog";

const modulesWeb = import.meta.glob('./web/*.ts', {eager: true});
const modulesCol = import.meta.glob('./colors/*.ts', {eager: true});
const modulesCom = import.meta.glob('./components/*.ts', {eager: true});

const webTemplates = Object.entries(modulesWeb).map(([path, module]: [string, any]) => 
{
    const template = module.default;
    return { ...template };
});

const colorTemplates = Object.entries(modulesCol).map(([path, module]: [string, any]) => 
{
    const template = module.default;
    return { ...template };
});

const compTemplates = Object.entries(modulesCom).map(([path, module]: [string, any]) => 
{
    const template = module.default;
    return { ...template };
});

export const getTemplates = (type: TemplateType): any[] =>
{
    if (type === "web") return webTemplates;
    else if (type === "color") return colorTemplates;
    else if (type === "component") return compTemplates;
    return [];
};