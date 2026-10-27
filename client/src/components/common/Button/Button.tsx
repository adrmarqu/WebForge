type ButtonType = "base" | "primary" | "secondary" | "danger" | "warning" | "special";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
{
    children?: React.ReactNode;
    variant?: ButtonType;
    classname?: string | null;
    onClick: () => void;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    isLoading?: boolean;
    size?: ButtonSize;
};

const Button = ({children = "", variant = "base", classname = null, onClick, type = "button", disabled = false, isLoading = false, size = "md"}: ButtonProps) =>
{
    return (
    <button
        className={`btn btn-${variant} btn-${size} ${classname}`}
        onClick={onClick}
        type={type}
        disabled={disabled || isLoading}
    >
        {isLoading && <span className="spinner" />}
        {children}
    </button>
    );
};

export default Button;