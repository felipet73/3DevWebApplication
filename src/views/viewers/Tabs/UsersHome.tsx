import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import GantControl from '../../Erp/Gant/GantControl';
import MainUser from './UserOptions/MainUser';
import TreeUser from './UserOptions/TreeUser';




const DetailUsers = ()=>{
    //const optionModel = useOptionModelStore(state => state.optionModel);
    /*if (optionModel === 'TableBudget'){
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
    }*/
    
    //alert('recder ' + optionModel);
    return(
        <>
        {/*optionModel === 'Gantt' && <GantControl/>*/}
        Users
        </>
    )
}


const UsersHome = () => {
    
    
    return (
        <div className='control-pane'>
            <div className='col-lg-12 control-section default-ribbon-section'>
                <div className='control ribbon-sample'>
                    <div id="default-ribbonContainer" className='default-ribbon-container' style={{ height: '73vh', padding:'8px' }}>

                    <SplitterComponent separatorSize={4} orientation={'Vertical'} resizeStop={(e) => {}}>
                                <PanesDirective >
                                    <PaneDirective size="60%" min="60px" content={MainUser} collapsible={true} cssClass={"ajustaSup"}/>
                                    <PaneDirective size="40%" min="60px" content={TreeUser} collapsible={true} cssClass={"ajusta"} />
                                </PanesDirective>
                            </SplitterComponent>   
                            </div>
                </div>
                
            </div>
        </div>                              
    // <ViewerSc/>
    );
}
export default UsersHome;