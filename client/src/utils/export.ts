import JSZip from "jszip";

// Create a json and download
export const downloadJson = (data: any, fileName: string) =>
{

};

// Create a zip and download
export const downloadZip = (filesMap: Record<string, any>, zipName: string, images?: Array<{name: string, blob: Blob}>) =>
{

};

// Export Colors
export const exportColors = (colorsData: any) =>
{
    downloadJson(colorsData, "colors");
};

// Export Forms
export const exportForms = (colorsData: any) =>
{
    downloadJson(colorsData, "colors");

};

// Export Components
export const exportComponents = (colorsData: any) =>
{
    downloadJson(colorsData, "colors");

};

// Export Layouts
export const exportLayouts = (colorsData: any) =>
{
    downloadJson(colorsData, "colors");

};

// Export Project
export const exportProject = () =>
{

};