
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Selection, Filter, Sort, Reorder, Inject, ITreeData, RowDD, ContextMenu, Toolbar, Page, Edit } from '@syncfusion/ej2-react-treegrid';
import { IFilter } from '@syncfusion/ej2-react-grids';
import { ContextMenuItemModel, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import './icons.css';
import { MenuEventArgs } from '@syncfusion/ej2-react-navigations'
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-react-inputs';
import { useGlobalStore } from '../../../../stores';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { encode as base64_encode} from 'base-64';
import AddNewModel from '../../../Erp/Modals/bimprojects/AddNewModel';
import NewProject from '../../../Erp/Modals/bimprojects/NewProject';
import OpenProject from '../../../Erp/Modals/bimprojects/OpenProject';
import { GlobalContext } from '../../../../context/GlobalContext';

const TreeProjectProperties = () => {
  
  const { viewerC } = React.useContext( GlobalContext );

  const setUrn = useGlobalStore(state => state.setUrn);
  const urn = useGlobalStore(state => state.urn);
  //const loading = useRef<boolean>(false);
  const [status, setStatus] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

    const selectedModel = useRef<any>(null);
    const selectedMenu = useGlobalStore(state => state.selectedMenu);
    const setSelectedMenu = useGlobalStore(state => state.setSelectedMenu);
    const [status1, setStatus1] = React.useState<boolean>(false);
    const [loading1, setLoading1] = React.useState<boolean>(true);

    const [status2, setStatus2] = React.useState<boolean>(false);
    //const actualProject = useBimProjectsStore( store=>store.actualProject )

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


   const gridTemplate = (props:any): any => {
    //console.log(props)
    var flagIconLocation = props.parentItem
      ? props.parentItem.name
      : props.name;
    return (
      <>
      <div style={{ display: "inline" }}>
        <div style={{ display: "contents"}}>
          <img
            className="e-image"
            src={"/assets/icons/" + props.type + ".png"}
            alt = {flagIconLocation}
            style={{ width:'25px', height:'25px', marginRight:'10px'  }}
          ></img>

          {props.name}      
          {props.type==='items' && 
          <DropDownButtonComponent items={items} iconCss='' style={{ position:'absolute', right:'5px', marginTop:'-5px' }} select={(e)=>{
            //console.log(e, props);
            if (e.item.properties.text === 'View-Open')
              setUrn(base64_encode(props.included.id));
            if (e.item.properties.text === 'Copy'){
              
              //console.log(img)
            }
            if (e.item.properties.text === 'Add to Project'){
              if (urn!==base64_encode(props.included.id)){
                setUrn(base64_encode(props.included.id));
                
                setLoading(true);
              }
              selectedModel.current=props.included;
              setStatus(true);
            }


          }}></DropDownButtonComponent>
          }
        </div>
        

      </div>
      </>
    );
  };

  
  let flagtemplate: any = gridTemplate;
  
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


  //const {access_token:token}:tokenInterface = useGlobalStore(state => state.token);
  //const setToken = useGlobalStore(state => state.setToken);
 

	


 

  const [ treProject, setTreProject] = React.useState([]);
  const auxTree:any = React.useRef([]);
 
	useEffect(	() => {
    
    
  
    
    
    const ObteinData = (async ()=>{

      viewerC.current?.getObjectTree(function (objTree:any) {
        console.log(objTree);
        objTree.enumNodeChildren(
            objTree.getRootId(),
            function (dbId:any) {
                //console.log(dbId);
                //var DBids = viewer.getSelection();                            
                var objSelected = dbId;

                const ObteinProps=(props:any) => {
                  console.log(props);
                  var it = viewerC.current.model.getData().instanceTree;
                  let hijos = props.properties.filter((data:any)=>data.displayName==='child').map((data:any)=>{

                    var nodeFinalName = it.getNodeName(data.displayValue)
                    
                    /*let hijos1:any=[];
                    viewerC.current.getProperties(data.displayValue, (props1:any) => {
                      hijos1 = props1.properties.filter((data1:any)=>data1.displayName==='child').map((data1:any)=>{
                        var nodeFinalName1 = it.getNodeName(data1.displayValue)
                        //console.log('name', nodeFinalName);
                        return ({
                          id:data1.displayValue,
                          name:nodeFinalName1,
                          type:'folders',
                          children:[]
                        })
                      });
                    });*/
                    /*viewerC.current.model.getPropertySet([6360,2842])?.then((propSet:any) => {
                      console.log(propSet);
                      // iterate, aggregate, etc
                    });*/
                    
                    //console.log('name', viewerC.current.model.getPropertySet([6360,2842]));
                    //console.log('name', nodeFinalName);
                    //console.log(prophijos)
                    return ({
                      id:data.displayValue,
                      name:nodeFinalName,
                      type:'family',
                      children:[]
                    })
                  }) ;
                  console.log('hijos', hijos);
                  auxTree.current=[...auxTree.current,{id:props.dbId,name:props.name, type:'category' ,children:hijos}]
                }

                viewerC.current.getProperties(objSelected, ObteinProps);
            })
        })      
        setTimeout(() => {
          
          //auxTree.current=[...auxTree.current,{id:props.dbId,name:props.name, type:'folders' ,children:hijos}]
          console.log(auxTree.current);
          var it = viewerC.current.model.getData().instanceTree;
          for (let i=0;i<auxTree.current.length;i++)
            for (let j=0;j<auxTree.current[i].children.length;j++){

              let prophijos:any=[];
              const ObteinProps1=(props1:any) => {
                console.log(props1)  
                prophijos = props1.properties.filter((data1:any)=>data1.displayName==='child').map((data1:any)=>{
                  var nodeFinalName1 = it.getNodeName(data1.displayValue)                  
                  return ({
                    id:data1.displayValue,
                    name:nodeFinalName1,
                    type:'type',
                    children:[]
                  })
                });
                console.log(prophijos)
                auxTree.current[i].children[j].children=prophijos;
                  
              }
   
              viewerC.current.getProperties(auxTree.current[i].children[j].id, ObteinProps1);
            }

          setTimeout(() => {
            setTreProject(auxTree.current);    
            setTimeout(() => {
              treegridObj.current?.collapseAll();  
            }, 600);

          }, 300);
          



        }, 800);
        
    })();
		//setIndicaRecarga(false);
	}, [])





  useEffect(() => {
    /*if (selectedMenu==='NewProject') {
      setStatus1(true)
      setSelectedMenu('');
    }
    if (selectedMenu==='OpenProject') {
      setStatus2(true)
      setSelectedMenu('');
    }*/
    
  }, [selectedMenu])




  return (
    <div className="control-pane">
      {status && <AddNewModel selectedModel={selectedModel} status={status} setStatus={setStatus} loading={loading} setLoading={setLoading}/>}
      {status1 && <NewProject status={status1} setStatus={setStatus1} loading={loading1} setLoading={setLoading1}/>}
      {status2 && <OpenProject status={status2} setStatus={setStatus2} />}
      <div className="control-section">
        
        <TreeGridComponent
          ref={treegridObj}
          dataSource={treProject}
          childMapping="children"
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
          rowSelected={(e:any)=>{
            console.log(e)
            viewerC.current?.select(e.data.id);
            viewerC.current?.fitToView(e.data.id);  
            
          }}

          //treeColumnIndex={1}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="name"
              headerText="Properties"
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
export default TreeProjectProperties;