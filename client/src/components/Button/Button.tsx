import './Button.css';
import type { ButtonProps } from '../../types/button';

function Button({variant = "", children, onClick, disabled = false, className, type, name, id}: ButtonProps)
{
    const variantClass = variant ? `btn-${variant}` : '';
    const combinedClassName = `btn ${variantClass} ${className}`.trim();

    return (
        <button
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
            type={type}
            name={name}
            id={id}
        >
            {children}
        </button>
    );
}

export default Button;