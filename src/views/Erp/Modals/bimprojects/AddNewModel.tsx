import * as React from 'react';
import { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import './draggable.css';
import { GlobalContext } from '../../../../context/GlobalContext';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Loading from '../../../layouts/common/Loading';
import Axios from '../../../../config/axios';
import { ProjectInterface, useBimProjectsStore } from '../../../../stores';

interface Props {
    selectedModel:React.MutableRefObject<any>;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewModel = ({ selectedModel, status, setStatus, loading, setLoading }: Props) => {

    
    const { viewerC, actualViewables } = useContext( GlobalContext );
    const textareaObj = useRef<TextBoxComponent>(null);
    //const { formData, onChange } = useForm({});
    //const { name, description } = formData;
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const name1 = useRef<string>('');
    const description1 = useRef<string>('');

    const actualProyect = useBimProjectsStore(store=> store.actualProject);
    const setActualProyect = useBimProjectsStore(store=> store.setActualProject);
    const setProjects = useBimProjectsStore(store => store.setProjects);
    const projects = useBimProjectsStore(store => store.projects);
    const viewables = useBimProjectsStore(store => store.viewables);
    const setViewables = useBimProjectsStore(store => store.setViewables);

    const onChange = (e:any)=>{
        setName(e.target.value);
        name1.current=e.target.value;
        //console.log(e.target.value)
    }
    const onChangeDes = (e:any)=>{
        setDescription(e.target.value);
        description1.current=e.target.value;
        //console.log(e.target.value)
    }

    let animationSettings: AnimationSettingsModel;
    //let buttonEle: HTMLButtonElement;
    //const [status, setStatus] = useState<boolean>(true);
    //const [display, setDisplay] = useState<string>('none');

    const [img, setImg] = useState<string>('');
    const img1 = useRef<any>(null);
    animationSettings = { effect: 'None' };

    /*const buttonClick = (): void => {
        setStatus(true);
    }*/
    const dialogClose = (): void => {setStatus(false);}
    const dialogOpen = (): void => {setStatus(true);}
    
    useLayoutEffect(() => {
        if (loading){
            setTimeout(() => {
                const img = viewerC.current.canvas.toDataURL('image/png')
                setImg(img);  
                img1.current=img;
                setLoading(false);
            }, 6000);
        }else{
            const img = viewerC.current.canvas.toDataURL('image/png')
            img1.current=img;
            setImg(img);                        
        }
        //window.location = viewerC.current.canvas.toDataURL('image/png')
        //document.write('<img src="'+img+'"/>');
    }, [])

    function dataURItoBlob(dataURI:any) {
        if(typeof dataURI !== 'string'){
            throw new Error('Invalid argument: dataURI must be a string');
        }
        dataURI = dataURI.split(',');
        var type = dataURI[0].split(':')[1].split(';')[0],
            byteString = atob(dataURI[1]),
            byteStringLength = byteString.length,
            arrayBuffer = new ArrayBuffer(byteStringLength),
            intArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteStringLength; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([intArray], {
            type: type
        });
    }
    
    /*const ObteinParent = (views:any) =>{        
        if (views.parent.type==='folder')
            ObteinParent(views.parent);
        return views.parent.data.name;

    }*/
    function unflatten(items:any) {
        var tree = [];
        var mappedArr:any = {};
            
        // Build a hash table and map items to objects
        items.forEach(function(item:any) {
          var id = item.id;
          if (!mappedArr.hasOwnProperty(id)) { // in case of duplicates
            mappedArr[id] = item; // the extracted id as key, and the item as value
            mappedArr[id].children = [];  // under each item, add a key "children" with an empty array as value
          }
        })
        
        // Loop over hash table
        for (var id in mappedArr) { 
          if (mappedArr.hasOwnProperty(id)) {
            let mappedElem = mappedArr[id];
            
            // If the element is not at the root level, add it to its parent array of children. Note this will continue till we have only root level elements left
            if (mappedElem.Parent) { 
              var parentId = mappedElem.Parent;
              mappedArr[parentId].children.push(mappedElem); 
            }
            
            // If the element is at the root level, directly push to the tree
            else { 
              tree.push(mappedElem);
            } 
          }
        }
        
        return tree;
        
      }
      


    const ObteinTreeViewable = (views:any):any =>{
        let names:Object[]=[];
        let tree:Object[]=[];
        for (let i=0;i<views.length;i++){
            names=[...names, {name:views[i]?.data.name, data:views[i]?.data, id:views[i]?.id, Parent:views[i].parent.id}];
            let padre:any=views[i].parent;
            while(padre){                
                if (!tree.find( (x:any) => x.id===padre.id ))
                    tree=[...tree, {name:padre?.data.name || padre?.data.type, data:padre?.data, id:padre?.id, Parent: padre?.parent?.id || ''}];
                padre=padre?.parent;
            }
        }
        console.log('Names',names);
        console.log('parents',tree);
        tree=[...tree,...names];
        return tree;
        //let treeDef:any=[];
        
        //var result:any = unflatten(tree);   
        
        
        //console.log('result',result)
        //return result;
        //let root:any = tree.find( (x:any) => x.parentId==='' );
        //treeDef[0]={name:root?.data?.type, data:root?.data, id:root?.id, parentId: ''};
        //let childs:any=tree.filter( (x:any) => x.parentId===root?.id );

        //while(child){
            //if (!tree.find( (x:any) => x.id===padre.id ))
                //tree=[...tree, {name:padre?.data.name, data:padre?.data, id:padre?.id, parentId: padre?.parent?.id || ''}];
            //padre=padre?.parent;
        //}
    


    }


    const saveModel= async ()=> {
        console.log(selectedModel)
        
        console.log(actualViewables.current);
        let tree = ObteinTreeViewable(actualViewables.current[0]);
        
        //return;
        //console.log(img);
        //console.log(img1.current);
        console.log('name', name1.current)
        console.log('description', description1.current)
        
        /*let formdata = new FormData();
        formdata.append('file',img1.current);
        console.log(formdata);*/
        if (!actualProyect){
            return;
        }
        if (name1.current===''){
            return;
        }
        
        const formdata = new FormData();
        formdata.append("file", dataURItoBlob(img1.current), "postman-cloud:///1eee0fa4-977f-4c30-b33d-e8784f5171fa");

        try {
            
            let { data } = await Axios.post("upload/single/models", formdata, {headers: {'Content-Type': `multipart/form-data`}})
            console.log(data);

            const NewModel:any={
                //id:string;
                name:name1.current,
                dateCreated:new Date(),
                file:selectedModel.current.attributes.name,
                description:description1.current,
                image:data?.fileName,
                urn:selectedModel.current.id,
                main:actualProyect?.models?.length===0 ? true:false,
                open:true,
                defaultView:'',
            }

            data = await Axios.post("models/", NewModel, {headers:{Authorization:`Bearer ${localStorage.getItem("Token3Dev")?.replaceAll('"','')}`}})
            console.log('Model', data.data);
            let NProy:any;
            let NProy1:any;
            if (actualProyect && actualProyect?.models?.length!>0){
                NProy = {
                    ...actualProyect,
                    models:[...actualProyect?.models!.map((dt:any)=>dt.id)!,data.data.id]
                }
                NProy1 = {
                    ...actualProyect,
                    models:[...actualProyect?.models!,data.data]
                }
    
            }else{
                NProy = {
                    ...actualProyect,
                    models:[data.data.id]
                }
                NProy1 = {
                    ...actualProyect,
                    models:[data.data]
                }                
            }
            setViewables([...viewables,{ ModelId:data.data.id, Viewables: tree}]);
            data = await Axios.post("projects/update", NProy, {headers:{Authorization:`Bearer ${localStorage.getItem("Token3Dev")?.replaceAll('"','')}`}})
            console.log('Project update', data.data);
            setActualProyect(NProy1 as ProjectInterface);
            setProjects([...projects.filter((st:any)=>st.id!==actualProyect?.id),NProy1] as ProjectInterface[]);
            
        } catch (error) {
            console.log('Response error catch ', error);
        }
        setStatus(false);
        /*const NewModel:ModelInterface={
            //id:string;
            name:name;
            dateCreated:new Date();
            file:selectedModel.current.attributes.name;
            descripcion:description;
            image:string;
            urn:selectedModel.current.id;
        }*/

        
        
        /*export interface ProjectInterface {
            id:string;
            name:string;
            dateCreated:Date;
            descripcion:string;
            image:string;
            models:ModelInterface[] | [];
        }*/

    }


    const content1 = () => {
        return(
            <>
            <div className='control-pane'>
                <div className='control-section card-control-section horizontal_card_layout'>
                    <div className="e-card-resize-container">
                        <div className="e-card e-card-horizontal" id="horizontal_product">
                            <div className='e-card-stacked'>
                                <div className="e-card-header">
                                    <div className="e-card-header-caption">
                                        <div className="e-card-header-title">{selectedModel.current?.attributes?.name}</div>
                                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                            <TextBoxComponent value={name} name="mane" onChange={onChange} placeholder="Name" floatLabelType="Auto" />
                                            <TextBoxComponent value={description} name="description" onChange={onChangeDes} id='default' multiline={true} floatLabelType={'Auto'} enabled={true} readonly={false} placeholder="Enter description" ref={textareaObj}>
                                            </TextBoxComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <ButtonComponent onClick={saveModel} style={{ marginLeft: '50%' }}>Save</ButtonComponent>
                            <ButtonComponent onClick={dialogClose} style={{ marginLeft: '25px' }}>Cancel</ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }


    return (
        <DialogComponent id="dialogDraggable" header="Adding new model into the Project!!!" isModal={true} showCloseIcon={true} allowDragging={true} animationSettings={animationSettings} width="450px" target="#default-ribbonPlaceHolder" visible={status} open={dialogOpen} close={dialogClose}
        content={content1}
        >
            {!loading &&
                <div className='control-pane' style={{ marginBottom: '-40px' }}>
                <div className='control-section card-control-section horizontal_card_layout'>
                    <div className="e-card-resize-container">
                        <div className="e-card e-card-horizontal" id="horizontal_product">
                            <img src={img} style={{ height: '100%', width: '100%' }} alt="Camera" />
                        </div>
                    </div>
                </div>
                </div>
            }
            {loading &&
                <div className='control-pane' style={{ marginBottom: '-40px' }}>
                <div className='control-section card-control-section horizontal_card_layout'>
                    <div className="e-card-resize-container">
                        <div className="e-card e-card-horizontal" id="horizontal_product">
                            <Loading/>
                        </div>
                    </div>
                </div>
                </div>
            }

        </DialogComponent>
    );
}
export default AddNewModel;