
import { create } from 'zustand'


export interface ModelInterface{
    id:string;
    name:string;
    dateCreated:Date;
    file:string;
    descripcion:string;
    image:string;
    urn:string;
    main?:boolean;
    open?:boolean;
    defaultView?:string;
}

export interface ProjectInterface {
    id:string;
    name:string;
    dateCreated:Date;
    descripcion:string;
    image:string;
    models:ModelInterface[] | [];
}

interface BimProjectsState {
    projects:ProjectInterface[] | [];
    setProjects: (projects:ProjectInterface[]) => void;
    actualProject:ProjectInterface | null;
    setActualProject: (projects:ProjectInterface) => void;
    viewables:any[];
    setViewables: (viewables:any[]) => void;
    actualProperties:any;
    setActualProperties: (actualProperties:any) => void;
}

export const useBimProjectsStore = create<BimProjectsState>()((set) => ({
    projects:[],
    setProjects: (projects:ProjectInterface[]) => set({ projects:projects }),
    actualProject:null,
    setActualProject: (project:ProjectInterface) => set({ actualProject:project }),
    viewables:[],
    setViewables: (viewables:any[])  => set({ viewables:viewables }),
    actualProperties:[],
    setActualProperties: (actualProperties:any[])  => set({ actualProperties:actualProperties }),

}))

