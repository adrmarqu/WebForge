import type { Template } from "../../types/dialog";

export const blank: Template = 
{
    code: "blank",
    image: "/assets/blank.png",
    type: "web",
    data: {
        template: "blank",
        active: true,
        config: {
            max_width: { value: 100, type: '%' },
            padding: { value: 0, type: 'none' },
            bg: '#ffffff'
        },
        colors: [],
        texts: [],
        assets: [],
        css: [],
        ts: [],
        layouts: [],
        pages: [],
        tags: []
    }
};

export default blank;