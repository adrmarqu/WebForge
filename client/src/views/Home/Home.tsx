import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n/useTranslation";

import Button from "../../components/common/Button/Button";
import DialogSelect from "../../components/common/Dialog/DialogSelect";
import DialogConfig from "../../components/common/Dialog/DialogConfig";

const HomeView = () =>
{
    const navigate = useNavigate();
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedTpl, setSelectedTpl] = useState(null);
    const [isConfigOpen, setIsConfigOpen] = useState(false);
    
    // Get data from zustand
    const isDataSaved = (): boolean => false;

    // Go to dashboard
    const goDashboard = () => navigate('/dashboard');
    
    // Handle selection dialog
    const handleDialogTpl = (state: boolean): void =>
    {
        if (!state) setSelectedTpl(null);
        setIsSelectOpen(state);
    }
    const handleSave = (): void =>
    {
        // Save Data on zustand
        handleDialogTpl(false);
        goDashboard();
    }

    // Handle config dialog
    const handleDialogMake = (state: boolean): void => setIsConfigOpen(state);
    const handleDownload = (): void =>
    {
        // Create or select Makefile
        // Download Makefile
        handleDialogMake(false);
    }
    
    // Get file from your computer
    const openFile = (): void => inputRef.current?.click();

    const handleFiles = async (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        // Mirar si es un zip o muchos json
        const file = event.target.files?.[0];
        if (!file) return ;

        // Leer archivo y guardar datos
        goDashboard();
    };

    return (
    <>
    <section>
        <h2>{t('home.title')}</h2>
        {isDataSaved() && (
            <Button onClick={goDashboard} variant="primary">
                {t('btn.home.continue')}
            </Button>
        )}
        <Button onClick={() => handleDialogTpl(true)} variant="primary">
                {t('btn.home.new')}
        </Button>
        <Button onClick={openFile} variant="secondary">
                {t('btn.home.load')}
        </Button>
        <span>{t('')}</span>
        <Button onClick={() => handleDialogMake(true)} variant="special">
                {t('btn.home.makefile')}
        </Button>

        <input
            type="file" 
            ref={inputRef} 
            className="hidden"
            multiple
            accept=".json,application/json,.zip,application/zip" 
            onChange={handleFiles} 
        />
    </section>

    <DialogSelect
        intro={t('home.dialog_tpl')} 
        isOpen={isSelectOpen}
        onCancel={() => handleDialogTpl(false)}
        onSave={handleSave}
    >
        {/* Lista de templates */}
    </DialogSelect>
    
    <DialogConfig
        isOpen={isConfigOpen}
        title={t('home.dialog_make')}
        onCancel={() => handleDialogMake(false)}
        onDownload={handleDownload}
    >
        {/* Componente de config */}
    </DialogConfig>
    </>
    );
};

export default HomeView;