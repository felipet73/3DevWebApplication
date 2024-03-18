/**
 * Dropdown Tree Template Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import './icons.css';
import { useBimProjectsStore } from '../../../../stores';
//import * as dataSource from './template-data.json';

/*const dataSource:any={
    templateData : [
        { "id": 1, "name": "Steven Buchanan", "eimg": "10", "job": "General Manager", "hasChild": true, "expanded": true, "status":"busy" },
        { "id": 2, "pid": 1, "name": "Laura Callahan", "eimg": "2", "job": "Product Manager", "hasChild": true, "status":"online" },
        { "id": 3, "pid": 2, "name": "Andrew Fuller", "eimg": "7", "job": "Team Lead", "hasChild": true, "status":"away" },
        { "id": 4, "pid": 3, "name": "Anne Dodsworth", "eimg": "1", "job": "Developer", "status":"busy" },
        { "id": 10, "pid": 3, "name": "Lilly", "eimg": "5", "job": "Developer", "status":"online" },
        { "id": 5, "pid": 1, "name": "Nancy Davolio", "eimg": "4", "job": "Product Manager", "hasChild": true, "status":"away" },
        { "id": 6, "pid": 5, "name": "Michael Suyama", "eimg": "9", "job": "Team Lead", "hasChild": true, "status":"online" },
        { "id": 7, "pid": 6, "name": "Robert King", "eimg": "8", "job": "Developer ", "status":"online" },
        { "id": 11, "pid": 6, "name": "Mary", "eimg": "6", "job": "Developer ", "status":"away" },
        { "id": 9, "pid": 1, "name": "Janet Leverling", "eimg": "3", "job": "HR", "status":"online" }
    ]
}*/

interface Props{
    modelId:string;
}

const TreeModelDetail = ({ modelId }:Props) => {
    //const data = dataSource as any;

    //const [data, setData] = React.useState<any>([]);
    const [fields, setFields] = React.useState<any>([]);
    const viewables = useBimProjectsStore(store => store.viewables);

    useEffect(() => {
        //console.log('viewables', viewables);
        
        const dataViewable = viewables.find((x:any) => x.ModelId === modelId);
        if (!dataViewable) return;
        console.log('viewable', dataViewable);
        for (let i=0;i<dataViewable.Viewables.length;i++)
        {
            if (dataViewable.Viewables[i].data.type === 'geometry')
                dataViewable.Viewables[i].hasChild=false;
            else
                dataViewable.Viewables[i].hasChild=true;
            if (dataViewable.Viewables[i].Parent===""){
                dataViewable.Viewables[i]={
                    name: dataViewable.Viewables[i].name,
                    data: dataViewable.Viewables[i].data,
                    id: dataViewable.Viewables[i].id,
                    //"Parent": 22,
                    hasChild: true,
                }
            }
        }
        const data= {
            templateData:[
                ...dataViewable.Viewables
            ]
        }
        //setData(dataSource);
        //setData(dataViewable.Viewables);
        setFields({ dataSource: data.templateData, value: 'id', parentValue: 'Parent', text: 'name', hasChildren: "hasChild" });
    }, [])
    

    // maps the appropriate column to fields property
    //const fields: object = { dataSource: data.templateData, value: 'id', parentValue: 'Parent', text: 'name', hasChildren: "hasChild" };
    //set the value to header template
    const headerTemplate = () => {
        return (
            <div className="head"> Views </div>
        );
    }
    //set the value to item template
    const itemTemplate = (data: any) => {
        return (
            // <div> <img className="eimage" src={"src/images/employees/" + '2' + ".png"} />
                <div> <div className="" > {data.name} </div></div>
                // </div>
        );
    }
    //set the value to footer template
    const footerTemplate = () => {
        return (
            <div className="footer" > <div className="footer-content">
                <span className="e-badge">
                    
                    <span className="display unavailable">
                        <span className="status away"></span>
                    </span>
                </span>
            </div> </div>
        );
    }

    return (
      <DropDownTreeComponent fields={fields} placeholder="Select View" 
      //itemTemplate={itemTemplate} 
      //footerTemplate={footerTemplate} 
      //headerTemplate={headerTemplate} 
      popupHeight="220px" cssClass="ddt-template" width="100%"  />
    );
}
export default TreeModelDetail;