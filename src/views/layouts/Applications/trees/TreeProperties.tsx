import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, Toolbar, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
//import { orderDataSource } from './data';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { useBimProjectsStore } from '../../../../stores';
let refresh: Boolean;


let purchaseData = JSON.stringify([
    {
        'OrderID': 11073,
        'CustomerID': 'PERIC',
        'OrderDate': '1998-05-05T22:05:00.000Z',
        'ShippedDate': null,
        'Freight': 24.95,
        'ShipName': 'Pericles Comidas clásicas',
        'ShipAddress': 'Calle Dr. Jorge Cash 321',
        'ShipCity': 'México D.F.',
        'ShipRegion': null,
        'ShipCountry': 'Mexico'
    },
    {
        'OrderID': 11074,
        'CustomerID': 'SIMOB',
        'OrderDate': '1998-05-06T23:05:00.000Z',
        'ShippedDate': null,
        'Freight': 18.44,
        'ShipName': 'Simons bistro',
        'ShipAddress': 'Vinbæltet 34',
        'ShipCity': 'Kobenhavn',
        'ShipRegion': null,
        'ShipCountry': 'Denmark'
    },
    {
        'OrderID': 11075,
        'CustomerID': 'RICSU',
        'OrderDate': '1998-05-06T01:30:00.000Z',
        'ShippedDate': null,
        'Freight': 6.19,
        'ShipName': 'Richter Supermarkt',
        'ShipAddress': 'Starenweg 5',
        'ShipCity': 'Genève',
        'ShipRegion': null,
        'ShipCountry': 'Switzerland'
    },
    {
        'OrderID': 11076,
        'CustomerID': 'BONAP',
        'OrderDate': '1998-05-06T02:30:00.000Z',
        'ShippedDate': null,
        'Freight': 38.28,
        'ShipName': 'Bon app',
        'ShipAddress': '12, rue des Bouchers',
        'ShipCity': 'Marseille',
        'ShipRegion': null,
        'ShipCountry': 'France'
    },
    {
        'OrderID': 11077,
        'CustomerID': 'RATTC',
        'OrderDate': '1998-05-06T03:50:00.000Z',
        'ShippedDate': null,
        'Freight': 8.53,
        'ShipName': 'Rattlesnake Canyon Grocery',
        'ShipAddress': '2817 Milton Dr.',
        'ShipCity': 'Albuquerque',
        'ShipRegion': 'NM',
        'ShipCountry': 'USA'
    }
]);

export const orderDataSource = JSON.parse(purchaseData, (field, value) => {
    let dupValue = value;
    if (typeof value === 'string' && /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*){1})([zZ]|([+\-])(\d\d):?(\d\d))?$/.test(value)) {
        let arr = dupValue.split(/[^0-9]/);
        let arg = parseInt(arr[4], 10);
        let arg1 = parseInt(arr[5], 10);
        value = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), arg, arg1);
    }
    return value;
});


function TreeProperties() {
    //const toolbarOptions: any = ['Edit', 'Update', 'Cancel'];
    const toolbarOptions: any = [];
    const editSettings: any = { allowEditing: true };
    const editparams: any = { params: { popupHeight: '300px' } };
    const validationRule: Object = { required: true };
    const orderidRules: Object = { required: true, number: true };
    const format: any = { type: 'dateTime', format: 'M/d/y hh:mm a' };

    const groupOptions: Object = { showGroupedColumn: false, columns: ['displayCategory'] };
    let gridInstance: GridComponent | any;
    const visible = false;
    const animationSettings: Object = { effect: 'None' };
    let alertDialogInstance: DialogComponent | any;

    const actualProperties = useBimProjectsStore(store => store.actualProperties);


    const alertButtons = [{
        click: () => {  
            alertDialogInstance.hide();
        },
        buttonModel: { content: 'OK', isPrimary: true }
    }];
    function dataBound() {
        if (refresh) {
            gridInstance.groupColumn('displayCategory');
            refresh = false;
        }
    }
    function load() {
        //refresh = (this as any).refreshing;
        
    }
    function columnDragStart(args:any) {
        if (args.column.field === 'OrderDate') {
            alertDialogInstance.show();
        }
    }
    function created() {
        //gridInstance.on('columnDragStart', columnDragStart, this);
        gridInstance.groupSettings.showDropArea = false;
    }
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={actualProperties} allowPaging={false} ref={grid => gridInstance = grid} 
                //toolbar={toolbarOptions} 
                //pageSettings={{ pageCount: 5 }} 
                editSettings={editSettings} 
                allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="420"
                    dataBound={dataBound} load={load} created={created}
                    showColumnChooser={false}
                    >
                    <ColumnsDirective>
                        <ColumnDirective field='displayName' headerText='Name' width='40' textAlign='Left' 
                        //validationRules={orderidRules} 
                        isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='displayValue' headerText='Value' width='50' textAlign='Right' 
                        //validationRules={validationRule}
                        >

                        </ColumnDirective>
                        <ColumnDirective field='displayCategory' headerText='' width='150' editType='dropdownedit' edit={editparams} ></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Group, Sort, Edit, Toolbar]} />
                </GridComponent>
                <DialogComponent id="alertDialog" header='Grouping' visible={visible} animationSettings={animationSettings} width='300px' content='Grouping is disabled for this column' ref={alertdialog => alertDialogInstance = alertdialog} target='.control-section' buttons={alertButtons} ></DialogComponent>
            </div>
        </div>
    )
}
export default TreeProperties;