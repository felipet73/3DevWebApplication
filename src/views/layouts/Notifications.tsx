import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { ToolbarComponent } from '@syncfusion/ej2-react-navigations';
//import './notifications.css';

const Notifications = () => {

    return (
        <div className='control-pane'>
            <div className='control-section' style={{ marginTop:'-115px' }}>
                <div className="sample_container badge-toolbar">
                    <ToolbarComponent id="toolbar">
                        <div>
                            <div>
                                <div className="badge-block">
                                    <div className="message icons"></div>
                                    {/* Notification Badge */}
                                    <span className="e-badge e-badge-primary e-badge-notification e-badge-overlap">35</span>
                                </div>
                            </div>
                            <div>
                                <div className="badge-block">
                                    <div className="user-profile icons"></div>
                                    {/* Notification Badge */}
                                    <span className="e-badge e-badge-success e-badge-notification e-badge-overlap">28</span>
                                </div>
                            </div>
                            <div>
                                <div className="badge-block">
                                    <div className="love icons"></div>
                                    {/* Notification Badge */}
                                    <span className="e-badge e-badge-info e-badge-notification e-badge-overlap">98</span>
                                </div>
                            </div>
                        </div>
                    </ToolbarComponent>
                </div>
            </div>

        </div>
    )
}
export default Notifications;