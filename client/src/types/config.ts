import type { Language } from "../i18n/useTranslation";

export type ClientLang = "js" | "ts";
export type Format = "Css" | "Inline" | "Tailwind";
export type Compiler = "npm" | "pnpm" | "yarn" | "docker";
export type Linter = "Oxlint" | "ESLint";

/* React */
export interface ReactConfig
{
    lang: ClientLang;
    format: Format;
    compiler: Compiler;
    readme: Language;
    vite: boolean;
    linter: Linter;
};

export interface ReactAction
{
    getLang: () => ClientLang;
    setLang: (lang: ClientLang) => void;
};

/* PHP */
export interface PhpConfig
{

};

export interface PhpAction
{

};

export interface ConfigStore
{
    config: ReactConfig | PhpConfig | null;
};

export interface ConfigAction
{
    reactAction: ReactAction;
    phpAction: PhpAction;
};