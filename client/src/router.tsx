import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import RootLayout from "./components/layout/layouts/RootLayout/RootLayout";
import PublicLayout from "./components/layout/layouts/PublicLayout/PublicLayout";
import DashboardLayout from "./components/layout/layouts/DashboardLayout/DashboardLayout";
import EditorLayout from "./components/layout/layouts/EditorLayout/EditorLayout";

// Views

/* Home, Login, Download */
import HomeView from "./views/Home/Home";
import LoginView from "./views/Auth/Login";
import DownloadView from "./views/Download/Download";

/* Dashboard Home */
import WelcomeView from "./views/Dashboard/home/Welcome/Welcome";
import StatsView from "./views/Dashboard/home/Stats/Stats";
import UpdatesView from "./views/Dashboard/home/Updates/Updates";

/* Dashboard Config */
import WebsiteView from "./views/Dashboard/config/Website/Website";
import ConfigView from "./views/Dashboard/config/Config/Config";
import LanguagesView from "./views/Dashboard/config/Languages/Languages";

/* Dashboard Color & Typography */
import ColorsView from "./views/Dashboard/main/Colors/Colors";
import ColorEditView from "./views/Dashboard/main/Colors/ColorEdit";
import TypographyView from "./views/Dashboard/main/Typography/Typography";

/* Dashboard Main */
import PagesView from "./views/Dashboard/main/Pages/Pages";
import LayoutsView from "./views/Dashboard/main/Layouts/Layouts";
import ComponentsView from "./views/Dashboard/main/Components/Components";
import FormsView from "./views/Dashboard/main/Forms/Forms";

/* Dashboard Media */
import MediaView from "./views/Dashboard/media/Media/Media";
import MediaUploadView from "./views/Dashboard/media/Media/Upload";
import IconsView from "./views/Dashboard/media/Icons/Icons";
import IconUploadView from "./views/Dashboard/media/Icons/Upload";

/* Dashboard Admin */
import AdminTemplatesView from "./views/Dashboard/admin/Templates/Templates";
import AdminColorsView from "./views/Dashboard/admin/Colors/Colors";
import AdminComponentsView from "./views/Dashboard/admin/Components/Components";
import AdminFormsView from "./views/Dashboard/admin/Forms/Forms";
import AdminLayoutsView from "./views/Dashboard/admin/Layouts/Layouts";
import AdminMediaView from "./views/Dashboard/admin/Media/Media";
import AdminIconsView from "./views/Dashboard/admin/Icons/Icons";

/* Dashboard Project */
import SaveView from "./views/Dashboard/project/Save/Save";
import ExportView from "./views/Dashboard/project/Export/Export";
import ImportView from "./views/Dashboard/project/Import/Import";
import DeleteView from "./views/Dashboard/project/Delete/Delete";
import ProjectView from "./views/Dashboard/project/Project/Project";

/* Main */
import EditorView from "./views/Editor/Editor";
import PreviewView from "./views/Preview/Preview";

/* Error */
import ErrorView from "./views/Error/Error";

export const router = createBrowserRouter(
[
    {
        element: <RootLayout />,
        children:
        [
            /* Public routes (Home, Login) */
            {
                element: <PublicLayout />,
                children:
                [
                    { path: '/', element: <HomeView /> },
                    { path: '/home', element: <Navigate to="/" replace /> },
                    { path: '/admin/login', element: <LoginView /> },
                ]
            },

            /* Download */
            {
                element: <PublicLayout redir="/dashboard/welcome" />,
                children:
                [
                    { path: '/download', element: <DownloadView /> }
                ]
            },

            /* Dashboard */
            {
                path: '/dashboard',
                element: <DashboardLayout />,
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
                    { path: 'colors/edit', element: <ColorEditView /> },
                    { path: 'colors/new', element: <ColorEditView /> },
                    { path: 'typography', element: <TypographyView /> },

                    /* Main */
                    { path: 'pages', element: <PagesView /> },
                    { path: 'layouts', element: <LayoutsView /> },
                    { path: 'components', element: <ComponentsView /> },
                    { path: 'forms', element: <FormsView /> },

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

                            { path: 'templates', element: <AdminTemplatesView /> },
                            { path: 'layouts', element: <AdminLayoutsView /> },
                            { path: 'colors', element: <AdminColorsView /> },
                            { path: 'media', element: <AdminMediaView /> },
                            { path: 'icons', element: <AdminIconsView /> },
                            { path: 'components', element: <AdminComponentsView /> },
                            { path: 'forms', element: <AdminFormsView /> },

                            /* Redirection */
                            { path: '*', element: <Navigate to="/dashboard/admin/templates" replace /> },
                        ]
                    },

                    /* Projects */
                    { path: 'save', element: <SaveView /> },
                    { path: 'export', element: <ExportView /> },
                    { path: 'import', element: <ImportView /> },
                    { path: 'project', element: <ProjectView /> },
                    { path: 'delete', element: <DeleteView /> },

                    /* Redirection */
                    { path: '*', element: <Navigate to="/dashboard/welcome" replace /> },
                ]
            },

            /* Editor */
            {
                element: <EditorLayout />,
                children:
                [
                    { path: '/editor', element: <EditorView /> }
                ]
            },

            /* Preview */
            {
                path: '/preview',
                element: <PreviewView />
            },

            /* Error */
            {
                path: '*',
                element: <ErrorView />
            }
        ]
    }
]);
