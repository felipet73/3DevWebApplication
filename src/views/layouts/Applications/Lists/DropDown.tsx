/**
 * DropDownList Template Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './dropdown.css';
import data from './dataSource.json';

const DropDown = () => {
    const temp: string = 'empList';
    // define the JSON of data
    const employeesData: { [key: string]: Object }[] = data.empList;
    // maps the appropriate column to fields property
    const fields: object = { text: 'Name', value: 'Eimg' };
    //set the value to header template
    const headerTemplate = () => {
        return (
            <div className="header"> <span>Graphic</span> <span className="columnHeader">Graphic type</span></div>
        );
    }
    //set the value to item template
    const itemTemplate = (data: any) => {
        return (
            <div>
                {/* <img className="empImage" src={"src/drop-down-list/Employees/" + data['Eimg'] + ".png"} alt="employee" /> */}
                
                <div className="ename"> {data.Name} </div><div className="job"> {data.Designation} </div></div>
        );
    }
    //set the value to value template
    const valueTemplate = (data: any) => {
        return (
            <div className="valueTemplate" >
                {/* <img className="value" src={"src/drop-down-list/Employees/" + data.Eimg + ".png"} height="28px" width="28px" alt="employee" /> */}
                <div className="name"> {data.Name} </div></div>
        );
    }
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div id='template'>
                    <DropDownListComponent id="employees" dataSource={employeesData} fields={fields} placeholder="Select an employee" itemTemplate={itemTemplate} valueTemplate={valueTemplate} headerTemplate={headerTemplate} popupHeight="270px" />
                </div>
            </div>
        </div>
    );
}
export default DropDown;