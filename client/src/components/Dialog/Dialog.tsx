import React from "react";
import type { ReactNode } from "react";

interface DialogProps
{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    btnText: string;
    setTemplate: (template: string) => void;
    children: ReactNode;
}

function Dialog({ isOpen, onClose, title, btnText, children } : DialogProps)
{
    if (!isOpen) return null;

    const selectTemplate = () =>
    {
        onClose();
    };

    return (
        <dialog open>
            <h2>{title}</h2>
            {children}
            <button onClick={onClose}>Cancelar</button>
            <button onClick={selectTemplate}>{btnText}</button>
        </dialog>
    );
}

export default Dialog;