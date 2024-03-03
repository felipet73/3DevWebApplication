import { useEffect } from 'react';
//import "./carduser.css";
import { useGlobalStore } from '../../../stores';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const Cardinformation = () => {
  const loggedUser = useGlobalStore(state => state.loggedUser);
  return (
    <div className="maincard">
      <div className="cardcontent" >
        <div className="contentcontainer" >
          <div className="headerc" >3Dev Stadistics</div>
          <ul>
            <li>😁 Humous : 10%</li>
            <li>Pitta</li>
            <li>Green salad</li>
            <li>Halloumi</li>
            <li>Green salad</li>
            <li>Halloumi</li>
            <li>Green salad</li>
            <li>Halloumi</li>
            <li>Green salad</li>
            <li>Halloumi</li>
            <li>Green salad</li>


          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cardinformation;