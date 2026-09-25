import type { TemplateProps } from "../../../types/dialog";
import './Template.css';

function Template({name, image, onClick, isSelected = false}: TemplateProps)
{
    return (
        <div onClick={onClick} className={`template ${isSelected ? "selected" : ""}`}>
            <img src={image} alt="Template" title="Template" width="100" />
            <p>{name}</p>
        </div>
    );
}

export default Template;