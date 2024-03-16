import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
//import { textdata } from './data';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, DetailRow, Inject } from '@syncfusion/ej2-react-treegrid';
import { useBimProjectsStore } from '../../../../stores';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

let instance: Internationalization = new Internationalization();


const textdata = [{
  'Name': 'Robert King',
  'FullName': 'RobertKing',
  'Designation': 'Chief Executive Officer',
  'EmployeeID': '1',
  'EmpID': 'EMP001',
  'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
  'Contact': '(206) 555-9857',
  'Country': 'USA',
  'DOB': new Date('2/15/1963'),
    },
   {
          'Name': 'David william',
          'FullName': 'DavidWilliam',
          'Designation': 'Vice President',
          'EmployeeID': '2',
          'EmpID': 'EMP004',
          'Address': '722 Moss Bay Blvd., Kirkland',
          'Country': 'USA',
          'Contact': '(206) 555-3412',
          'DOB': new Date('5/20/1971'),
   },
   {
                  'Name': 'Nancy Davolio',
                  'FullName': 'NancyDavolio',
                  'Designation': 'Marketing Executive',
                  'EmployeeID': '3',
                  'EmpID': 'EMP035',
                  'Address': '4110 Old Redmond Rd., Redmond',
                  'Country': 'USA',
                  'Contact': '(206) 555-8122',
                  'DOB': new Date('3/19/1966'),
   },
                      {
                          'Name': 'Andrew Fuller',
                          'FullName': 'AndrewFuller',
                          'Designation': 'Sales Representative',
                          'EmployeeID': '4',
                          'EmpID': 'EMP045',
                          'Address': '14 Garrett Hill, London',
                          'Country': 'UK',
                          'Contact': '(71) 555-4848',
                          'DOB': new Date('9/20/1980')
                      }
];


const items: ItemModel[] = [
    {
        text: 'View-Open',
        iconCss: 'e-ddb-icons e-dashboard'
    },
    {
        text: 'Add to Project',
        iconCss: 'e-ddb-icons e-notifications',
    },
    {
        text: 'Copy',
        iconCss: 'e-ddb-icons e-settings',
    },
    {
        text: 'Info',
        iconCss: 'e-ddb-icons e-logout'
    }];

interface DateFormat extends Window {
    format?: Function;
}
const TreeViewProject = () => {
    const format = (value: Date) => {
        return instance.formatDate(value, { skeleton: "yMd", type: "date" });
    };

    const actualProyect = useBimProjectsStore(store=> store.actualProject);
    const [tit, setTit]= React.useState('');
    const [data, setData]= React.useState<any>([]);

    const detailtemplate = (props:any): any => {
        var imag = "http://localhost:3001/api/images/users/e719a8ae-68bf-4ad0-a3b2-6702936cef42.png"
        // + props.image  + ".png";
        return (
            <div>
                <div
                    style={{
                        position: "relative",
                        display: "inline-block",
                        float: "left",
                        padding: "5px 4px 2px 27px",
                    }}
                >
                    <img style={{ width:'60px' }} src={imag} alt={props.name} />
                </div>
                <div
                    style={{
                        paddingLeft: "10px",
                        display: "inline-block",
                        width: "66%",
                        fontSize: "13px",
                        fontFamily: "Segoe UI",
                    }}
                >
                    <div className="e-description" style={{ marginTop: "5px" }}>
                        <b>{props?.description}</b> .
                        <DropDownButtonComponent items={items} style={{ position:'absolute', right:'5px', marginTop:'-5px' }} select={(e:any)=>{
            //console.log(e, props);
          }}></DropDownButtonComponent>                        
                    </div>
                    
                </div>
            </div>
        );
    };

    useEffect(() => {
        console.log('Este es actualProject', actualProyect);
        
        setData(actualProyect?.models || []);
        //setTit(actualProyect?.name || '')
    }, [actualProyect])
    

    const template: any = detailtemplate;
    return (
        <div className="control-pane">
            <div className="control-section">
                {actualProyect?.name}
                <TreeGridComponent
                    dataSource={data}
                    childMapping="models"
                    detailTemplate={template.bind(this)}
                    //detailTemplate={template}
                    treeColumnIndex={0}
                    height="335"
                >
                    <ColumnsDirective>
                        <ColumnDirective
                            headerText='Model'
                            width="180"
                            field="name"
                            //template={template}
                        ></ColumnDirective>
                         {/* <ColumnDirective
                            headerText="Date"
                            field="createdAt"
                            width="85"
                            type="date"
                            format="yMd"
                            textAlign="Right"
                        ></ColumnDirective> */}
                        
                    </ColumnsDirective>
                    <Inject services={[DetailRow]} />
                </TreeGridComponent>
            </div>
        </div>
    );
}
export default TreeViewProject;