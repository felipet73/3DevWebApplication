import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, CellStyleModel, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';
import './spreadsheet.css';

/**
 * Default Spreadsheet sample
 */

function TableBudget1() {
    let spreadsheet: SpreadsheetComponent;
    const boldRight: CellStyleModel = { fontWeight: 'bold', textAlign: 'right' };
    const bold: CellStyleModel = { fontWeight: 'bold' };

    function onCreated(): void {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
    }

    return (
                <SpreadsheetComponent openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open'
                    saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save'
                    //ref={(ssObj:any) => { spreadsheet = ssObj }} created={onCreated.bind(this)} >
                    ref={(ssObj:any) => { spreadsheet = ssObj }} created={onCreated} >
                    <SheetsDirective>
                        <SheetDirective name="Budget">
                            <RangesDirective>
                                <RangeDirective dataSource={defaultData}></RangeDirective>
                            </RangesDirective>
                            <RowsDirective>
                                <RowDirective index={30}>
                                    <CellsDirective>
                                        <CellDirective index={4} value="Total Amount:" style={boldRight}></CellDirective>
                                        <CellDirective formula="=SUM(F2:F30)" style={bold}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                            </RowsDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
    )
}
export default TableBudget1;