import * as ReactDOM from 'react-dom';
import * as React from "react";
import { useEffect } from 'react';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import './swimlane-template.css';
//import * as dataSource from './datasource.json';
import dataSource from './datasource.json';

/**
 * Kanban Swimlane Template sample
 */
const Kanban1 = () => {
    let data: Object[] = extend(
        [],
        (dataSource as { [key: string]: Object }).kanbanData,
        '',
        true
    ) as Object[];
    const rowTemplate = (props:any): any => {
        var src = "src/kanban/images/" + props.keyField + ".png";
        return (
            <div className="swimlane-template e-swimlane-template-table">
                <div className="e-swimlane-row-text">
                    <img src={src} alt={props.keyField} />
                    <span>{props.textField}</span>
                </div>
            </div>
        );
    };
    let template: any = rowTemplate;
    return (
        <div className="kanban-control-section">
            <div className="control-section">
                <div className="control-wrapper">
                    <KanbanComponent
                        id="kanban"
                        cssClass="kanban-swimlane-template"
                        keyField="Status"
                        dataSource={data}
                        cardSettings={{ contentField: "Summary", headerField: "Id" }}
                        swimlaneSettings={{
                            keyField: "Assignee",
                            template: template.bind(this),
                        }}
                    >
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open" />
                            <ColumnDirective headerText="In Progress" keyField="InProgress" />
                            <ColumnDirective headerText="Testing" keyField="Testing" />
                            <ColumnDirective headerText="Done" keyField="Close" />
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
        </div>
    );
}
export default Kanban1;