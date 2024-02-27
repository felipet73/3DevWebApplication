import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from '@syncfusion/ej2-react-navigations';
import './carouselpubs.css';


const CarouselPubs = () => {

    const itemTemplate1 = () => {
        return (
            <div className="product-container">
                <div className="col-sm-5 component-container">
                    <div className="heading">San Francisco</div>
                    <div className="description">San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California.</div>
                    <a className="demo" href="https://en.wikipedia.org/wiki/San_Francisco" target="_blank">READ MORE</a>
                </div>
                <div className="col-sm-5 image-container">
                    <picture>
                        <img width="120%" height="100%" src={`/assets/images/${'6'}.png`} alt="San Francisco" />
                    </picture>
                </div>
            </div>
        );
    }
    const itemTemplate2 = () => {
        return (
            <div className="product-container">
                <div className="col-sm-5 component-container">
                    <div className="heading">London</div>
                    <div className="description">London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.</div>
                    <a className="demo" href="https://en.wikipedia.org/wiki/London" target="_blank">READ MORE</a>
                </div>
                <div className="col-sm-5 image-container">
                    <picture>
                        <img width="120%" height="100%" src={`/assets/images/${'6'}.png`} alt="London" />
                    </picture>
                </div>
            </div>
        );
    }
    const itemTemplate3 = () => {
        return (
            <div className="product-container">
                <div className="col-sm-5 component-container">
                    <div className="heading">Tokyo</div>
                    <div className="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.</div>
                    <a className="demo" href="https://en.wikipedia.org/wiki/Tokyo" target="_blank">READ MORE</a>
                </div>
                <div className="col-sm-5 image-container">
                    <picture>
                        <img width="120%" height="100%" src={`/assets/images/${'6'}.png`} alt="Tokyo" />
                    </picture>
                </div>
            </div>
        );
    }
    const itemTemplate4 = () => {
        return (
            <div className="product-container">
                <div className="col-sm-5 component-container">
                    <div className="heading">Moscow</div>
                    <div className="description">Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia's symbolic center.</div>
                    <a className="demo" href="https://en.wikipedia.org/wiki/Moscow" target="_blank">READ MORE</a>
                </div>
                <div className="col-sm-5 image-container">
                    <picture>
                        <img width="120%" height="100%" src={`/assets/images/${'6'}.png`} alt="Moscow" />
                    </picture>
                </div>
            </div>
        );
    }

    return (
        <div className='control-pane' style={{marginTop:'150px', marginBottom:'150px'}}>
            <div className='control-section keyboard-carousel-section'>
            <img src={`/assets/images/${'tt4'}.png`} alt="iPhone X" height="100%" style={{ width: '40%', marginLeft:'30vw' }} />
                <div className='control carousel-sample' style={{marginTop:'20px'}}>
                    {/* Render the Carousel Component */}
                    <CarouselComponent id='carousel' showPlayButton={true} autoPlay={false} cssClass="kb-carousel">
                        <CarouselItemsDirective>
                            <CarouselItemDirective template={itemTemplate1} />
                            <CarouselItemDirective template={itemTemplate2} />
                            <CarouselItemDirective template={itemTemplate3} />
                            <CarouselItemDirective template={itemTemplate4} />
                        </CarouselItemsDirective>
                    </CarouselComponent>
                </div>
            </div>
            
        </div>
    );
}
export default CarouselPubs;