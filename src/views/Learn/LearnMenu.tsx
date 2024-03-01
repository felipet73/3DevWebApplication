import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { PropertyPane } from './property-pane';
import { HeaderPosition, OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import './tab.component.css';
import Authors from './Authors';

const LearnMenu = () => {

    const [overflow, setOverflow] = useState<OverflowMode>("Scrollable");
    const [headerPlacement, setHeaderPlacement] = useState<HeaderPosition>("Top");

    // Change event funtion for DropDownList component   
    const changeOrientationMode = (e: ChangeEventArgs): void => {
        setHeaderPlacement(e.itemData.text as HeaderPosition);
    }

    // Change event funtion for DropDownList component   
    const changeOverflowMode = (e: ChangeEventArgs): void => {
        setOverflow(e.itemData.text as OverflowMode);
    }

    // Mapping DropDownList dataSource property
    const oData: { [key: string]: Object }[] = [
        { 'value': 'top', 'text': 'Top' }, { 'value': 'bottom', 'text': 'Bottom' },
        { 'value': 'left', 'text': 'Left' }, { 'value': 'right', 'text': 'Right' }
    ];

    // Mapping DropDownList dataSource property
    const mData: { [key: string]: Object }[] = [
        { 'value': 'scrollable', 'text': 'Scrollable' }, { 'value': 'popup', 'text': 'Popup' }
    ];

    // Mapping DropDownList fields property
    const fields: object = { text: 'text', value: 'value' };

    // Mapping DropDownList value property
    const mVal: string = 'scrollable';

    // Mapping DropDownList value property
    const orientVal: string = 'top';

    let headertext: any;
    // Mapping Tab items Header property
    headertext = [{ text: "My Learn" }, { text: "Courses" }, { text: "Authors" }, { text: "My Courses" }, { text: "" },
    { text: "" }, { text: "" }, { text: "" }];
    return (
        <div className='control-pane'>
            <div className='control-section tab-control-section row'>
                <div className='col-lg-12 control-section'>
                    <div className='e-sample-resize-container'>
                        {/* Render the Tab Component */}
                        <TabComponent cssClass='responsive-mode' heightAdjustMode='None' height='250px' width='auto' overflowMode={overflow} headerPlacement={headerPlacement} > 
                            <TabItemsDirective >
                                <TabItemDirective header={headertext[0]}
                                    content={Authors} />

                                <TabItemDirective header={headertext[1]}
                                    content={Authors} />

                                <TabItemDirective header={headertext[2]}
                                    content={Authors} />

                                <TabItemDirective header={headertext[3]}
                                    content={Authors} />
                                    
                                <TabItemDirective header={headertext[4]}
                                    content={'Xamarin is a San Francisco, California based software company created in May ' +
                                        '2011 by the engineers that created Mono, Mono for Android and MonoTouch that are ' +
                                        'cross-platform implementations of the Common Language Infrastructure (CLI) and Common ' +
                                        'Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers ' +
                                        'can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces ' +
                                        'and share code across multiple platforms. Xamarin has over 1 million developers in more ' +
                                        'than 120 countries around the World as of May 2015.'} />

                                <TabItemDirective header={headertext[5]}
                                    content={'ASP.NET is an open-source server-side web application framework designed for web ' +
                                        'development to produce dynamic web pages. It was developed by Microsoft to allow programmers ' +
                                        'to build dynamic web sites, web applications and web services. It was first released in January ' +
                                        '2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft\'\s Active Server ' +
                                        'Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
                                        'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension ' +
                                        'framework allows ASP.NET components to process SOAP messages.'} />

                                <TabItemDirective header={headertext[6]}
                                    content={'The ASP.NET MVC is a web application framework developed by Microsoft, which implements' +
                                        ' the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web ' +
                                        'Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web ' +
                                        'API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6. ' +
                                        'The project is called ASP.NET vNext.'} />

                                <TabItemDirective header={headertext[7]}
                                    content={'JavaScript (JS) is an interpreted computer programming language. It was originally ' +
                                        'implemented as part of web browsers so that client-side scripts could interact with the ' +
                                        'user, control the browser, communicate asynchronously, and alter the document content that ' +
                                        'was displayed. More recently, however, it has become common in both game development ' +
                                        'and the creation of desktop applications.'} />
                            </TabItemsDirective>
                        </TabComponent>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default LearnMenu;