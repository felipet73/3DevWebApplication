import * as React from 'react';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import './draggable.css';
import { GlobalContext } from '../../../../context/GlobalContext';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Loading from '../../../layouts/common/Loading';
interface Props {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewModel = ({ status, setStatus, loading, setLoading }: Props) => {

    const { viewerC } = React.useContext(GlobalContext);
    const textareaObj = useRef<TextBoxComponent>(null);

    let animationSettings: AnimationSettingsModel;
    //let buttonEle: HTMLButtonElement;
    //const [status, setStatus] = useState<boolean>(true);
    //const [display, setDisplay] = useState<string>('none');

    const [img, setImg] = useState<string>('');

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
                setLoading(false);
            }, 6000);
        }else{
            const img = viewerC.current.canvas.toDataURL('image/png')
            setImg(img);                        
        }
        //window.location = viewerC.current.canvas.toDataURL('image/png')
        //document.write('<img src="'+img+'"/>');
    }, [])


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
                                        <div className="e-card-header-title">{'fileName'}</div>
                                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                            <TextBoxComponent placeholder="Name" floatLabelType="Auto" />
                                            <TextBoxComponent id='default' multiline={true} floatLabelType={'Auto'} enabled={true} readonly={false} placeholder="Enter description" ref={textareaObj}>
                                            </TextBoxComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12" style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <ButtonComponent onClick={() => {dialogClose() }} style={{ marginLeft: '50%' }}>Save</ButtonComponent>
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