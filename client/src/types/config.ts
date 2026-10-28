interface NumberType
{
    nbr: number;
    type?: string;
}

interface LangState
{
    lang: string;
    lang_list: string[];
}

export interface WebConfig
{
    favicon?: string;
    prefix?: string;
    sufix?: string;

    padding: NumberType;
    bg?: number | string;
    typo_primary: number;
    typo_seconadry: number;
    typo_special: number;

    lang: LangState;
}

export interface WebData
{
    name: string;
    template: string;
    version: number;

    creation: Date;
    last: Date;
}