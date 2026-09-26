import type { Language } from "../i18n/useTranslation";

export type ClientLang = "js" | "ts";
export type Format = "Css" | "Inline" | "Tailwind";
export type Compiler = "npm" | "pnpm" | "yarn" | "docker";
export type Linter = "Oxlint" | "ESLint";

export type ReactConfig =
{
    lang: ClientLang;
    format: Format;
    compiler: Compiler;
    readme: Language;
    vite: boolean;
    linter: Linter;
};