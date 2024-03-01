import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Selection, Filter, Sort, Reorder, Inject, ITreeData, RowDD, ContextMenu, Toolbar, Page, Edit } from '@syncfusion/ej2-react-treegrid';
import { countries } from './data';
import { IFilter } from '@syncfusion/ej2-react-grids';
import { ContextMenuItemModel, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import { ActionEventArgs, getObject } from '@syncfusion/ej2-grids';
import { addClass, isNullOrUndefined } from '@syncfusion/ej2-base';
import './icons.css';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-react-navigations'
import { getValue } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-react-inputs';

const TreeViewOptions = () => {
  const gridTemplate = (props:any): any => {
    var flagIconLocation = props.parentItem
      ? props.parentItem.name
      : props.name;
    return (
      <div style={{ display: "inline" }}>
        <div style={{ display: "inline-block" }}>
          <img
            className="e-image"
            src={"https://ej2.syncfusion.com/react/demos/src/treegrid/images/" + flagIconLocation + ".png"}
            alt = {flagIconLocation}
          ></img>
        </div>
        <div style={{ display: "inline-block", paddingLeft: "6px" }}>
          {props.name}
        </div>
      </div>
    );
  };

  const treegridTemplate = (props: any): any => {
    if (props.gdp < 2) {
    return (
      <div className="statustemp e-lowgdp">
        <span className="statustxt e-lowgdp">{props.gdp} %</span>
      </div>
    );
    }
    else{
      return (
        <div className="statustemp">
          <span className="statustxt">{props.gdp} %</span>
        </div>
      );
    }
  };

  const treeratingTemplate = (props: any): any => {
    return (<div><RatingComponent value={props.rating} cssClass={'custom-rating'} readOnly={true}/></div>);
  };

  const treeunemployTemplate = (props: any): any => {
    return (<div id="myProgress" className="pbar">
    {props.unemployment <=4 ?
            <div id="myBar" className="bar progressdisable" style={{ width: props.unemployment * 10 + "%" }}>
      <div id="pbarlabel" className="barlabel">{props.unemployment + "%"}</div>
    </div> :
            <div id="myBar" className="bar" style={{ width: props.unemployment * 10 + "%" }}>
      <div id="pbarlabel" className="barlabel">{props.unemployment + "%"}</div>
    </div>}
    </div>);
  };

  const treelocationTemplate = (props:any): any => {
    var locationsrc = "src/treegrid/images/Map.png";
    return (
      <div id="coordinates">
        <img src={locationsrc} className="e-image" alt={props.coordinates} />
        <a target="_blank" href="https://www.google.com/maps/place/">
          {props.coordinates}
        </a>
      </div>
    );
  };

  const treeareaTemplate = (props:any): any => {
    return (
      <span>
        {props.area} km<sup>2</sup>
      </span>
    );
  };

  const treezoneTemplate = (props:any): any => {
    let classValue = "";
    if (props.timezone.indexOf("-") !== -1) {
      classValue = "negativeTimeZone";
    }
    return (
      <div>
        <img
          src="src/treegrid/images/__Normal.png"
          style={{ filter: "brightness(150%)" }}
          className={classValue}
        ></img>
        <span style={{ paddingLeft: "7px" }}>{props.timezone}</span>)
      </div>
    );
  };

  /*const populationValue = (field: string, data: Object) => {
    return data[field] / 1000000;
  };*/

  let flagtemplate: any = gridTemplate;
  let gdptemplate: any = treegridTemplate;
  let ratingtemplate: any = treeratingTemplate;
  let unemploymentTemplate: any = treeunemployTemplate;
  let locationtemplate: any = treelocationTemplate;
  let areatemplate: any = treeareaTemplate;
  let timezonetemplate: any = treezoneTemplate;

  const provinceFilter: IFilter = {
    type: "Excel",
    itemTemplate: flagtemplate,
  };
  let treegridObj = React.useRef<TreeGridComponent>(null);

  const editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  const contextMenuItems: ContextMenuItemModel[] = [
    { text: "Collapse the Row", target: ".e-content", id: "collapserow" },
    { text: "Expand the Row", target: ".e-content", id: "expandrow" },
    { text: "Collapse All", target: ".e-headercontent", id: "collapseall" },
    { text: "Expand All", target: ".e-headercontent", id: "expandall" },
  ];

  const contextMenuOpen = (args: BeforeOpenCloseEventArgs): void => {
    //alert()
    let elem: Element = args.event.target as Element;
    let row: Element = elem.closest(".e-row")!;
    let uid: string = row && row.getAttribute("data-uid")!;
    let items: NodeListOf<Element> = document.querySelectorAll(".e-menu-item");
    for (let i: number = 0; i < items.length; i++) {
      items.item(i).setAttribute("style", "display: block;");
    }
    /*if (elem.closest(".e-row")) {
      if (
        isNullOrUndefined(uid) ||
        isNullOrUndefined(
          getValue(
            "hasChildRecords",
            treegridObj.current!.grid.getRowObjectFromUID(uid).data
          )
        )
      ) {
        args.cancel = true;
      } else {
        let flag: boolean = getValue(
          "expanded",
          treegridObj.current!.grid.getRowObjectFromUID(uid).data
        );
        let val: string = flag ? "none" : "block";
        document
          .querySelectorAll("li#expandrow")[0]
          .setAttribute("style", "display: " + val + ";");
        val = !flag ? "none" : "block";
        document
          .querySelectorAll("li#collapserow")[0]
          .setAttribute("style", "display: " + val + ";");
      }
    } else {*/
      let len =
        treegridObj.current!.element.querySelectorAll(
          ".e-treegridexpand"
        ).length;
      if (len !== 0) {
        document
          .querySelectorAll("li#collapseall")[0]
          .setAttribute("style", "display: block;");
      } else {
        document
          .querySelectorAll("li#expandall")[0]
          .setAttribute("style", "display: block;");
      }
    //}
  };  
  const contextMenuClick = (args: MenuEventArgs): void => {
    //console.log(args.item);
    //return;
    if (args.item.id === "collapserow") {
      treegridObj.current?.collapseRow(
        treegridObj.current?.getSelectedRows()[0] as HTMLTableRowElement,
        treegridObj.current?.getSelectedRecords()[0]
      );
    } else if (args.item.id === "expandrow") {
      treegridObj.current?.expandRow(
        treegridObj.current?.getSelectedRows()[0] as HTMLTableRowElement,
        treegridObj.current?.getSelectedRecords()[0]
      );
    } else if (args.item.id === "collapseall") {
      treegridObj.current?.collapseAll();
    } else if (args.item.id === "expandall") {
      treegridObj.current?.expandAll();
    }
  };

  return (
    <div className="control-pane">
      <div className="control-section">
        <TreeGridComponent
          ref={treegridObj}
          dataSource={countries}
          childMapping="states"
          height="400"
          allowReordering={true}
          allowFiltering={true}
          allowSorting={true}
          filterSettings={{ type: "Menu", hierarchyMode: "Parent" }}
          gridLines='None'
          //allowRowDragAndDrop={true}
          selectionSettings={{type:'Multiple'}}
          contextMenuItems={contextMenuItems}
          contextMenuOpen={contextMenuOpen.bind(this)}
          contextMenuClick={contextMenuClick.bind(this)}
          
          //treeColumnIndex={1}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="name"
              headerText="Province"
              width="195"
              template={flagtemplate}
              filter={provinceFilter}
            ></ColumnDirective>
            
          </ColumnsDirective>
          <Inject services={[Filter, Sort, Reorder, Selection, ContextMenu, Toolbar, Page, Edit]} />
        </TreeGridComponent>
      </div>
    </div>
  );
}
export default TreeViewOptions;