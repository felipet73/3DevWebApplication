//import { createRoot } from 'react-dom/client';
import './template-and-customization.css';
import * as React from 'react';
import { useEffect } from 'react';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';


const AddressBar = () => {


    return (<div className='control-pane'>
      <div className="control-section">
        <div className="content-wrapper breadcrumb-control-wrapper">
          <div className="row material2">
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <BreadcrumbComponent enableNavigation={false}>
                <BreadcrumbItemsDirective>
                  <BreadcrumbItemDirective iconCss="e-icons e-home" url="https://ej2.syncfusion.com/home/react.html#platform"/>
                  <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/"/>
                  <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/material/menu/default"/>
                  <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default"/>
                </BreadcrumbItemsDirective>
              </BreadcrumbComponent>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
export default AddressBar;