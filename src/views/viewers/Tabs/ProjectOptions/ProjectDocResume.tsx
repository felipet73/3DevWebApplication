/**
 * Default PDF Viewer sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer,Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import './api.css';

function ProjectDocResume() {
    let viewer: PdfViewerComponent;
    return (<div>
        <div className='control-section'>
                {/* <div className="flex-container">
                <label htmlFor="checked" className="switchLabel" > Standalone PDF Viewer </label>
                 <div className="e-message render-mode-info">
                     <span className="e-msg-icon render-mode-info-icon" title="Turn OFF to render the PDF Viewer as server-backed"></span>
                 </div>
                    <div>
                    <SwitchComponent cssClass="buttonSwitch" id="checked" change={change} checked={true}></SwitchComponent>
                    </div>
                </div> */}
            {/* Render the PDF Viewer */}
            <PdfViewerComponent ref={(scope:any) => { viewer = scope; }} id="container" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    </div>
    );
    function change(args:any){
        if (args.checked) {
            viewer.serviceUrl = '';
        }
        else {
            viewer.serviceUrl = 'https://services.syncfusion.com/react/production/api/pdfviewer';
        }
        viewer.dataBind();
        viewer.load(viewer.documentPath, '');
    }
}
export default ProjectDocResume;