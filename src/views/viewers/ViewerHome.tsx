import { useMenuStore, useOptionModelStore } from "../../stores";
import GantControl from "../Erp/Gant/GantControl";
import TableBadget2  from "../Erp/Tables/TableBadget2";
import TableBudget1 from "../Erp/Tables/TableBudget1";
import { RefrescarV, ViewerSc } from "./ViewerSc";
import './viewer.css';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';


const DetailModel = ()=>{
    const optionModel = useOptionModelStore(state => state.optionModel);
    if (optionModel === 'TableBudget'){
        const elem = document.querySelector(".ajusta");
        elem?.classList.remove("ajusta");
        console.log('elem', elem);
        if (elem){
            const hijo = elem?.firstChild as HTMLDivElement;
            hijo!.setAttribute('style', 'height: 100%');    
        }
    }
    
    //alert('recder ' + optionModel);
    return(
        <>
        {optionModel === 'Gantt' && <GantControl/>}
        {optionModel === 'TableBudget' && <TableBudget1/>}
        {optionModel === 'TableBudget1' && <TableBadget2/>}
        </>
    )
}


const ViewerHome = () => {
    

    return (
        <div className='control-pane'>
            <div className='col-lg-12 control-section default-ribbon-section'>
                <div className='control ribbon-sample'>
                    <div id="default-ribbonContainer" className='default-ribbon-container' style={{ height: '73vh', padding:'8px' }}>

                    <SplitterComponent separatorSize={4} orientation={'Vertical'} resizeStop={(e) => {
                            setTimeout(() => {RefrescarV();}, 300);
                            }} beforeCollapse={(e) => {
                                setTimeout(() => {RefrescarV();}, 300);
                
                            }} beforeExpand={(e) => {
                                setTimeout(() => {RefrescarV();}, 300);
                            }}>
                                <PanesDirective >
                                    <PaneDirective size="60%" min="60px" content={ViewerSc} collapsible={true} />
                                    <PaneDirective size="40%" min="60px" content={DetailModel} collapsible={true} cssClass={"ajusta"} />
                                </PanesDirective>
                            </SplitterComponent>   
                            </div>
                </div>
                
            </div>
        </div>                              
    // <ViewerSc/>
    );
}
export default ViewerHome;