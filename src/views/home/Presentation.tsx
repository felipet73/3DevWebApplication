import './card.component1.css';
import Carousel from './Carousel';
import CardLearn from './CardLearn';
import CarouselPubs from './CarouselPubs';
import { AppBarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useLayoutEffect } from 'react';



const Presetation = () => {

    
    
    

    return (
        <>
        <div id="total" className='control-pane'>
        <Carousel />
        <div className="hg-twirl">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</div>
        <div className='control-section card-control-section horizontal_card_layout'>
        
            <img src={`/assets/images/${'tt1'}.png`} alt="iPhone X" style={{ marginLeft: '30vw' }} />
            <div className="e-card-resize-container">
                <div className='' >


                    <div className="row card-layout">

                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="e-card e-card-horizontal e-product" id="horizontal_phone_product">
                                <div className="e-card-stacked">
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title"> Control de Proyectos</div>
                                            <div className="e-card-sub-title">Tecnico-Aministrativas</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content">
                                        Conjunto de Aplicaciones para el control integral de actividades en fase de Diseño-Ejecución-Comercialización-Mantenimiento,
                                        Trabajo Colaborativo - gerenciamiento de actividades
                                    </div>
                                    <div className="e-card-actions" style={{ justifyContent: 'center' }}>
                                        <button className="e-btn e-outline e-primary">
                                            <div className="e-size">Mas detalles .. </div>
                                        </button>
                                        <button className="e-btn e-outline e-primary">
                                            <div className="e-size">Ingresar </div>
                                        </button>
                                    </div>
                                </div>
                                <img src={`/assets/images/${'11'}.png`} alt="iPhone X" height="415px" style={{ width: '50%' }} />
                            </div>

                            <div className="e-card e-card-horizontal" id="horizontal_product" style={{ marginTop: '15px' }}>
                                <img src={`/assets/images/${'12'}.png`} style={{ height: '214px' }} alt="Camera" />
                                <div className='e-card-stacked'>
                                    <div className="e-card-header">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Aplicaciones IFC</div>
                                        </div>
                                    </div>
                                    <div className="e-card-content" style={{ height: '146px' }}>
                                        Operaciones con archivos IFC, que permiten entender su estructura
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div id="vertical_Sample">
                                <div className="e-card e-card-horizontal" id="horizontal_product">
                                    <div className='e-card-stacked'>
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title">Personalización</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content" style={{ height: '146px' }}>
                                            Accede a las herramientas que necesitas de acuerdo a tu área de acción y tu rol específico
                                        </div>
                                    </div>
                                    <img src={`/assets/images/${'13'}.png`} alt="Trimmer" />
                                </div>
                                <div className="e-card e-card-horizontal" id="horizontal_product">
                                    <img src={`/assets/images/${'14'}.png`} style={{ height: '214px' }} alt="Camera" />
                                    <div className='e-card-stacked'>
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title">Trabajo colaborativo</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content" style={{ height: '146px' }}>
                                            Genera información en equipo en tiempo real, lleva el control de los cambios ejecutados
                                        </div>
                                    </div>
                                </div>




                                <div className="e-card e-card-horizontal" id="horizontal_product" style={{ marginTop: '15px' }}>
                                    <div className='e-card-stacked'>
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title">Planifica actividades</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content" style={{ height: '146px' }}>
                                            Realiza todas tus tareas con planificacion en una líne de tiempo
                                        </div>
                                    </div>
                                    <img src={`/assets/images/${'15'}.png`} alt="Trimmer" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        {/* <CardsLearn/> */}
        <section className="cita">
        <CardLearn />
        </section>            
        <CarouselPubs />

        <br /><br /><br /><br /><br /><br />
        <img src={`/assets/images/${'tt5'}.png`} alt="iPhone X" style={{ marginLeft: '30vw' }} />
        <br /><br /><br /><br /><br /><br /><br /><hr />

        <div className="row">
            <div className="col-md-12">
                <AppBarComponent style={{ height: '80px' }}>
                    <span className="dense" style={{ marginLeft: '120px' }}>® OpenSource Project</span>
                    <div className="e-appbar-spacer"></div>
                    <ButtonComponent cssClass='e-inherit login'>Privacy policies</ButtonComponent>
                    <ButtonComponent cssClass='e-inherit login'>Confidentiality Agreement</ButtonComponent>
                </AppBarComponent>
            </div>
        </div>
        <br />

    </div>
    </>
    );
};
export default Presetation;


