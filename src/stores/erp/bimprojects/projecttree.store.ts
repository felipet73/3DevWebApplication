
import { create } from 'zustand'


export interface ElementInterface{
    id:string;
    name:string;
    children: Object[];
    expanded?: boolean;
    type:string;
}

interface BimProjectsTreeState {
    projectTree:ElementInterface[] | [];
    setProjectTree: (projectTree:ElementInterface[]) => void;
    charged:boolean;
    setCharged: (charged:boolean) => void;
}

export const useProjectsTreeStore = create<BimProjectsTreeState>()((set) => ({
    projectTree:[],
    setProjectTree: (projectTree:ElementInterface[]) => set({ projectTree:projectTree }),
    charged:false,
    setCharged: (charged:boolean) => set({ charged:charged }),

}))