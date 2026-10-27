import JSZip from 'jszip'

const MAX_SIZE_MB = 1;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface ProcessResult
{
    success: boolean;
    message?: string;
}

export const processJsonFile = async (file: File): Promise<ProcessResult> =>
{
    try
    {

    }
    catch (error)
    {

    }
    return { success: false, message: "Conseguido" };
};

export const processZipFile = async (file: File) =>
{
    try
    {

    }
    catch (error)
    {

    }
    return { success: false, message: "Conseguido" };
};

export const validateAndRouteFiles = async (fileList: FileList) =>
{

};