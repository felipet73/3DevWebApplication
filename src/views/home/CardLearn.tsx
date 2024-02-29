
//import './cardlearn.css';
import * as React from 'react';
import { useEffect } from 'react';


const CardLearn = () => {
    return (<div className='control-pane'>
            
            <div className='control-section card-control-section vertical_card_layout'>
                <div className="e-card-resize-container">
                <img src={`/assets/images/${'tt3'}.png`} alt="iPhone X" height="100%" style={{ width: '40%', marginLeft:'30vw' }} />                                                                                                            
                    <div className='row'>

                        <div className="row card-layout">

                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card" id="vertical_business">
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Mayumi Ohno</div>
                                            <div className="e-card-sub-title">Marketing Representative</div>
                                        </div>
                                    </div>
                                    <div className="e-card-actions">
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">mayum@mail.com</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">011-232-221</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">www.mayum.com</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card" id="vertical_business_profile">
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">John Doe</div>
                                            <div className="e-card-sub-title">Real Estate Agent</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content e-card-left" style={{ textAlign: 'left' }}>
                                        <table>
                                            <tr>
                                                <td>johndoe@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td>011-141-221</td>
                                            </tr>
                                            <tr>
                                                <td>www.johndoe.com</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card" id="vertical_business">
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Mayumi Ohno</div>
                                            <div className="e-card-sub-title">Marketing Representative</div>
                                        </div>
                                    </div>
                                    <div className="e-card-actions">
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">mayum@mail.com</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">011-232-221</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">www.mayum.com</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card" id="vertical_business_profile">
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">John Doe</div>
                                            <div className="e-card-sub-title">Real Estate Agent</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content e-card-left" style={{ textAlign: 'left' }}>
                                        <table>
                                            <tr>
                                                <td>johndoe@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td>011-141-221</td>
                                            </tr>
                                            <tr>
                                                <td>www.johndoe.com</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default CardLearn;

