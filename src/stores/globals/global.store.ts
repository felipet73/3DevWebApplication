
import { create } from 'zustand'
import { UserInterface } from '../../interfaces/userInterface'
import { RefObject } from 'react';

interface tokenInterface {
    access_token: string;
    expires_in: number;
    token_type: string
}

interface GlobalState {
    loggedUser:UserInterface;
    setLoggedUser: (user:UserInterface) => void;
    option: string;
    setOption: (opt:string) => void;
    viewer:RefObject<Autodesk.Viewing.GuiViewer3D | null>,
    setViewer: (viewer: RefObject<Autodesk.Viewing.GuiViewer3D>) => void,
    urn:string,
    setUrn: (urn:string) => void,
    token:tokenInterface,
    setToken: (token:tokenInterface) => void,

}

export const useGlobalStore = create<GlobalState>()((set) => ({
    loggedUser:{
        name: '',
        email: '',
        emailValidated: false,
        id: '',
        role: []
    },
    setLoggedUser:(user:UserInterface) => set({ loggedUser:user }),
    option:'',
    setOption:(opt:string) => set({ option:opt }),
    viewer:{ current:null },
    setViewer: (viewer: RefObject<Autodesk.Viewing.GuiViewer3D>) => set({ viewer }),
    urn:'',
    setUrn: (urn:string) => set({ urn:urn }),
    token:{access_token: '', expires_in: 0, token_type: ''},
    setToken: (token:tokenInterface) => set({ token:token }),

    /*bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),*/
}))