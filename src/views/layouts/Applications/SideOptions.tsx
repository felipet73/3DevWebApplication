import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import './sideoptions.css'
import TreeViewOptions from './trees/TreeViewOptions';
import ListItems1 from './Lists/ListItems1';
import TreeViewProject from './trees/TreeViewProject';
import { useBimProjectsStore, useGlobalStore } from '../../../stores';
import NewProject from '../../Erp/Modals/bimprojects/NewProject';


const SideOptions = () => {

    const actualProject = useBimProjectsStore( store=>store.actualProject )
    
    

    const acrdnHeader1 = () => <div>Autodesk CC Conection</div>
    const acrdnHeader2 = () => <div>Project Models</div>
    const acrdnHeader3 = () => <div>Project Tree</div>
    const acrdnHeader4 = () => <div>Project Properties</div>
    const acrdnHeader5 = () => <div>Isues-Comments</div>
    const acrdnHeader6 = () => <div>Products and Specifications</div>
    const acrdnHeader7 = () => <div>Comunity</div>
    const acrdnHeader8 = () => <div>Users</div>
    const acrdnHeader9 = () => <div>Documents</div>

    const sorceModels = () => {
      return(              
        <div id="sorcemodels" >
        <TreeViewOptions/>
          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }
    const projectModels = () => {
      return(              
        <div id="projectmodels" >
        
        {actualProject ? <TreeViewProject/> : <div>No project Selected</div>}

          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }
    const projectTree = () => {
      return(              
        <div id="athletics" >
        <TreeViewOptions/>
          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }
    const projectProperties = () => {
      return(              
        <div id="athletics" >
        <TreeViewOptions/>
          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }
    const projectIssues = () => {
      return(              
        <div id="athletics" >
        <TreeViewOptions/>
          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }

    const projectProducts = () => {
      return(
        <div id="water_games">
          <ListItems1/>
          {/* <li><span className='e-acrdn-icons e-content-icon dive'></span>Diving</li>
          <li><span className='e-acrdn-icons e-content-icon swimming'></span>Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon marathan_swim'></span>Marathon Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon sync_swim'></span>Synchronized Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon waterpolo'></span>Water Polo</li> */}
        </div>             
      );
    }
    const projectComunity = () => {
      return(       
        <div id="racing_games">
          <li><span className='e-acrdn-icons e-content-icon cycle_BMX'></span>Cycling BMX</li>
          <li><span className='e-acrdn-icons e-content-icon cycle_Mountain'></span>Cycling Mountain Bike</li>
          <li><span className='e-acrdn-icons e-content-icon cycle'></span>Cycle Racing</li>
          <li><span className='e-acrdn-icons e-content-icon sailing'></span>Sailing</li>
          <li><span className='e-acrdn-icons e-content-icon rowing'></span>Rowing</li>
        </div>
      );
    }

    const projectUsers = () => {
      return(
        <div id="indoor_games">
          <li><span className='e-acrdn-icons e-content-icon tennis'></span>Table Tennis</li>
          <li><span className='e-acrdn-icons e-content-icon badminton'></span>Badminton</li>
          <li><span className='e-acrdn-icons e-content-icon volleyball'></span>Volleyball</li>
          <li><span className='e-acrdn-icons e-content-icon boxing'></span>Boxing</li>
          <li><span className='e-acrdn-icons e-content-icon swimming_In'></span>Swimming</li>
        </div>
      );
    }


    const projectDocuments = () => {
      return(
        <div id="indoor_games">
          <li><span className='e-acrdn-icons e-content-icon tennis'></span>Table Tennis</li>
          <li><span className='e-acrdn-icons e-content-icon badminton'></span>Badminton</li>
          <li><span className='e-acrdn-icons e-content-icon volleyball'></span>Volleyball</li>
          <li><span className='e-acrdn-icons e-content-icon boxing'></span>Boxing</li>
          <li><span className='e-acrdn-icons e-content-icon swimming_In'></span>Swimming</li>
        </div>
      );
    }

    


    return (
      <div className='control-pane'>
        
        <div className='control-section accordion-control-section'>
          <div className= 'control Accordion-sample'  style = {{margin: '25px 0' }}>
            {/* Render the Accoridon Component */}
            <AccordionComponent>
              <AccordionItemsDirective>
                <AccordionItemDirective header= {acrdnHeader1} iconCss='e-athletics e-acrdn-icons' content={ sorceModels } expanded={true} />
                <AccordionItemDirective header= {acrdnHeader2} iconCss='e-water-game e-acrdn-icons' content={ projectModels } />

                <AccordionItemDirective header= {acrdnHeader3} iconCss='e-racing-games e-acrdn-icons'content={ projectTree } />
                <AccordionItemDirective header= {acrdnHeader4} iconCss='e-racing-games e-acrdn-icons'content={ projectProperties } />
                <AccordionItemDirective header= {acrdnHeader5} iconCss='e-racing-games e-acrdn-icons'content={ projectIssues } />
                <AccordionItemDirective header= {acrdnHeader6} iconCss='e-racing-games e-acrdn-icons'content={ projectProducts } />
                <AccordionItemDirective header= {acrdnHeader7} iconCss='e-racing-games e-acrdn-icons'content={ projectComunity } />
                <AccordionItemDirective header= {acrdnHeader8} iconCss='e-racing-games e-acrdn-icons'content={ projectUsers } />
                <AccordionItemDirective header= {acrdnHeader9} iconCss='e-indoor-games e-acrdn-icons' content={ projectDocuments } />

              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
        </div>
      </div>
    );
}
export default SideOptions;