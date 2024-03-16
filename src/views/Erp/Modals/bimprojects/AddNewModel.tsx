import * as React from 'react';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import './draggable.css';
import { GlobalContext } from '../../../../context/GlobalContext';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Loading from '../../../layouts/common/Loading';
import { useForm } from '../../../../customhooks/useForm';
import Axios from '../../../../config/axios';
import { ModelInterface, ProjectInterface, useBimProjectsStore } from '../../../../stores';
interface Props {
    selectedModel:React.MutableRefObject<any>;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewModel = ({ selectedModel, status, setStatus, loading, setLoading }: Props) => {

    const { viewerC } = React.useContext(GlobalContext);
    const textareaObj = useRef<TextBoxComponent>(null);
    //const { formData, onChange } = useForm({});
    //const { name, description } = formData;
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const name1 = useRef<string>('');
    const description1 = useRef<string>('');

    const actualProyect = useBimProjectsStore(store=> store.actualProject);
    const setActualProyect = useBimProjectsStore(store=> store.setActualProject);
    
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

    const buttonClick = (): void => {
        setStatus(true);
    }
    const dialogClose = (): void => {
        setStatus(false);
        //setDisplay('inline-block');
    }
    const dialogOpen = (): void => {
        setStatus(true);
        //setDisplay('none');
    }

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
    

    const saveModel= async ()=> {
        console.log(selectedModel)
        //console.log(img);
        //console.log(img1.current);
        console.log('name', name1.current)
        console.log('description', description1.current)
        //return;
        /*let formdata = new FormData();
        formdata.append('file',img1.current);
        console.log(formdata);*/
        
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
            }

            data = await Axios.post("models/", NewModel, {headers:{Authorization:`Bearer ${localStorage.getItem("Token3Dev")?.replaceAll('"','')}`}})
            console.log('Model', data.data);
            let NProy:any;
            let NProy1:any;
            if (actualProyect && actualProyect?.models?.length>0){
                NProy = {
                    ...actualProyect,
                    models:[actualProyect?.models!.map((dt:any)=>dt.id)!,data.data.id]
                }
                NProy1 = {
                    ...actualProyect,
                    models:[...actualProyect?.models,data.data]
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

            data = await Axios.post("projects/update", NProy, {headers:{Authorization:`Bearer ${localStorage.getItem("Token3Dev")?.replaceAll('"','')}`}})
            console.log('Project update', data.data);


            setActualProyect(NProy1 as ProjectInterface);

        } catch (error) {
            console.log('Response error catch ', error);
        }
        
        




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