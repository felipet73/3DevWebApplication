

import { create } from 'zustand'

interface optionErp {
    optionErp:string;
    setOptionErp: (option:string) => void;
}

export const useOptionErpStore = create<optionErp>()((set) => ({
    optionErp:'none',
    setOptionErp: (option:string) => set({ optionErp:option })
}))

