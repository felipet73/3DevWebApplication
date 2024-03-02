import { useEffect } from 'react';
import "./carduser.css";
import { useGlobalStore } from '../../../stores';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const CardUser = () => {
  const loggedUser = useGlobalStore( state => state.loggedUser);
  return (
    <div className="control-pane">
      <div className="sample_container card_sample">
        {/* <!-- Card Component --> */}
        <div className="e-card e-custom-card">
          
            {/* <!-- xLarge Circle Avatar--> */}
            <div className="e-avatar e-avatar-circle e-avatar-xlarge">            
              <img src={(loggedUser && loggedUser?.img) ? "https://images.pexels.com/photos/11259425/pexels-photo-11259425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1":`https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`  } alt="profile_pic" />
            </div>
            &nbsp;
          
          <div className="e-card-header">
            <div className="e-card-header-caption center">
              <div className="e-card-header-title name" style={{ fontSize:'3.2rem' }}>Welcome</div>
              <div className="e-card-sub-title" style={{ fontSize:'1.7rem' }}>{loggedUser && loggedUser?.name}</div>
              <div className="e-card-sub-title" style={{ fontSize:'1.2rem', marginTop:'-8px' }}>{'Role in Company Noname'}</div>
            </div>
          </div>
          <div className="e-card-content" style={{marginTop:'-35px'}}>
            <p className="avatar-content">
              {loggedUser && `email: ${loggedUser?.email}`}
            </p>
          </div>
          <div className="e-card-content">
            <p className="avatar-content">
                <ButtonComponent cssClass='e-secondary' onClick={() => {  }} style={{  height:'35px', marginBottom:'15px' }}>
                User Information</ButtonComponent>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardUser;