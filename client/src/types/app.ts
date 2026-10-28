import type { WebData, WebConfig } from "./config";
import type { FormsList, ComponentsList, LayoutsList, PagesList } from "./web";

export interface TyposList
{
    id: string;
    typo: string;
}

interface ColorState
{
    id: string;
    color: string;
    hover: string;
}

export interface ColorPalette
{
    id: string;
    color: ColorState;
    dark_color: ColorState;
}

export interface AppState
{
    website: WebData;
    config: WebConfig;
    colors: ColorPalette[];
    typos: TyposList[];
    pages: PagesList[];
    layouts: LayoutsList[];
    components: ComponentsList[];
    forms: FormsList[];
    images: string[];
    icons: string[];
}