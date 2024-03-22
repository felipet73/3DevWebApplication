
import { useEffect, useState } from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';

import ListItems1 from './Lists/ListItems1';
import TreeViewOptions from './trees/TreeViewOptions';
import TreeViewProject1 from './trees/TreeViewProject1';
import TreeProjectModel from './trees/TreeProjectModel';
import TreeProjectProperties from './trees/TreeProjectProperties';
import GenericSideMenu, { OptionsMenuInterface } from '../SideMenus/GenericSideMenu';
import './sideoptions.css'

interface GenMenInterface {
  title: string;
  options:OptionsMenuInterface[];
  iconCss:string;
  expanded:boolean;
}

const SideOptions = () => {

    const [generalMenu, setGeneralMenu] = useState<GenMenInterface[]>([
      {title: 'Data Sources',
       iconCss:'e-icons e-format-painter',
       expanded:true,
       options:[
        {headertext:'Autodesk CC',content:TreeViewOptions},
        {headertext:'IFCRepo',content:''},
        {headertext:'SWFRepo',content:''},
      ]}
      , 
      {title: 'Project Models',
        iconCss:'e-icons e-format-painter',
        expanded:false,
       options:[
        { headertext:'ProjectModels',content:TreeViewProject1},
        {headertext:'Details',content:'Details'},      
      ]},
      {title: 'Project Views',
        iconCss:'e-icons e-format-painter',
        expanded:false,
       options:[
        { headertext:'ProjectTree',content:TreeProjectModel},
        {headertext:'Views',content:'Views'},      
        ]},
      {title: 'Project Selections',
        iconCss:'e-icons e-format-painter',
        expanded:false,
       options:[
        { headertext:'ProjectTree',content:TreeProjectProperties},
        {headertext:'Selections',content:'Slections'},      
        {headertext:'Lists',content:'Lists'},      
      ]},
      {title: 'Isues-Comments',
        iconCss:'e-icons e-format-painter',
        expanded:false,
       options:[
        { headertext:'Issues',content:'Issues'},
        {headertext:'Comments',content:'Comments'},
        {headertext:'Lists',content:'Lists'},
      ]},
      {title: 'Products and Specifications',
        iconCss:'e-icons e-format-painter',
        expanded:false,
       options:[
        { headertext:'Products',content:ListItems1},
        {headertext:'Suppliers',content:'Suppliers'},
        {headertext:'Orders',content:'orders'},
      ]},
    {title: 'Comunity',
      iconCss:'e-icons e-format-painter',
      expanded:false,
       options:[
        { headertext:'Comunity',content:'Comunity'},
        {headertext:'Publish',content:'Publish'},
      ]},
      {title: 'Users',
      iconCss:'e-icons e-format-painter',
      expanded:false,
      options:[
       { headertext:'User',content:'user'},
       {headertext:'List',content:'List'},
     ]},
     {title: 'Documents',
     iconCss:'e-icons e-format-painter',
     expanded:false,
     options:[
      { headertext:'Documents',content:'Documents'},
      {headertext:'Lists',content:'Lists'},
    ]},

    ])

     


    return (
      <div className='control-pane'>
        
        <div className='control-section accordion-control-section'>
          <div className= 'control Accordion-sample'  style = {{margin: '25px 0' }}>
            {/* Render the Accoridon Component */}
            <AccordionComponent>
              <AccordionItemsDirective>
                {(generalMenu && generalMenu.length>0) && generalMenu?.map((item) => (
                  <AccordionItemDirective key={item?.title} 
                  header= {()=>(<div>{item?.title}</div>)} 
                  iconCss={item.iconCss} 
                  content={()=>(<div><GenericSideMenu options={item.options}/></div>)} 
                  expanded={item.expanded || false} />
                ))}
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
        </div>
      </div>
    );
}
export default SideOptions;