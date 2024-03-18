import { RefObject, useRef } from 'react';
import { GlobalContext } from './GlobalContext';


/*export interface GlobalState {
    viewerC:RefObject<Autodesk.Viewing.GuiViewer3D | null>
}*/

const INITIAL_STATE = {
    viewerC:{ current:null }
}
const INITIAL_STATE1 = {
    actualViewables:{ current:[] }
}


interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GlobalProvider = ({children}:Props) => {

    const viewerC = INITIAL_STATE;
    const actualViewables = INITIAL_STATE1;

    return(
        <GlobalContext.Provider value={{
            viewerC, actualViewables
        }}>
            {children}
        </GlobalContext.Provider>
    );
}