import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import TreeViewOptions from '../layouts/Applications/trees/TreeViewOptions';
//import './card.component.css';


interface PrpsCardGenerator{
    image:string;
    title: string;
    subtitle: string;
    description:string;
}

const CardGenerator = () => {

    return (
        <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
            <div className="e-card profile" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                <div className="e-card-header">
                    {/* <div className="e-card-header-image e-card-corner"></div> */}
                    <img src={`/assets/images/${'14'}.png`} alt="" style={{ width:'90%' }}/>
                </div>
                <div className="e-card-header">
                    <div className="e-card-header-caption center">
                        <div className="e-card-header-title">Npmbre de Proyecto</div>
                        <div className="e-card-sub-title">Breve description</div>
                    </div>
                </div>
                <div className="e-card-separator"></div>
                <div className="e-card-content">Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.</div>
                <div className="e-card-actions center">

                    {/* <button className="e-card-btn" title="E-mail">
                        <span className="e-mail-icon cb-icons "></span>
                    </button>
                    <button className="e-card-btn" title="Google+">
                        <span className="e-google-icon cb-icons "></span>
                    </button>
                    <button className="e-card-btn" title="Facebook">
                        <span className="e-fb-icon cb-icons "></span>
                    </button>
                    <button className="e-card-btn" title="Tweets">
                        <span className="e-tweet-icon cb-icons "></span>
                    </button> */}
                </div>
            </div>
        </div>
    )

}



const GeneratorHome = () => {

    return (
        <div className='control-pane'>
            <div className='control-section card-control-section vertical_card_layout'>
                <div className="e-card-resize-container">

                    <div className='row'>
                        <div className="row card-layout">

                        
                            <CardGenerator/>
                            <CardGenerator/>
                            <CardGenerator/>
                            <CardGenerator/>
                            <CardGenerator/>
                            

                    





                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default GeneratorHome;