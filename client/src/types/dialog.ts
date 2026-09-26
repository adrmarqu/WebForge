import type { WebState } from "./zustand";

export type TemplateProps =
{
    code: string;
    image: string;
    type: TemplateType;
    onClick?: () => void;
    isSelected?: boolean;
} 

export type Template =
{
    code: string;
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
    isOpen: boolean;
    onClose: (result: Template | null) => void;
    templateType: TemplateType;
};