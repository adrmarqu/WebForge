interface AttributeList
{
    code: string;
    content?: string;
}

interface PageElement
{
    id: string;
    type: "html" | "component" | "form" | "layout";
    code?: string; // Only html
    attributes: AttributeList[]; // Only html
    children?: string | number | (PageElement | number)[];
    ref?: string; // Component, form or layout
}

export interface PagesList
{
    id: string;
    title: string;
    name: string;
    path: string;
    content: PageElement[];
    styles: string[];
    scripts: string[];
}

export interface LayoutsList
{
    id: string;
    name: string;
    type: "header" | "footer";
    content: PageElement[];
    styles: string[];
    scripts: string[];
}

export interface ComponentsList
{
    id: string;
    name: string;
    content: PageElement[];
    styles: string[];
    scripts: string[];
}

export interface FormsList
{
    id: string;
    name: string;
    content: PageElement[];
    styles: string[];
    scripts: string[];
}