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

const Login = ({ setTrogle, setLogged }:Props) => {

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
        <div className='control-pane' style={{ marginTop:'80px', display:'flex', justifyContent:'space-around',  }}>
            <div className='control-section input-content-wrapper borde' style={{ width:'35vw' }}>

                <div className="row " style={{ marginTop:'35px' }}>
                    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12"><b className='title-login'>LogIn</b></div>
                    <ButtonComponent onClick={()=>navigate("/home") } style={{ position:'absolute', marginLeft:'-55px' }} >X</ButtonComponent>
                </div>
                <div className="row " style={{ marginTop:'15px' }}>
                    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="e-input-group">
                            <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                        </div>
                    </div>
                </div>
                <div className="row " style={{ marginTop:'15px' }}>
                <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="e-input-group">
                            <TextBoxComponent placeholder="Password" floatLabelType="Auto" type='password' />
                        </div>
                    </div>
                </div>


                <div className='row ' style={{ marginTop:'20px' }}>
                    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" style={{ marginTop:'30px', marginBottom:'45px', display:'flex', alignItems:'baseline', justifyContent:'space-around' }} >
                            <ButtonComponent cssClass='e-danger' onClick={()=>{
                                setLogged(true);
                                navigate("/dashboard");
                                setTrogle(st=>!st);
                                }}><img src={`/assets/icons/${'ingresar'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight:'15px' }}/>
                                Login</ButtonComponent>
                                <ButtonComponent cssClass='e-secondary' onClick={()=>{
                                //setLogged(true);
                                navigate("/register");
                                }}><img src={`/assets/icons/${'registro'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight:'15px' }}/>
                                Register</ButtonComponent>

                        </div>

                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" style={{ marginTop:'20px', marginBottom:'45px', display:'flex', alignItems:'baseline', justifyContent:'space-around' }}>
                            <ButtonComponent onClick={()=>navigate("/home") } style={{ marginLeft:'20px', marginRight:'25px' }}>
                                <img src={`/assets/icons/${'facebook'}.png`} alt="facebook" height="40px" style={{ width: '40px' }}/>
                            </ButtonComponent>
                            <ButtonComponent onClick={()=>navigate("/home") } style={{ marginRight:'25px' }}>
                                <img src={`/assets/icons/${'gmail'}.png`} alt="facebook" height="40px" style={{ width: '40px' }}/>
                            </ButtonComponent>
                            <ButtonComponent onClick={()=>navigate("/home") } style={{ marginRight:'25px' }}>
                                <img src={`/assets/icons/${'github'}.png`} alt="facebook" height="40px" style={{ width: '40px' }}/>
                            </ButtonComponent>
                            <ButtonComponent onClick={()=>navigate("/home") } style={{ marginRight:'25px' }}>
                                <img src={`/assets/icons/${'linkedin'}.png`} alt="facebook" height="40px" style={{ width: '40px' }}/>
                            </ButtonComponent>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}
export default Login;