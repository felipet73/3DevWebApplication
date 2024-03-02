
import * as React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './login.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../customhooks/useForm';
import Axios from '../../../config/axios';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { PositionDataModel } from '@syncfusion/ej2-popups';
import { useGlobalStore } from '../../../stores';
import { UserInterface } from '../../../interfaces/userInterface';

interface Props {
    setTrogle: React.Dispatch<React.SetStateAction<boolean>>;
    setLogged: (value: React.SetStateAction<boolean>) => void;
}

const Login = ({ setTrogle, setLogged }: Props) => {
    const navigate = useNavigate();
    const setLoggedUser = useGlobalStore( state => state.setLoggedUser);

    const { formData, onChange } = useForm({});
    const { email, password } = formData;
    let toastObj: ToastComponent;
    let position: PositionDataModel = { X: 'Right' };

    const LogIn = async () =>{
        console.log('FormDATA ',formData);
        if (email==='' || password==='') {
            toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n Please enter email and password', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            return;
        }
        try {
            await Axios.post("auth/login", formData).then(response => {
                console.log('Response ',response.data);
                console.log('Response ',response.data.user);
                console.log('Response ',response.data.token);
                localStorage.setItem("User3Dev", JSON.stringify(response.data.user));
                localStorage.setItem("Token3Dev", JSON.stringify(response.data.token));
                setLoggedUser(response.data.user as UserInterface);
                setLogged(true);
                navigate("/dashboard");
                setTrogle(st => !st);
            }).catch(response => {
                toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n '+response.response?.data?.error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
                console.log('Error ',response.response.data.error);
            });        
        } catch (error) {
            toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n '+error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            console.log('Response error catch ', error);
        }
    }

    return (
        <div className='control-pane' style={{ marginTop: '80px' }}>
            <div className='control-section card-control-section vertical_card_layout '>
                <div className="e-card-resize-container toast-type-section">
                <ToastComponent ref={(toast) => { toastObj = toast! }} id='toast_type' position={position} ></ToastComponent>
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" >
                                <div className="e-card profile" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                                <div className="e-input-group" style={{ padding: '10px' }}>
                                    <div className="e-card-header">
                                        <img src={`https://images.pexels.com/photos/12561874/pexels-photo-12561874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="" style={{ width: '30%', height:'150px', marginLeft:'-80px' }} />
                                        <b className='title-login' style={{ fontSize: '3rem', marginLeft: '30px', marginTop: '100px' }}>Login</b>
                                        <ButtonComponent onClick={() => navigate("/home")} style={{ position: 'absolute', right: '35px' }} >X</ButtonComponent>
                                    </div>
                                    </div>
                                    <div className="" style={{ padding: '10px 150px 10px 150px' }}>
                                        <TextBoxComponent value={email} name="email" onChange={onChange} placeholder="Email" floatLabelType="Auto" />
                                        <TextBoxComponent value={password} name="password" onChange={onChange} placeholder="Password" floatLabelType="Auto" type='password' />
                                    </div>
                                    <div className="" style={{ padding: '10px 30px 10px 30px' }}>
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
                                            <ButtonComponent cssClass='e-danger' onClick={LogIn} style={{ height:'65px', marginTop:'2%' }}><img src={`/assets/icons/${'ingresar'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight: '15px' }} />
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