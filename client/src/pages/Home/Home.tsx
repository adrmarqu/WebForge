import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogTemplate from '../../components/Dialog/DialogTemplate.tsx';
import type { Template } from "../../types/dialog.ts";
import { useStore } from "../../store/useStore.ts";

function Home()
{
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const loadTemplate = useStore((state: any) => state.loadTemplate);
    const [error, setError] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Open dialog
    const openDialog = (): void => setIsOpen(true);

    // Handle the template selected
    const handleTemplate = (tpl: Template | null): void =>
    {
        setError("");
        setIsOpen(false);
        if (tpl === null || tpl.data === null) return ;
        if (tpl.name !== "blank") loadTemplate(tpl.data);
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
        <section className="flex h-center col">
            <h1 className="text-center">Bienvenido a WebForge</h1>
            <div><span>{error}</span></div>
            <button onClick={openDialog}>Nuevo proyecto</button>
            <button onClick={loadFile}>Cargar proyecto</button>

            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={checkFile} 
                style={{ display: "none" }} 
                accept=".json"
            />

            <Link to="/information/html" className="text-center">Html</Link>
            <Link to="/information/css" className="text-center">Css</Link>
            <Link to="/download/react" className="text-center">Descargar React</Link>
        </section>
        <DialogTemplate
            title="Template"
            description="Descripcion de templates"
            open={isOpen}
            onClose={handleTemplate}
            templateType="web"
        />
        </>
    );
}

export default Home;