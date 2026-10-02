import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogTemplate from "../../components/ui/Dialog/DialogTemplate.tsx";
import type { Template } from "../../types/dialog.ts";
import { useStore } from "../../store/useStore.ts";
import Button from "../../components/ui/Button/Button.tsx";
import { useTranslation } from "../../i18n/useTranslation.ts";
import { ROUTES, VALID_ROUTES } from "../../utils/routes.ts";
import './Home.scss';

function Home()
{
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const loadTemplate = useStore((state: any) => state.loadTemplate);
    const isTplActive = useStore((state: any) => state.active);
    const savedPath = useStore((state: any) => state.path);
    
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const { t } = useTranslation();

    // Open dialog
    const openDialog = (): void => setIsOpen(true);
    
    const toDashboard = () => navigate(ROUTES.DASH_HOME);

    // Handle the template selected
    const handleTemplate = (tpl: Template | null): void =>
    {
        setError("");
        setIsOpen(false);
        if (tpl === null || tpl.data === null) return;
        loadTemplate(tpl.data);
        toDashboard();
    };

    // Load file
    const loadFile = (): void => fileInputRef.current?.click();

    const checkFile = (event: React.ChangeEvent<HTMLInputElement>): void =>
    {
        const file = event.target.files?.[0];
        if (!file)
        {
            setError("No se ha seleccionado ningun archivo.");
            return;
        }

        setError("");

        const reader = new FileReader();
        reader.onload = (e) =>
        {
            try
            {
                const content = e.target?.result as string;
                const parsedData = JSON.parse(content);

                if (!parsedData || typeof parsedData !== 'object') 
                {
                    setError("El archivo no es válido.");
                    return;
                }

                loadTemplate(parsedData);
                toDashboard();
            } 
            catch (error) 
            {
                setError("Error al leer el archivo JSON.");
            } 
            finally
            {
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        };
        reader.readAsText(file);
    };

    const handleContinue = (): void =>
    {
        if (savedPath && VALID_ROUTES.has(savedPath))
            navigate(savedPath);
        toDashboard();
    };

    return (
        <>
        <main className="home flex h-center v-center">
        <div className="home-card flex col v-center">
            <h1 className="">{t('home.welcome')}</h1>
            <div className="hidden error-container">
                <span>{error}</span>
            </div>
            
            {isTplActive && (
                <Button variant="success" onClick={handleContinue}>
                    {t('home.continue')}
                </Button>
            )}
            
            <Button variant="primary" onClick={openDialog}>
                {t('home.new')}
            </Button>
            <Button variant="primary" onClick={loadFile}>
                {t('home.load')}
            </Button>

            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={checkFile} 
                style={{ display: "none" }} 
                accept=".json"
            />

            <Link to={ROUTES.HTML} className="btn btn-secondary">
                {t('home.html')}
            </Link>
            <Link to={ROUTES.CSS} className="btn btn-secondary">
                {t('home.css')}
            </Link>
            <Link to={ROUTES.CONFIG_MAKE} className="btn btn-react">
                {t('home.react')}
            </Link>
        </div></main>

        <DialogTemplate
            isOpen={isOpen}
            onClose={handleTemplate}
            templateType="web"
        />
        </>
    );
}

export default Home;