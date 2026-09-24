import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dialog from '../../components/Dialog/Dialog.tsx';
import { useState } from "react";

function Home()
{
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Open dialog of templates and select one
    const openTemplates = () =>
    {
        handleTemplate();
    };

    // Handle the template selected
    const handleTemplate = () =>
    {
        navigate("/dashboard");
    };

    // Open the input file
    const loadFile = () =>
    {
    };

    // Handle the file of the input
    const handleFile = () =>
    {
        navigate("/dashboard");
    };

    // Open the react dialog
    const openOptions = () =>
    {
        downloadMakefile();
    };

    // Download the Makefile
    const downloadMakefile = () =>
    {

    };

    return (
        <>
        <section className="flex h-center col">
            <h1 className="text-center">Bienvenido a WebForge</h1>
            <button onClick={openTemplates}>Nuevo proyecto</button>
            <button onClick={loadFile}>Cargar proyecto</button>

            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFile} 
                style={{ display: "none" }} 
                accept=".json"
            />

            <Link to="/information/html" className="text-center">Html</Link>
            <Link to="/information/css" className="text-center">Css</Link>
            <button onClick={openOptions}>Descargar React</button>
        </section>
        <Dialog
            isOpen={false}
            onClose={() => null}
            title=""
            btnText=""
        >
        </Dialog>
        <Dialog
            isOpen={false}
            onClose={() => null}
            title=""
            btnText=""
        >
        </Dialog>
        </>
    );
}

export default Home;