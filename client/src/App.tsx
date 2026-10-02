import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from './store/useStore';
import { ROUTES } from './utils/routes';

import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard';
import Editor from './views/Editor/Editor';
import Preview from './views/Preview/Preview';
import Config from './views/Config/Config';
import Download from './views/Download/Download';
import Html from './views/Docs/Html';
import Css from './views/Docs/Css';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';

import { RequireTemplate } from './components/guards/RequireTemplate';

import './App.scss'

function App()
{
    // Save the last route
    function RouteTracker()
    {
        const location = useLocation();
        const setPath = useStore((state: any) => state.setPath);

        useEffect(() => {
            if (location.pathname !== ROUTES.ROOT && location.pathname !== ROUTES.HOME) setPath(location.pathname);
        }, [location, setPath]);

        return null;
    }
    
    return(
    <BrowserRouter>
    <RouteTracker />
    <Routes>
    {/* Public routes */}
        {/* Home */}
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>

        {/* Guides */}
        <Route path="/docs">
            <Route path="html" element={<Html/>}/>
            <Route path="css" element={<Css/>}/>
        </Route>

        {/* Admin login */}
        <Route path="/admin/login" element={<Login />}/>

        {/* Download Makefile */}
        <Route path="/config/makefile" element={<Config make={true} />}/>
        
    {/* Private routes */}
        <Route element={<RequireTemplate/>}>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
                {/* <Route index element={}/> */}
                {/* <Route path="" element={}/> */}
            </Route>

            {/* Editor */}
            <Route path="/editor" element={<Editor />}/>

            {/* Preview */}
            <Route path="/preview" element={<Preview />}/>

            {/* Download project */}
            <Route path="/config" element={<Config />}/>
        </Route>
        
    {/* 404 */}
        <Route path="*" element={<NotFound />}/>            

    </Routes>
    </BrowserRouter>
    );
}

export default App