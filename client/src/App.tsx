import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Data from './pages/Data/Data.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Login from './pages/Login/Login.tsx';
import Download from './pages/Download/Download.tsx';
import Builder from './pages/Builder/Builder.tsx';
import Creator from './pages/Creator/Creator.tsx';
import './App.css'

function App()
{

    return(
        <BrowserRouter><main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/login-admin" element={<Login />}></Route>
                <Route path="/information/:type" element={<Data />}></Route>
                <Route path="/builder" element={<Builder />}></Route>
                <Route path="/creator" element={<Creator />}></Route>
                <Route path="/download/:type" element={<Download />}></Route>
            </Routes>
        </main></BrowserRouter>
    );
}

export default App