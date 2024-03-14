import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import './sideoptions.css'
import TreeViewOptions from './trees/TreeViewOptions';
import ListItems1 from './Lists/ListItems1';
import DropDown from './Lists/DropDown';
import Bstadistics1 from '../../Erp/Graphics/stadistics/Bstadistics1';
import DragAndDrop from './Lists/ListsDragDrop';

const SideRightOptions = () => {

    const acrdnHeader1 = () => {
      return (
        <div>Resources</div>
      )
    }
    const acrdnHeader2 = () => {
      return (
        <div>Stadistics</div>
      )
    }
    const acrdnHeader3 = () => {
      return (
        <div>Elements</div>
      )
    }
    const acrdnHeader4 = () => {
      return (
        <div>Other</div>
      )
    }
    const athletics = () => {
      return(              
        <div id="resources" >
        
          {/* <li><span className='e-acrdn-icons e-content-icon marathon'></span>Marathon</li>
          <li><span className='e-acrdn-icons e-content-icon javelin'></span>Javelin Throw</li>
          <li><span className='e-acrdn-icons e-content-icon discus'></span>Discus Throw</li>
          <li><span className='e-acrdn-icons e-content-icon highjump'></span>High Jump</li>
          <li><span className='e-acrdn-icons e-content-icon longjump'></span>Long Jump</li>   */}
        </div>        
      );
    }
    const water_games = () => {
      return(
        <div id="stadistics">
          <DropDown/>
          <Bstadistics1/>
          {/* <li><span className='e-acrdn-icons e-content-icon dive'></span>Diving</li>
          <li><span className='e-acrdn-icons e-content-icon swimming'></span>Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon marathan_swim'></span>Marathon Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon sync_swim'></span>Synchronized Swimming</li>
          <li><span className='e-acrdn-icons e-content-icon waterpolo'></span>Water Polo</li> */}
        </div>             
      );
    }
    const racing_games = () => {
      return(       
        <div id="elements">
          <DragAndDrop/>
        </div>
      );
    }

    const indoor_games = () => {
      return(
        <div id="other">
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
                <AccordionItemDirective header= {acrdnHeader1} iconCss='e-athletics e-acrdn-icons' content={ athletics } expanded={true} />
                <AccordionItemDirective header= {acrdnHeader2} iconCss='e-water-game e-acrdn-icons' content={ water_games } />
                <AccordionItemDirective header= {acrdnHeader3} iconCss='e-racing-games e-acrdn-icons'content={ racing_games } />
                <AccordionItemDirective header= {acrdnHeader4} iconCss='e-indoor-games e-acrdn-icons' content={ indoor_games } />
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
        </div>
      </div>
    );
}
export default SideRightOptions;