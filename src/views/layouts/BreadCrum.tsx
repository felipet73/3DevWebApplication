import * as React from 'react';
import { useEffect, useState } from 'react';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { getComponent } from '@syncfusion/ej2-base';
import './template-and-customization.css';

interface Prps {
    actualRoute:string[];
    setActualRoute:React.Dispatch<React.SetStateAction<string[]>>;
}
  

const BreadCrum = ({actualRoute,setActualRoute}:Prps) => {

    //const [disable, setDisable] = useState<boolean>(false);
    
    const customTemplate = (data: any) => {
        return (
            <div className="e-custom-item">
                <div className="e-custom-icon">
                    <span className="e-bicons e-frame e-check"></span>
                    <span className="e-label" style={{ fontSize:'2rem', marginTop:'-5px' }}>{data.text}</span>
                </div>
            </div>
        );
    }

    const customSeparatorTemplate = () => {
        return (
            <div className="e-custom-separator"></div>
        );
    }

    const btnClick = (): void => {
        let breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper')!.getElementsByClassName("e-breadcrumb");
        for (let i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = (getComponent(breadcrumb as HTMLElement, 'breadcrumb') as any);
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    }

    return (
        <div className='control-pane' style={{ height:'70px' }}>
            <div className="col-lg-12 control-section">
                <div className="content-wrapper breadcrumb-control-wrapper">
                    <div className="row material2">
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" style={{ overflow:'hidden' }}>
                            <BreadcrumbComponent cssClass="e-custom-breadcrumb" style={{ width:'18vw', overflow:'hidden', marginLeft:'-43px' }} itemTemplate={customTemplate} separatorTemplate={customSeparatorTemplate}>
                                <BreadcrumbItemsDirective >
                                    {actualRoute.map( r => <BreadcrumbItemDirective key={r} text={r} />)}
                                </BreadcrumbItemsDirective>
                            </BreadcrumbComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BreadCrum;