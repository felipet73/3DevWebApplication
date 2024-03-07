
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useGlobalStore } from '../../stores';

interface PropsCardErp{
    name:string;
    type:string;
    description:string;
}

const CardErp = ({name, type, description}:PropsCardErp) => {

    const setOption = useGlobalStore(state => state.setOption);

    return (
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div className="e-card profile" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                <div className="e-card-header">
                    <img src={`/assets/images/${'6'}.png`} alt="" style={{ width:'70%', borderRadius:'40%' }}/>
                </div>
                <div className="e-card-header">
                    <div className="e-card-header-caption center">
                        <div className="e-card-header-title">{name}</div>
                        <div className="e-card-sub-title">{type}</div>
                    </div>
                </div>
                <div className="e-card-separator"></div>
                <div className="e-card-content">{description}</div>
                <div className="e-card-actions center">
                    <ButtonComponent onClick={()=>setOption('Viewer')}>Ingresar</ButtonComponent>

                </div>
            </div>
        </div>
    )

}


const ErpHome = () => {

    return (
        <div className='control-pane'>
            <div className='control-section card-control-section vertical_card_layout'>
                <div className="e-card-resize-container">

                    <div className='row'>
                        <div className="row card-layout">

                        <CardErp
                        name="BIM Project Control"
                        type="Tecnical"
                        description="Application to control projects usign BIM metodology"
                        />
                        <CardErp
                        name=""
                        type=""
                        description=""
                        />




                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default ErpHome;