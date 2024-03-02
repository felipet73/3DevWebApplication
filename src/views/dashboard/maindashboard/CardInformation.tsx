import { useEffect } from 'react';
import "./carduser.css";
import { useGlobalStore } from '../../../stores';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const Cardinformation = () => {
  const loggedUser = useGlobalStore( state => state.loggedUser);
  return (
    <div className="control-pane">
      <div className="sample_container card_sample">
        <div className="e-card e-custom-card">
          <div className="e-card-header">
            <div className="e-card-header-caption center">
              <div className="e-card-header-title name">3Dev Stadistics</div>
              <div className="e-card-sub-title">{'User since: 1 de January 2024'}</div>
              <div className="e-card-sub-title">{'User since: 1 de January 2024'}</div>
              <div className="e-card-sub-title">{'User since: 1 de January 2024'}</div>
              <div className="e-card-sub-title">{'User since: 1 de January 2024'}</div>
              <div className="e-card-sub-title">{'User since: 1 de January 2024'}</div>                                          
            </div>
          </div>
          <div className="e-card-content">
            <p className="avatar-content">
                <ButtonComponent cssClass='e-secondary' onClick={() => {  }} style={{  height:'35px', marginBottom:'15px' }}>
                More Stadistics</ButtonComponent>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cardinformation;