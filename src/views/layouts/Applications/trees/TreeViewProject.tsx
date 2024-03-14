import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
//import { textdata } from './data';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, DetailRow, Inject } from '@syncfusion/ej2-react-treegrid';
import { useBimProjectsStore } from '../../../../stores';

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


interface DateFormat extends Window {
    format?: Function;
}
const TreeViewProject = () => {
    const format = (value: Date) => {
        return instance.formatDate(value, { skeleton: "yMd", type: "date" });
    };

    const actualProyect = useBimProjectsStore(store=> store.actualProject);
    const [tit, setTit]= React.useState('');

    const detailtemplate = (props:any): any => {
        var imag = "src/treegrid/images/" + props.FullName + ".png";
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
                    <img src={imag} alt={props.FullName} />
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
                        <b>{props.Name}</b> was born on {format(props.DOB)}. Now lives at{" "}
                        {props.Address}, {props.Country}. {props.Name} holds a position of{" "}
                        <b>{props.Designation}</b> in our WA department, (Seattle USA).
                    </div>
                    <div className="e-description" style={{ marginTop: "5px" }}>
                        <b style={{ marginRight: "10px" }}>Contact:</b>
                        {props.Contact}
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        console.log(actualProyect);
        setTit(actualProyect?.name || '')
    }, [actualProyect])
    

    const template: any = detailtemplate;
    return (
        <div className="control-pane">
            <div className="control-section">
                <TreeGridComponent
                    dataSource={textdata}
                    childMapping="Children"
                    detailTemplate={template.bind(this)}
                    treeColumnIndex={0}
                    height="335"
                >
                    <ColumnsDirective>
                        <ColumnDirective
                            headerText={tit}
                            width="180"
                            field="Name"
                        ></ColumnDirective>
                        <ColumnDirective
                            headerText="Date"
                            field="DOB"
                            width="85"
                            type="date"
                            format="yMd"
                            textAlign="Right"
                        ></ColumnDirective>
                        
                    </ColumnsDirective>
                    <Inject services={[DetailRow]} />
                </TreeGridComponent>
            </div>
        </div>
    );
}
export default TreeViewProject;