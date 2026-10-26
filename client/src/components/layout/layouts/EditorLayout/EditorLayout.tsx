import { Outlet } from "react-router-dom";
import HeaderEditor from "../../headers/Editor/Header";

const EditorLayout = () =>
{
    return (
    <>
        <HeaderEditor />
        <main>
            <Outlet />
        </main>
    </>
    );
};

export default EditorLayout;
