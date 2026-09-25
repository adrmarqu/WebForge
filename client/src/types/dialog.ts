import type { WebState } from "./zustand";

export type TemplateProps =
{
    name: string;
    image: string;
    onClick?: () => void;
    isSelected?: boolean;
} 

export type Template =
{
    name: string;
    type: TemplateType;
    image: string;
    data: WebState;
};

export type TemplateType = 
| "web"
| "color"
| "component";

export type DialogProps =
{
    title: string;
    description: string;
    open: boolean;
    onClose: (result: Template | null) => void;
    templateType: TemplateType;
};