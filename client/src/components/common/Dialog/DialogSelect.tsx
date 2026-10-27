import { useEffect, useRef } from "react";
import { useTranslation } from "../../../i18n/useTranslation";
import Button from "../Button/Button";

interface DialogSelectProps
{
    isOpen: boolean;
    children?: React.ReactNode;
    intro: string;
    onSave: () => void;
    onCancel: () => void;
}

const DialogSelect = ({isOpen, intro, children = null, onSave, onCancel}: DialogSelectProps) =>
{
    const { t } = useTranslation();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() =>
    {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        else if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    return (
        <dialog ref={dialogRef}>
            {/* Title */}
            <h4>{intro}</h4><hr />
            
            {/* Content */}
            <div>{children}</div><hr />

            {/* Buttons */}
            <div>
                <Button onClick={onCancel} variant="secondary" size="sm">
                    {t('btn.cancel')}
                </Button>
                <Button onClick={onSave} variant="primary" size="sm">
                    {t('btn.select')}
                </Button>
            </div>
        </dialog>
    );
}
export default DialogSelect;