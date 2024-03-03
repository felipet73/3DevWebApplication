
import { create } from 'zustand'
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';

interface MenuState {
    fileOptions:MenuItemModel[];
    setFileOptions: (fileOptions:MenuItemModel[]) => void;
}

export const useMenuStore = create<MenuState>()((set) => ({
    fileOptions:[{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    {
        text: "Save as", iconCss: "e-icons e-save", id: "save",
        items: [
            { text: "Microsoft Word (.docx)", iconCss: "sf-icon-word", id: "newword" },
            { text: "Microsoft Word 97-2003(.doc)", iconCss: "sf-icon-word", id: "oldword" },
            { text: "Download as PDF", iconCss: "e-icons e-export-pdf", id: "pdf" }]
    }],
    setFileOptions: (fileOptions:MenuItemModel[]) => set({ fileOptions:fileOptions })
}))