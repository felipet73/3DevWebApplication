import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './data1';
import { PropertyPane } from './PropertyPane';
import './tables.css';

const TableBadget2 = () => {
  let treegridObj = useRef<TreeGridComponent>(null);
  const toolbarOptions: any = ["Add", "Delete", "Update", "Cancel"];
  const editSettings: any = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Batch",
    newRowPosition: "Below",
  };
  const validationRule: Object = { required: true };
  const validationRule1: Object = { date: true };
  const validationRule2: Object = { required: true, number: true };
  const editparams2: any = { params: { format: "n" } };
  return (
    <div className="control-pane">
      <div className="control-section">
        <TreeGridComponent
          dataSource={sampleData}
          treeColumnIndex={1}
          childMapping="subtasks"
          height="100%"
          editSettings={editSettings}
          toolbar={toolbarOptions}
          ref={treegridObj}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="taskID"
              headerText="Task ID"
              width="90"
              textAlign="Right"
              validationRules={validationRule}
              isPrimaryKey={true}
            ></ColumnDirective>
            <ColumnDirective
              field="taskName"
              headerText="Task Name"
              width="220"
              validationRules={validationRule}
            ></ColumnDirective>
            <ColumnDirective
              field="startDate"
              headerText="Start Date"
              width="160"
              textAlign="Right"
              editType="datepickeredit"
              format="yMd"
              validationRules={validationRule1}
            />
            <ColumnDirective
              field="duration"
              headerText="Duration"
              width="140"
              editType="numericedit"
              textAlign="Right"
              validationRules={validationRule2}
              edit={editparams2}
            />
          </ColumnsDirective>
          <Inject services={[ Edit, Toolbar]} />
        </TreeGridComponent>
      </div>
    </div>
  );
}
export default TableBadget2;