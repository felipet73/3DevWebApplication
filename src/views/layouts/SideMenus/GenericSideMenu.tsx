import { useEffect, useState } from 'react';
import { HeaderPosition, OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import TreeViewOptions from '../Applications/trees/TreeViewOptions';

export interface OptionsMenuInterface {
    headertext:string;
    content:string | (() => JSX.Element);
}

export interface PropsMenuInterface {
    options:OptionsMenuInterface[];
}

const GenericSideMenu = ({options=[]}:PropsMenuInterface) => {

    const [overflow, setOverflow] = useState<OverflowMode>("Scrollable");
    const [headerPlacement, setHeaderPlacement] = useState<HeaderPosition>("Top");

    //const [headertext, setHeaderText] = useState<any>([{ text: "Autodesk CC" }, { text: "IFC Repo" }, { text: "SWF Repo" }]);
    
    //let headertext: any;
    /*headertext = [{ text: "Project" }, { text: "Views" }, { text: "" }, { text: "" }, { text: "" }, { text: "" }, { text: "" },
    { text: "" }];*/

    /*useEffect(() => {
        if (type===1){
            setHeaderText([{ text: "Autodesk CC" }, { text: "IFC Repo" }, { text: "SWF Repo" }])
        }

    }, [])*/
    
    console.log('OPTIONNNS',options)

    return (
        <div className='control-pane'>
            <div className='control-section tab-control-section row'>
                <div className='col-lg-12 control-section'>
                    <div className='e-sample-resize-container'>
                        {/* Render the Tab Component */}
                        <TabComponent cssClass='responsive-mode' heightAdjustMode='None' height='500px' width='auto' overflowMode={overflow} headerPlacement={headerPlacement} > 
                            <TabItemsDirective >
                                {options.map((item:OptionsMenuInterface)=>(<TabItemDirective key={item.headertext} header={{text:item.headertext}} content={item.content} />))}
                            </TabItemsDirective>
                        </TabComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GenericSideMenu;