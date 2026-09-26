export type ButtonType =
| ""
| "primary"
| "secondary"
| "warning"
| "danger"
| "success"
| "info"
| "disabled"
| "react";

type FormButton = "button" | "reset" | "submit";

export type ButtonProps =
{
    variant?: ButtonType;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: FormButton;
    name?: string;
    id?: string;
};