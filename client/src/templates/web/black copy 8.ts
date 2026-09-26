import type { Template } from "../../types/dialog";

export const black: Template = 
{
    code: "black",
    image: "/assets/blank.png",
    type: "web",
    data: {
        template: "black",
        config: {
            max_width: { value: 100, type: '%' },
            padding: { value: 0, type: 'none' },
            bg: '#000000'
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

export default black;