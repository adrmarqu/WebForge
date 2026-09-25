type UnitType = "px" | "%" | "rem" | "em" | "vh" | "vw" | "s" | "ms" | "auto" | "none";
type LayoutType = "header" | "footer";
type ColorType = 'bg' | 'text' | 'hover' | 'state';

/* Config */
interface UnitValue
{
    value: number;
    type: UnitType | null;
};

export interface ConfigState
{
    max_width: UnitValue;
    padding: UnitValue;
    bg: string;
};

interface ConfigActions
{
    set: (data: ConfigState) => void;
    update: (data: Partial<ConfigState>) => void;
};

/* Colors */
export interface ColorState
{
    id: number;
    name: string;
    type: ColorType;
    color: string;
};

interface ColorActions
{
    add: (data: ColorState) => void;
    update: (id: number, data: Partial<ColorState>) => void;
    remove: (id: number) => void;
};

/* Typography */
export interface TextState
{
    id: number;
    typography: string;
};

interface TextActions
{
    add: (data: TextState) => void;
    update: (id: number, data: Partial<TextState>) => void;
    remove: (id: number) => void;
};

/* Images */
export interface AssetState
{
    id: number;
    image: string | null;
    alt: string | null;
    title: string | null;
};

interface AssetActions
{
    add: (data: AssetState) => void;
    update: (id: number, data: Partial<AssetState>) => void;
    remove: (id: number) => void;
};

/* Files Css and Ts */
export interface FileState
{
    id: number;
    name: string;
    content: string | null;
};

interface FileActions
{
    add: (name: string, content: string) => void;
    update: (id: number, data: Partial<FileState>) => void;
    remove: (id: number, name: string) => void; // Uno de los dos
};

/* Interface base of layout and pages */
interface BaseTag
{
    id: number;
    order: number;
};

interface BaseState
{
    id: number;
    name: string;
    css_id: number;
    ts_id: number;
    tags: BaseTag[] | null;
};

/* Layout */
export interface LayoutState extends BaseState
{
    type: LayoutType;
};

interface LayoutActions
{
    add: (data: LayoutState) => void;
    update: (id: number, data: Partial<LayoutState>) => void;
    remove: (id: number) => void;
};

/* Pages */
export interface PageState extends BaseState
{
    prefix: string | null;
    title: string;
    sufix: string | null;
    header_id: number;
    footer_id: number;
};

interface PageActions
{
    add: (data: PageState) => void;
    update: (id: number, data: Partial<PageState>) => void;
    remove: (id: number) => void;
};

/* Tags */
export interface TagState
{
    id: string;
    name: string;
    attributes: string | null;
    css_id: number;
};

interface TagActions
{
    add: (data: TagState) => void;
    update: (id: string, data: Partial<TagState>) => void;
    remove: (id: string) => void;
};

/* Global */
export interface WebState
{
    config: ConfigState;
    colors: ColorState[];
    texts: TextState[];
    assets: AssetState[];
    css: FileState[];
    ts: FileState[];
    layouts: LayoutState[];
    pages: PageState[];
    tags: TagState[];
    template: string | null;
};

interface WebActions
{
    configActions: ConfigActions;
    colorsActions: ColorActions;
    textsActions: TextActions;
    assetsActions: AssetActions;
    cssActions: FileActions;
    tsActions: FileActions;
    layoutActions: LayoutActions;
    pagesActions: PageActions;
    tagsActions: TagActions;
    loadTemplate: (template: WebState) => void;
};

export interface WebStore extends WebState, WebActions {};