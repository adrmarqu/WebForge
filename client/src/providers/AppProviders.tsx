import { Toaster } from "sonner";

const AppProviders = ({children}: {children: React.ReactNode}) =>
{
    return (
    <>
        {children}
        <Toaster position="bottom-right" richColors />
    </>
    );
};

export default AppProviders;