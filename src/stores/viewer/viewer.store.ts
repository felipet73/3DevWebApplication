
import { create } from 'zustand'


interface ItemInterface{
    Name: string;
    dbId: string;
}

export interface selectedItemsInterface{
    DataModel:ItemInterface[] | [];
    DataList:ItemInterface[] | [];
}

interface ViewerState {
    selectedItems:selectedItemsInterface;
    setSelectedItems: (selectedItems:selectedItemsInterface) => void;
}
/*const obj={
    DataA:[{Name:'Nombre2', dbId:'0101'},{Name:'Nombre3', dbId:'0105'}],
    DataB:[{},{}]
}*/

export const useViewerStore = create<ViewerState>()((set) => ({
    selectedItems:{
        DataModel:[],
        DataList:[]
    },
    setSelectedItems: (selectedItems:selectedItemsInterface) => set({ selectedItems:selectedItems })
}))