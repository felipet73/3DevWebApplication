import { useMenuStore, useOptionModelStore } from "../../stores";
import GantControl from "../Erp/Gant/GantControl";
import TableBadget2  from "../Erp/Tables/TableBadget2";
import TableBudget1 from "../Erp/Tables/TableBudget1";
import { ViewerSc } from "./ViewerSc";
import './viewer.css';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import BarChart1 from "../Erp/Graphics/BarChart1";
import BarChart2 from "../Erp/Graphics/BarChart2";
import Kanban1 from "../Erp/Kanbans/Kanban1";
import BarChart3 from '../Erp/Graphics/BarChart3';
import BarChart4 from "../Erp/Graphics/BarChart4";
import BarChart5 from "../Erp/Graphics/BarChar5";
import Schedulle from "../Erp/Schedulle/Schedulle";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


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
    }else if (optionModel === 'Schedulle'){
        const elem = document.querySelector(".ajusta");
        elem?.classList.remove("ajusta");
        elem?.classList.add("ajusta2");
        console.log('elem', elem);
        if (elem){
            //const hijo = elem?.firstChild as HTMLDivElement;
            //hijo!.setAttribute('style', 'height: 100%');    
        }
    }else{
        const elem = document.querySelector(".ajusta2");
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
        {optionModel === 'Graphics1' && <><BarChart1 /></>}
        {optionModel === 'Graphics2' && <><BarChart2 /></>}
        {optionModel === 'Graphics3' && <><BarChart3 /></>}
        {optionModel === 'Graphics4' && <><BarChart4 /></>}
        {optionModel === 'Graphics5' && <><BarChart5 /></>}
        {optionModel === 'Kanban1' && <><Kanban1 /></>}
        {optionModel === 'Schedulle' && <><Schedulle /></>}
        
        </>
    )
}


const ViewerHome = () => {
    
    const { viewerC } = useContext( GlobalContext );
    return (
        <div className='control-pane'>
            <div className='col-lg-12 control-section default-ribbon-section'>
                <div className='control ribbon-sample'>
                    <div id="default-ribbonContainer" className='default-ribbon-container' style={{ height: '73vh', padding:'8px' }}>

                    <SplitterComponent separatorSize={4} orientation={'Vertical'} resizeStop={(e) => {
                            setTimeout(() => {if (viewerC.current) viewerC.current.resize();}, 300);
                            }} beforeCollapse={(e) => {
                                setTimeout(() => {if (viewerC.current) viewerC.current.resize();}, 300);
                
                            }} beforeExpand={(e) => {
                                setTimeout(() => {if (viewerC.current) viewerC.current.resize();}, 300);
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