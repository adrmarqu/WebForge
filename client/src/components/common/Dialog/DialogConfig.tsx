import { useTranslation } from "../../../i18n/useTranslation";
import { useRef, useEffect } from "react";
import Button from "../Button/Button";
import DividerTitle from "../DividerTitle/DividerTitle";

interface DialogConfigProps
{
    children?: React.ReactNode;
    title: string;
    isOpen: boolean;
    onCancel: () => void;
    onDownload: () => void;
}

const DialogConfig = ({children, isOpen, onCancel, onDownload, title}: DialogConfigProps) =>
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
            <DividerTitle title={title} />
            {children}
            <div>
                <Button onClick={onCancel} variant="secondary">
                    {t('btn.cancel')}
                </Button>
                <Button onClick={onDownload} variant="primary">
                    {t('btn.download')}
                </Button>
            </div>
        </dialog>
    );
}
export default DialogConfig;