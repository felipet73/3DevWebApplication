import { useEffect } from 'react';
import "./carduser.css";
import { useGlobalStore } from '../../../stores';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const CardUser = () => {
  const loggedUser = useGlobalStore( state => state.loggedUser);
  return (
    <div className="maincard" style={{ overflow:'hidden' }}>
    <div className="cardcontent" >
        <div className="contentcontainer" >
            <div className="headerc" style={{ fontSize:'2.5rem', marginBottom:'5px', height:'35px' }}>Welcome</div>

              <img style={{ borderRadius:'50%', position:'absolute', right:'-14px', top:'-12px', width:'6vw', height:'6vw' }} src={(loggedUser && loggedUser?.img) ? "https://images.pexels.com/photos/11259425/pexels-photo-11259425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1":`https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`  } alt="profile_pic" />


            <ul>
            <li>{loggedUser && loggedUser?.name}</li>
            <li>{'Company: Noname'}</li>
            <li>{'Role: Noname'}</li>
            <li>{'User since: 01/01/2024'}</li>
            <li>{loggedUser && `email: ${loggedUser?.email}`}</li>


          </ul>



            <p className="avatar-content">
                <ButtonComponent cssClass='e-secondary' onClick={() => {  }} style={{  height:'35px', marginBottom:'15px' }}>
                User Information</ButtonComponent>
            </p>
          </div>
        </div>
      </div>
  );
}
export default CardUser;