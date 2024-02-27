import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import './card.component.css';

const Today = () => {    

    return (
        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                <div className="e-card" id="weather_card" >
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Hoy</div>
                                            <div className="e-card-sub-title">Cuenca - Ecuador.</div>
                                        </div>
                                    </div>
                                    <div className="e-card-header weather_report">
                                        <div className="e-card-header-image"></div>
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">1&#186; / -4&#186;</div>
                                            <div className="e-card-sub-title">Chance for snow: 100%</div>
                                            <div className="e-card-sub-title">Chance </div>
                                            <div className="e-card-sub-title">Chance </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
    );
}
export default Today;