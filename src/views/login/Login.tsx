import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './login.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useNavigate } from 'react-router-dom';

interface Props {
    setTrogle: React.Dispatch<React.SetStateAction<boolean>>;
    setLogged: (value: React.SetStateAction<boolean>) => void;
}

const Login = ({ setTrogle, setLogged }: Props) => {

    const navigate = useNavigate();

    const floatFocus = (args: any): void => {
        args.target.parentElement.classList.add("e-input-focus");
    };
    const floatBlur = (args: any): void => {
        args.target.parentElement.classList.remove('e-input-focus');
    }
    const onIconClick = (args: any): void => {
        args.persist();
        setTimeout(() => {
            args.target.classList.add('e-input-btn-ripple');
        }, 500);
    };
    const onIconUnClick = (args: any): void => {
        args.target.classList.remove('e-input-btn-ripple');
    }

    return (
        <div className='control-pane' style={{ marginTop: '80px' }}>
            <div className='control-section card-control-section vertical_card_layout'>
                <div className="e-card-resize-container">
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" >
                                <div className="e-card profile" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                                <div className="e-input-group" style={{ padding: '10px' }}>
                                    <div className="e-card-header">
                                        <img src={`/assets/icons/${'perfil'}.png`} alt="" style={{ width: '10%' }} />
                                        <b className='title-login' style={{ fontSize: '3rem', marginLeft: '30px', marginTop: '15px' }}>Login</b>
                                        <ButtonComponent onClick={() => navigate("/home")} style={{ position: 'absolute', right: '35px' }} >X</ButtonComponent>
                                    </div>
                                    </div>
                                    <div className="e-input-group" style={{ padding: '30px' }}>
                                        <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                                        <TextBoxComponent placeholder="Password" floatLabelType="Auto" type='password' />
                                    </div>
                                    <div className="e-input-group" style={{ padding: '30px' }}>
                                        <div className="e-card-separator"></div>

                                        <ButtonComponent onClick={() => navigate("/home")} style={{ marginLeft: '10px', marginRight: '25px', height:'55px', marginTop:'20px' }}>
                                                <img src={`/assets/icons/${'facebook'}.png`} alt="facebook" height="40px" style={{ width: '40px' }} />
                                            </ButtonComponent>
                                            <ButtonComponent onClick={() => navigate("/home")} style={{ marginRight: '25px', height:'55px', marginTop:'20px' }}>
                                                <img src={`/assets/icons/${'gmail'}.png`} alt="facebook" height="40px" style={{ width: '40px' }} />
                                            </ButtonComponent>
                                            <ButtonComponent onClick={() => navigate("/home")} style={{ marginRight: '25px', height:'55px', marginTop:'20px' }}>
                                                <img src={`/assets/icons/${'github'}.png`} alt="facebook" height="40px" style={{ width: '40px' }} />
                                            </ButtonComponent>
                                            <ButtonComponent onClick={() => navigate("/home")} style={{ marginRight: '65px', height:'55px', marginTop:'20px' }}>
                                                <img src={`/assets/icons/${'linkedin'}.png`} alt="facebook" height="40px" style={{ width: '40px' }} />
                                            </ButtonComponent>


                                            <ButtonComponent cssClass='e-secondary' onClick={() => { navigate("/register"); }} style={{ marginRight: '55px', height:'65px', marginTop:'2%' }}><img src={`/assets/icons/${'registro'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight: '15px' }} />
                                                Register</ButtonComponent>
                                                <ButtonComponent cssClass='e-danger' onClick={() => {
                                                setLogged(true);
                                                navigate("/dashboard");
                                                setTrogle(st => !st);
                                            }} style={{ height:'65px', marginTop:'2%' }}><img src={`/assets/icons/${'ingresar'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight: '15px' }} />
                                                Login</ButtonComponent>

                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;