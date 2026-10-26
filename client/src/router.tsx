import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout/AppLayout";

// Headers

import Header from "./components/layout/headers/Base/Header";
import HeaderDash from "./components/layout/headers/Dashboard/Header";
import HeaderEditor from "./components/layout/headers/Editor/Header";

const headerHome = <Header />
const headerDownload = <Header redir="/dashboard/welocome" />

// Views

/* Home, Login, Download */
import HomeView from "./views/Home/Home";
import LoginView from "./views/Auth/Login";
import DownloadView from "./views/Download/Download";

/* Dashboard Nav */
import DashboardNav from "./views/Dashboard/DashboardNav";

/* Dashboard Home */
import WelcomeView from "./views/Dashboard/home/Welcome/Welcome";
import StatsView from "./views/Dashboard/home/Stats/Stats";
import UpdatesView from "./views/Dashboard/home/Updates/Updates";

/* Dashboard Config */
import WebsiteView from "./views/Dashboard/config/Website/Website";
import ConfigView from "./views/Dashboard/config/Config/Config";
import LanguagesView from "./views/Dashboard/config/Langs/Languages";

/* Dashboard Color & Typography */
import ColorsView from "./views/Dashboard/main/Colors/Colors";
import ColorEdit from "./views/Dashboard/main/Colors/ColorEdit";
import TyposView from "./views/Dashboard/main/Typo/Typos";

/* Dashboard Main */
import PagesView from "./views/Dashboard/main/Pages/Pages";
import LayoutsView from "./views/Dashboard/main/Layouts/Layouts";
import ComponentsView from "./views/Dashboard/main/Components/Componets";
import FormsView from "./views/Dashboard/main/Forms/Forms";

/* Dashboard Media */
import MediaView from "./views/Dashboard/media/Images/Images";
import MediaUploadView from "./views/Dashboard/media/Images/Upload";
import IconsView from "./views/Dashboard/media/Icons/Icons";
import IconUploadView from "./views/Dashboard/media/Icons/Upload";

/* Dashboard Admin */
import TplView from "./views/Dashboard/admin/Templates/Templates";
import ColView from "./views/Dashboard/admin/Colors/Colors";
import ComView from "./views/Dashboard/admin/Components/Components";
import ForView from "./views/Dashboard/admin/Forms/Forms";
import LayView from "./views/Dashboard/admin/Layouts/Layouts";
import MedView from "./views/Dashboard/admin/Media/Images";
import IcoView from "./views/Dashboard/admin/Icons/Icons";

/* Dashboard Project */
import SaveView from "./views/Dashboard/project/Save/Save";
import ExportView from "./views/Dashboard/project/Export/Export";
import ImportView from "./views/Dashboard/project/Import/Import";
import DeleteView from "./views/Dashboard/project/Delete/Delete";
import ProjectView from "./views/Dashboard/project/Download/Download";

/* Main */
import Editor from "./views/Editor/Editor";
import Preview from "./views/Preview/Preview";

/* Error */
import ErrorView from "./views/Error/Error";

export const router = createBrowserRouter(
[
    /* Home, login */
    {
        element: <AppLayout header={headerHome} showFooter={true} />,
        children:
        [
            /* Home */
            { path: '/', element: <HomeView /> },
            { path: '/home', element: <Navigate to="/" replace/> },
            /* Login */
            { path: '/admin/login', element: <LoginView /> },
        ]
    },
    /* Download */
    {
        element: <AppLayout header={headerDownload} showFooter={true} />,
        children:
        [
            /* Download */
            { path: '/download', element: <DownloadView /> },
            { path: '/download/*', element: <Navigate to="/download" replace/> }
        ]
    },
    /* Dashboard */
    {
        element: <AppLayout header={<HeaderDash />}/>,
        children:
        [{
            path: '/dashboard',
            element: <DashboardNav />,
            children:
            [
                /* Redirection */
                { index: true, element: <Navigate to="/dashboard/welcome" replace /> },

                /* Home */
                { path: 'welcome', element: <WelcomeView /> },
                { path: 'stats', element: <StatsView /> },
                { path: 'updates', element: <UpdatesView /> },

                /* General */
                { path: 'website', element: <WebsiteView /> },
                { path: 'config', element: <ConfigView /> },
                { path: 'languages', element: <LanguagesView /> },

                /* Colors and typos */
                { path: 'colors', element: <ColorsView /> },
                { path: 'colors/edit', element: <ColorEdit /> },
                { path: 'colors/new', element: <ColorEdit /> },
                { path: 'typography', element: <TyposView /> },

                /* Main */
                { path: 'pages', element: <PagesView /> },
                { path: 'layouts', element: <LayoutsView /> },
                { path: 'components', element: <ComponentsView /> },
                { path: 'forms', element: <FormsView/> },

                /* Media */
                { path: 'media', element: <MediaView /> },
                { path: 'media/upload', element: <MediaUploadView /> },
                { path: 'icons', element: <IconsView /> },
                { path: 'icons/upload', element: <IconUploadView /> },

                /* Admin */
                {
                    path: 'admin',
                    children:
                    [
                        /* Redirection */
                        { index: true, element: <Navigate to="/dashboard/admin/templates" replace /> },

                        { path: 'templates', element: <TplView /> },
                        { path: 'layouts', element: <LayView /> },
                        { path: 'colors', element: <ColView /> },
                        { path: 'media', element: <MedView /> },
                        { path: 'icons', element: <IcoView /> },
                        { path: 'components', element: <ComView /> },
                        { path: 'forms', element: <ForView /> },
                        
                        /* Redirection */
                        { path: '*', element: <Navigate to="/dashboard/admin/templates" replace /> },
                    ]
                },

                /* Projects */
                { path: 'save', element: <SaveView /> },
                { path: 'export', element: <ExportView /> },
                { path: 'import', element: <ImportView /> },
                { path: 'project', element: <ProjectView /> },
                { path: 'delete', element: <DeleteView/> },

                /* Redirection */
                { path: '*', element: <Navigate to="/dashboard/welcome" replace /> },
            ]
        }]
    },
    /* Editor */
    {
        element: <AppLayout header={<HeaderEditor />} showFooter={true} />,
        children:
        [
            /* Editor */
            { path: '/editor', element: <Editor /> },
            { path: '/editor/*', element: <Navigate to="/editor" replace/> }
        ],
    },
    /* Preview */
    {
        element: <AppLayout />,
        children:
        [
            /* Preview */
            { path: 'preview', element: <Preview/> },
            { path: 'preview/*', element: <Navigate to="/preview" replace/> },
        ],
    },
    /* Error */
    {
        path: '*',
        element: <ErrorView />
    }
]);