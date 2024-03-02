
import * as React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import '../login/login.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../customhooks/useForm';
import Axios from '../../../config/axios';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { PositionDataModel } from '@syncfusion/ej2-popups';


interface Props {
    setTrogle: React.Dispatch<React.SetStateAction<boolean>>;
    setLogged: (value: React.SetStateAction<boolean>) => void;
}

const Register = ({ setTrogle, setLogged }: Props) => {
    const navigate = useNavigate();

    const { formData, onChange } = useForm({});
    const { name, email, password, rpassword } = formData;
    let toastObj: ToastComponent;
    let position: PositionDataModel = { X: 'Right' };

    const RegisterAndLogIn = async () => {
        console.log('FormDATA ', formData);
        if (name === '' || email === '' || password === '' || rpassword === '') {
            toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n Please enter all fields', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            return;
        }
        if (password !== rpassword) {
            toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n Please enter the same password', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            return;
        }

        try {
            await Axios.post("auth/register", formData).then(response => {
                console.log('Response ', response.data);
                console.log('Response ', response.data.user);
                console.log('Response ', response.data.token);
                localStorage.setItem("User3Dev", JSON.stringify(response.data.user));
                localStorage.setItem("Token3Dev", JSON.stringify(response.data.token));
                setLogged(true);
                navigate("/dashboard");
                setTrogle(st => !st);
            }).catch(response => {
                toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n ' + response.response?.data?.error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
                console.log('Error ', response.response.data.error);
            });
        } catch (error) {
            toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n ' + error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            console.log('Response error catch ', error);
        }
    }

    return (
        <div className='control-pane' style={{ marginTop: '80px' }}>
            <div className='control-section card-control-section vertical_card_layout'>
                <div className="e-card-resize-container toast-type-section">
                    <ToastComponent ref={(toast) => { toastObj = toast! }} id='toast_type' position={position} ></ToastComponent>
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" >
                                <div className="e-card profile" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                                    <div className="e-input-group" style={{ padding: '10px' }}>
                                        <div className="e-card-header">
                                            <img src={`https://media.istockphoto.com/id/1165355169/es/foto/bot%C3%B3n-registrarse-en-el-teclado-del-ordenador.jpg?s=2048x2048&w=is&k=20&c=WkE1s4DTtQwqnd8KDsBFLOIh1Rq05ssNloicybZ7mME=`} alt="" style={{ width: '30%', marginLeft:'-70px' }} />
                                            <b className='title-login' style={{ fontSize: '3rem', marginLeft: '30px', marginTop: '85px' }}>Registering a new user</b>
                                            <ButtonComponent onClick={() => navigate("/home")} style={{ position: 'absolute', right: '35px' }} >X</ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="" style={{ padding: '10px 120px 10px 120px' }}>
                                        <TextBoxComponent value={name} name="name" onChange={onChange} placeholder="Name" floatLabelType="Auto" />
                                        <TextBoxComponent value={email} name="email" onChange={onChange} placeholder="Email" floatLabelType="Auto" />
                                    </div>
                                    <div className="" style={{ padding: '10px 120px 10px 120px' }}>
                                        <TextBoxComponent value={password} name="password" onChange={onChange} placeholder="Password" floatLabelType="Auto" type='password' />
                                        <TextBoxComponent value={rpassword} name="rpassword" onChange={onChange} placeholder="Confirm Password" floatLabelType="Auto" type='password' />
                                    </div>
                                    <div className="e-input-group" style={{ padding: '30px' }}>
                                        <div className="e-card-separator"></div>
                                        <ButtonComponent cssClass='e-secondary' onClick={() => { navigate("/login"); }} style={{ marginRight: '55px', height: '65px', marginTop: '2%' }}><img src={`/assets/icons/${'registro'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight: '15px' }} />
                                            Back to Login</ButtonComponent>
                                        <ButtonComponent cssClass='e-danger' onClick={RegisterAndLogIn} style={{ height: '65px', marginTop: '2%' }}><img src={`/assets/icons/${'ingresar'}.png`} alt="facebook" height="40px" style={{ width: '40px', marginRight: '15px' }} />
                                            Register and Login</ButtonComponent>
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
export default Register;