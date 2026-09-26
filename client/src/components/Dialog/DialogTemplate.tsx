import type { DialogProps, Template } from "../../types/dialog";
import { useState, useEffect, useRef } from "react";
import TplComponent from "../Template/Template";
import { getTemplates } from "../../templates";
import Button from "../Button/Button";
import { useTranslation } from "../../i18n/useTranslation";
import './DialogTemplate.css';

function DialogTemplate({isOpen, onClose, templateType}: DialogProps)
{
    const [tpl, setTpl] = useState<Template | null>(null);
    const templates = getTemplates(templateType);
    const { t } = useTranslation();

    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => 
    {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        else if (!isOpen && dialog.open) dialog.close();

    }, [isOpen]);

    const printTemplates = (): React.ReactNode =>
    {
        return (
            <div className="dialog-templates grid">
                {templates.map((t, index) => (
                    <TplComponent 
                        key={index} 
                        image={t.image} 
                        code={t.code} 
                        type={t.type} 
                        onClick={() => setTpl(t)}
                        isSelected={tpl?.code === t.code}    
                    />
                ))}
            </div>
        );
    };

    const saveBtn = (): void => onClose(tpl);
    const cancelBtn = (): void => { setTpl(null); onClose(null); };

    return (
        <dialog className="dialog" ref={dialogRef}>
            <div className="dialog-header">
                <h2>{t(`items.dialog.title.${templateType}`)}</h2>
                <p>{t(`items.dialog.desc.${templateType}`)}</p>
            </div>

            <hr />

            {printTemplates()}

            <hr />

            <div className="dialog-footer flex h-end">
                <Button variant="secondary" onClick={cancelBtn}>
                    {t('btn.cancel')}
                </Button>
                <Button variant={!tpl ? "disabled" : "primary"} onClick={saveBtn} disabled={!tpl}>
                    {t('btn.select')}
                </Button>
            </div>
        </dialog>
    );
}

export default DialogTemplate;