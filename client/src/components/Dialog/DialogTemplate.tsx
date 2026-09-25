import type { DialogProps } from "../../types/dialog";
import type { Template } from "../../types/dialog";
import { useState } from "react";
import TplComponent from "../Others/Template/Template";
import { getTemplates } from "../../templates";

function DialogTemplate({title, description, open, onClose, templateType}: DialogProps)
{
    if (!open) return null;

    const [tpl, setTpl] = useState<Template | null>(null);
    const templates = getTemplates(templateType);

    const printTemplates = (): React.ReactNode =>
    {
        return (
            <div>
                {templates.map((t, index) => (
                    <TplComponent key={index} image={t.image} name={t.name} onClick={() => setTpl(t)}/>
                ))}
            </div>
        );
    };

    const saveBtn = (): void => onClose(tpl);
    const cancelBtn = (): void => onClose(null);

    return (
        <dialog open>
            <h2>{title}</h2>
            <p>{description}</p>
                
            {printTemplates()}

            <div>
                <button onClick={cancelBtn}>Cancelar</button>
                <button onClick={saveBtn} disabled={!tpl}>Elegir</button>
            </div>
        </dialog>
    );
}

export default DialogTemplate;