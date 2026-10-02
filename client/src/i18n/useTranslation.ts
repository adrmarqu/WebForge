import { useState } from "react";
import es from "./translations/es";
import en from "./translations/en";

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
        let current: any = translations[lang];

        for (const key of keys)
        {
            if (current && typeof current === 'object' && key in current)
                current = current[key];
            else
                return code;
        }
        if (current && typeof current === 'object' && 'default' in current)
            return current.default;

        return typeof current === 'string' ? current : code;
    };

    return { lang, changeLanguage, t };
};