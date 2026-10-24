import './App.scss'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import RouteTracker from './components/layout/Tracker/RouteTracker'

const App = () =>
{
    return (
    <BrowserRouter>
    <RouteTracker />
    <Routes>
        {/* Home */}
        <Route path="/" element={<Home/>}/>
        <Route path="/home">
            <Route index element={<Home/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Route>
        
        {/* Login */}
        <Route path="/admin/login" element={<Login/>}/>
            
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
            {/* Home */}
            <Route index element={<Welcome />}/>
            <Route path="welcome" element={<Welcome />}/>
            <Route path="stats" element={<Stats />}/>
            <Route path="updates" element={<Updates />}/>

            {/* General */}
            <Route path="website" element={<Website />}/>
            <Route path="config" element={<Config />}/>
            <Route path="languages" element={<Languages />}/>

            {/* Main */}
            <Route path="colors" element={<Colors />}/>
            <Route path="typography" element={<Typos />}/>
            <Route path="pages" element={<Pages />}/>
            <Route path="layouts" element={<Layouts />}/>
            
            {/* Media */}
            <Route path="media" element={<Media />}/>
            <Route path="media/uploads" element={<MediaUploads />}/>
            <Route path="icons" element={<Icons />}/>
            <Route path="icons/uploads" element={<IconsUploads />}/>
            
            {/* Parts */}
            <Route path="forms" element={<Forms />}/>
            <Route path="components" element={<Components />}/>

            {/* Admin */}
            <Route path="admin">
                <Route index element={<Navigate to="/dashboard/admin/templates" replace/>} />

                <Route path="templates" element={<WebTemplates />} />
                <Route path="colors" element={<WebColors />} />
                <Route path="layouts" element={<WebLayouts />} />
                <Route path="media" element={<WebMedia />} />
                <Route path="icons" element={<WebIcons />} />
                <Route path="forms" element={<WebForms />} />
                <Route path="components" element={<WebComponents />} />
            
                <Route path="*" element={<Navigate to="/dashboard/admin/templates" replace/>}/>
            </Route>
            
            {/* Project */}
            <Route path="download" element={<Down />}/>
            <Route path="save" element={<Save />}/>
            <Route path="export" element={<Export />}/>
            <Route path="import" element={<Import />}/>
            <Route path="remove" element={<Remove />}/>

            <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
        </Route>
        
        {/* Editor */}
        <Route path="/editor">
            <Route index element={<Editor />}/>
            <Route path="*" element={<Navigate to="/editor" replace/>}/>
        </Route>
        
        {/* Preview */}
        <Route path="/preview">
            <Route index element={<Preview />}/>
            <Route path="*" element={<Navigate to="/preview" replace/>}/>
        </Route>
        
        {/* Download */}
        <Route path="/download">
            <Route index element={<Download />}/>
            <Route path="*" element={<Navigate to="/download" replace/>}/>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/error/404" replace/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App
