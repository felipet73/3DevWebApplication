
import './carousel.css';
import * as React from 'react';
import { useEffect } from 'react';
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


const Carousel = () => {
    const itemTemplate1 = () => {
        return (<figure className="img-container">
                {/* <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/cardinal.png" alt="cardinal" style={{ height: "100%", width: "100%" }}/> */}
                <img src={"/assets/images/1.png"} alt="2" style={{ height: "100%", width: "100%", borderRadius:'40px' }}/>
            </figure>);
    };
    const itemTemplate2 = () => {
        return (<figure className="img-container">
                {/* <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/hunei.png" alt="hunei" style={{ height: "100%", width: "100%" }}/> */}
                <img src={"/assets/images/2.png"} alt="3" style={{ height: "100%", width: "100%", borderRadius:'40px' }}/>
            </figure>);
    };
    const itemTemplate3 = () => {
        return (<figure className="img-container">
                {/* <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/costa-rica.png" alt="costa-rica" style={{ height: "100%", width: "100%" }}/> */}
                <img src={"/assets/images/3.png"} alt="4" style={{ height: "100%", width: "100%", borderRadius:'40px' }}/>
            </figure>);
    };
    const itemTemplate4 = () => {
        return (<figure className="img-container">
                {/* <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/kaohsiung.png" alt="kaohsiung" style={{ height: "100%", width: "100%" }}/> */}
                <img src={"/assets/images/4.png"} alt="5" style={{ height: "100%", width: "100%", borderRadius:'40px' }}/>
            </figure>);
    };
    const itemTemplate5 = () => {
        return (<figure className="img-container">
                {/* <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/bee-eater.png" alt="bee-eater" style={{ height: "100%", width: "100%" }}/> */}
                <img src={"/assets/images/5.png"} alt="6" style={{ height: "100%", width: "100%", borderRadius:'40px' }}/>
            </figure>);
    };
    const previousButtonTemplate = (props:any) => {
        return (<ButtonComponent className="e-btn" cssClass="e-flat e-round nav-btn" title={props.type}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                    <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
                </svg>
            </ButtonComponent>);
    };
    const nextButtonTemplate = (props:any) => {
        return (<ButtonComponent className="e-btn" cssClass="e-flat e-round nav-btn" title={props.type}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                    <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
                </svg>
            </ButtonComponent>);
    };
    const indicatorTemplate = (props:any) => {
        const birds = ['1', '2', '3', '4', '5'];
        return (<div className="indicator">
                {/* <img src={`https://ej2.syncfusion.com/react/demos/src/carousel/images/${birds[props.index]}.png`} alt="image" style={{ height: "100%", width: "100%" }}/> */}
                <img src={`/assets/images/${birds[props.index]}.png`} alt="cardinal" style={{ height: "100%", width: "100%" }}/>
            </div>);
    };
    return (<div className='control-pane'>
            <div className='control-section template-carousel-section'>
                <div className='control carousel-sample'>
                    {/* Render the Carousel Component */}
                    <CarouselComponent cssClass="templateCarousel" animationEffect="Fade" buttonsVisibility="Visible" indicatorsTemplate={indicatorTemplate} previousButtonTemplate={previousButtonTemplate} nextButtonTemplate={nextButtonTemplate}>
                        <CarouselItemsDirective>
                            <CarouselItemDirective template={itemTemplate1} interval={3000}/>
                            <CarouselItemDirective template={itemTemplate2} interval={3000}/>
                            <CarouselItemDirective template={itemTemplate3} interval={3000}/>
                            <CarouselItemDirective template={itemTemplate4} interval={3000}/>
                            <CarouselItemDirective template={itemTemplate5} interval={3000}/>
                        </CarouselItemsDirective>
                    </CarouselComponent>
                </div>
            </div>
        </div>);
};
export default Carousel;

