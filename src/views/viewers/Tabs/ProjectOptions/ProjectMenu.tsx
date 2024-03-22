import { useState } from 'react';
import { HeaderPosition, OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import ProjectTimeLine from './ProjectTimeLine';
import ProjectDocResume from './ProjectDocResume';
import ProjectInformation from './ProjectInformation';


const ProjectMenu = () => {

    const [overflow, setOverflow] = useState<OverflowMode>("Scrollable");
    const [headerPlacement, setHeaderPlacement] = useState<HeaderPosition>("Top");

    
    let headertext: any;
    // Mapping Tab items Header property
    headertext = [{ text: "GeneralInformation" }, { text: "ExtendedInformation" }, { text: "TimeLine" }, { text: "DocResume" }, { text: "" }, { text: "" }, { text: "" },
    { text: "" }];
    return (
        <div className='control-pane'>
            <div className='control-section tab-control-section row'>
                <div className='col-lg-12 control-section'>
                    <div className='e-sample-resize-container'>
                        {/* Render the Tab Component */}
                        <TabComponent cssClass='responsive-mode' heightAdjustMode='None' height='100%' width='auto' overflowMode={overflow} headerPlacement={headerPlacement} > 
                            <TabItemsDirective >
                                <TabItemDirective header={headertext[0]}
                                    content={ProjectInformation} />

                                <TabItemDirective header={headertext[1]}
                                    content={'Project'} />

                                <TabItemDirective header={headertext[2]}
                                    content={ProjectTimeLine} />

                                <TabItemDirective header={headertext[3]}
                                    content={ProjectDocResume} />

                                <TabItemDirective header={headertext[4]}
                                    content={''} />

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
export default ProjectMenu;