
import { create } from 'zustand'
import { UserInterface } from '../../interfaces/userInterface'

interface GlobalState {
    loggedUser:UserInterface;
    setLoggedUser: (user:UserInterface) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
    loggedUser:{
        name: '',
        email: '',
        emailValidated: false,
        id: '',
        role: []
    },
    setLoggedUser:(user:UserInterface) => set({ loggedUser:user })
    /*bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),*/
}))