import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogTemplate from '../../components/Dialog/DialogTemplate.tsx';
import type { Template } from "../../types/dialog.ts";
import { useStore } from "../../store/useStore.ts";
import Button from "../../components/Button/Button.tsx";
import { useTranslation } from "../../i18n/useTranslation.ts";
import './Home.css';

function Home()
{
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const loadTemplate = useStore((state: any) => state.loadTemplate);
    const [error, setError] = useState<string>("Hola mundo");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    // Open dialog
    const openDialog = (): void => setIsOpen(true);

    // Handle the template selected
    const handleTemplate = (tpl: Template | null): void =>
    {
        setError("");
        setIsOpen(false);
        if (tpl === null || tpl.data === null) return ;
        if (tpl.code !== "blank") loadTemplate(tpl.data);
        navigate("/dashboard");
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
                navigate("/dashboard");
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

    return (
        <>
        <section className="home flex h-center v-center">
        <div className="home-card flex col v-center">
            <h1 className="">{t('home.welcome')}</h1>
            <div className="hidden error-container">
                <span>{error}</span>
            </div>
            
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

            <Link to="/information/html" className="btn btn-secondary">
                {t('home.html')}
            </Link>
            <Link to="/information/css" className="btn btn-secondary">
                {t('home.css')}
            </Link>
            <Link to="/config/react" className="btn btn-react">
                {t('home.react')}
            </Link>
        </div></section>

        <DialogTemplate
            isOpen={isOpen}
            onClose={handleTemplate}
            templateType="web"
        />
        </>
    );
}

export default Home;