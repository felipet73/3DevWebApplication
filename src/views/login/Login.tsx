import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './login.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useNavigate } from 'react-router-dom';

interface Props {
    setLogged: (value: React.SetStateAction<boolean>) => void;
}

const Login = ({ setLogged }:Props) => {

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
        <div className='control-pane' style={{ marginTop:'80px' }}>
            <div className='control-section input-content-wrapper'>

                <div className="row custom-margin">
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4"><b className='title-login'>LogIn</b></div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="e-input-group">
                            <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="e-input-group">
                            <TextBoxComponent placeholder="Password" floatLabelType="Auto" type='password' />
                        </div>
                    </div>
                </div>


                <div className='row custom-margin'>
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                            <ButtonComponent cssClass='e-primary' onClick={()=>{
                                setLogged(true);
                                navigate("/dashboard");
                            }}>Login</ButtonComponent>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                            <ButtonComponent onClick={()=>navigate("/home") }>Cancel</ButtonComponent>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Login;