import type { TemplateProps } from "../../../types/dialog";
import './Template.scss';
import { useTranslation } from "../../../i18n/useTranslation";

function Template({code, type, image, onClick, isSelected = false}: TemplateProps)
{
    const { t } = useTranslation();

    return (
        <div onClick={onClick} className={`flex col v-center h-center template ${isSelected ? "selected" : ""}`}>
            <img src={image} alt="Template" title="Template" />
            <p>{t(`templates.${type}.${code}`)}</p>
        </div>
    );
}

export default Template;