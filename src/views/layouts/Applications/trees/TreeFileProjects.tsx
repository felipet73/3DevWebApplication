import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from "react";
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import './icons.css';
//import * as dataSource from './icons-data.json';
import { ProjectInterface, useBimProjectsStore, useGlobalStore } from '../../../../stores';
import { useForm } from '../../../../customhooks/useForm';
import Axios from '../../../../config/axios';

const dataFolders ={
  iconData:   [
     {
         nodeId: "01", nodeText: "My Projects", icon: "folder",
         nodeChild: []
     },
     {
         nodeId: "02", nodeText: 'New Folder', icon: 'folder',
         nodeChild: []
     },
 ]
}

interface Props{
  selected:any;
  setSelected:any;
  projects:any;
}

const TreeFileProjects = ({selected, setSelected, projects}:Props) => {

  const [data, setData] = React.useState<any>(dataFolders);
  //const data = dataFolders as any;
  //const [selected, setSelected] = React.useState({});
  //const loggedUser = useGlobalStore( state => state.loggedUser);

  const fields: Object = { dataSource: data.iconData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image', type:'icon' };

  //const fields: Object = { dataSource: data.templateData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

  const dataProjects = useBimProjectsStore(store => store.projects);
  
  //const { formData, onChange } = useForm({});
  

  useEffect(() => {
    //{ "nodeId": "01-01", "nodeText": "Gouttes.mp3", "icon": "audio" }

    const getProjects = (async () =>{
            
        //console.log('FormDATA ',formData);
        try {
            await Axios.get("projects/", {
              headers:{
                Authorization:`Bearer ${localStorage.getItem("Token3Dev")?.replaceAll('"','')}`
              }
            }).then(response => {
                console.log('Response ',response.data);
                //response.data.projects?.forEach( (item:any) =>{} );
                //setProjects1(response.data.projects.map((x:any)=>([...x])));
                const agrega = response.data.projects.map((x:any)=>({ nodeId: x.id, nodeText: x.name, icon: 'project' }));
                setData( {
                  iconData:   [
                     {
                         nodeId: "01", nodeText: "My Projects", icon: "folder",
                         nodeChild: agrega
                     },
                     {
                         nodeId: "02", nodeText: 'New Folder', icon: 'folder',
                         nodeChild: []
                     },
                 ]
                });

                
                projects.current=[...response.data.projects];
                console.log('Projects*****', response.data.projects);
                

            }).catch(response => {
                //toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n '+response.response?.data?.error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
                console.log('Error ', response.response.data.error);
            });        
        } catch (error) {
            //toastObj.show({ title: 'Atention!', content: 'A problem has been occurred:\n '+error, cssClass: 'e-toast-danger', icon: 'e-error toast-icons' });
            console.log('Response error catch ', error);
        }
    })();

  }, [])
  

    const cssClass: string = "template-tree";
    const nodeTemplate = (data: any) => {
      //console.log(data)
      return (
        <div>
          <div className="treeviewdiv">
            <div className="textcontent">
            <img
            className="e-image"
            src={"/assets/icons/" + (data.icon === 'folder' ? 'folders':'project') + ".png"}
            alt = {'folders'}
            style={{ width:'25px', height:'25px', marginRight:'10px'  }}
          ></img>

              <span className="treeName">{data.nodeText}</span>
            </div>
            
          </div>
        </div>
      )
    };
  


  return (
 
          <TreeViewComponent id="treeview" nodeTemplate={nodeTemplate as any} fields={fields} sortOrder='Ascending' style={{ height:'300px', overflow:'scroll' }} nodeSelecting={(e:any)=>{
            console.log(e)
            console.log(data?.iconData[0]?.nodeChild?.find((x:any)=>x.nodeId===e.nodeData.id))
            console.log(data?.iconData[0])
            //setSelected(e.nodeData);
            setSelected(data?.iconData[0]?.nodeChild?.find((x:any)=>x.nodeId===e.nodeData.id));
            
          }}/>
  )
}
export default TreeFileProjects;