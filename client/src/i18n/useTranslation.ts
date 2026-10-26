import { useState } from "react";
import es from "./locales/es";
import en from "./locales/en";

const translations = {en, es};
export type Language = 'en' | 'es';

let currentLang: Language = 'es';

export const useTranslation = () =>
{
    const [lang, setLang] = useState<Language>(currentLang);

    const changeLanguage = (newLang: Language) =>
    {
        currentLang = newLang;
        setLang(newLang);
    };

    const t = (code: string): string =>
    {
        const keys = code.split('.');
        let current: unknown = translations[lang];

        for (const key of keys)
        {
            if (current && typeof current === 'object' && key in current)
                current = (current as Record<string, unknown>)[key];
            else
                return code;
        }
        if (current && typeof current === 'object' && 'default' in current)
            return (current as Record<string, unknown>).default as string;

        return typeof current === 'string' ? current : code;
    };

    return { lang, changeLanguage, t };
};