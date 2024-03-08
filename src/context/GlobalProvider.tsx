import { RefObject, useRef } from 'react';
import { GlobalContext } from './GlobalContext';


/*export interface GlobalState {
    viewerC:RefObject<Autodesk.Viewing.GuiViewer3D | null>
}*/

const INITIAL_STATE = {
    viewerC:{ current:null }
}


interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GlobalProvider = ({children}:Props) => {

    const viewerC = INITIAL_STATE;

    return(
        <GlobalContext.Provider value={{
            viewerC
        }}>
            {children}
        </GlobalContext.Provider>
    );
}