import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

import './default.css';
import GeneratorHome from '../../CodeGenerator/GeneratorHome';
import LearnMenu from '../../Learn/LearnMenu';
import GeneratorMenu from '../../CodeGenerator/GeneratorMenu';
import ErpMenu from '../../Erp/ErpMenu';
import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import SideOptions from './SideOptions';
import { useGlobalStore, useMenuStore, useOptionModelStore } from '../../../stores';
import { RefrescarV, ViewerSc } from '../../viewers/ViewerSc';
import ViewerMenu from '../../viewers/VieverMenu';
import { dataSource } from './Lists/listData';
import { FileMenuEventArgs, LauncherClickEventArgs } from '@syncfusion/ej2-react-ribbon';
import { MenuBimProjects } from './Menus/MenuBimProjects';

/*interface Prps {
    option: number;
}*/

const LayoutAppplications = () => {

    const option = useGlobalStore(state => state.option);
    const SetOptionModel = useOptionModelStore(state => state.setOptionModel);
    const [widthVw, setWidthVw] = React.useState(700);
    const renderizar = React.useRef(true);
    const setOption = useGlobalStore(state => state.setOption);

    let panelR = useRef<SplitterComponent>(null);

    let toastInstance = useRef<ToastComponent>(null);

    /*const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    {
        text: "Save as", iconCss: "e-icons e-save", id: "save",
        items: [
            { text: "Microsoft Word (.docx)", iconCss: "sf-icon-word", id: "newword" },
            { text: "Microsoft Word 97-2003(.doc)", iconCss: "sf-icon-word", id: "oldword" },
            { text: "Download as PDF", iconCss: "e-icons e-export-pdf", id: "pdf" }]
    }]*/

    /*const [fileOptions, setFileOptions] = React.useState<MenuItemModel[]>([{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    {
        text: "Save as", iconCss: "e-icons e-save", id: "save",
        items: [
            { text: "Microsoft Word (.docx)", iconCss: "sf-icon-word", id: "newword" },
            { text: "Microsoft Word 97-2003(.doc)", iconCss: "sf-icon-word", id: "oldword" },
            { text: "Download as PDF", iconCss: "e-icons e-export-pdf", id: "pdf" }]
    }]);*/


    const hPaneContent1 = () => {
        return (
            <div className="splitter-content">
                
                <SideOptions />
                
                
            </div>
        );
    };

    const hPaneContent3 = () => {
        return (
            <div className="splitter-content">
                
                
                
                
            </div>
        );
    };

    const hPaneContent2 = () => {
        return (
            <>
                <div className="splitter-content" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    {option === 'MenuGenerator' && <><GeneratorMenu /></>}
                    {option === 'MenuErp' && <><ErpMenu /></>}
                    {option === 'Viewer' && <>

                        {/* <SplitterComponent separatorSize={4} orientation={'Vertical'} resizeStop={(e) => {
                            }} beforeCollapse={(e) => {
                            }} beforeExpand={(e) => {
                            }}>
                                <PanesDirective>
                                    <PaneDirective size="50%" min="60px" content={ViewerMenu} collapsible={true} />
                                    <PaneDirective size="50%" min="60px" content={()=><h1>Hello</h1>} collapsible={true} />
                                </PanesDirective>
                            </SplitterComponent>  */}

                        <ViewerMenu />

                    </>}
                </div>
                {/* <div style={{ position:'absolute', width: widthVw panelR.current!.paneSettings[1].size, height:'100%'}}>
                {option === 'Viewer' && <><ViewerSc /></>}
            </div> */}
            </>
        );
    };

    const updateContent = (args: any) => {
        toastInstance.current!.show({ content: "Last clicked item is " + args });
        if (args === 'Cut') {
            setOption('Viewer');
            renderizar.current = true;
            //setFileOptions([]);
        }
        if (args === 'View -> Budget excel') {
            SetOptionModel('TableBudget');
        }
        if (args === 'View -> Gantt') {
            SetOptionModel('Gantt');
        }
        if (args === 'View -> Budget') {
            SetOptionModel('TableBudget1');
        }

    }

    const fileSelect = (args: FileMenuEventArgs) => {
        if (args.item.id === "newword" || args.item.id === "oldword" || args.item.id === "pdf") {
            updateContent("File -> Save as -> " + args.item.text);
        }
        else {
            updateContent("File -> " + args.item.text);
        }
    }

    const launchClick = (args: LauncherClickEventArgs) => {

        if (args.groupId == "clipboard") {
            updateContent("Clipboard Launcher Icon");
        }
        else if (args.groupId == "illustration") {
            updateContent("Illustration Launcher Icon");
        }
        else if (args.groupId == "header_footer") {
            updateContent("Header & Footer Launcher Icon");
        }
    }


    useEffect(() => {
        console.log('Panel', panelR.current)
    }, [])


    const ChildPanel = () => {
        return (

            <SplitterComponent ref={panelR} height='100%' width="100%" separatorSize={4} resizeStop={(e) => {
                renderizar.current = false;
                //setWidthVw(e.paneSize[1]);
                console.log(panelR);
                setTimeout(() => {
                    RefrescarV();
                }, 300);
            }} beforeCollapse={() => {
                setTimeout(() => {
                    RefrescarV();
                }, 300);
            }} beforeExpand={() => {
                setTimeout(() => {
                    RefrescarV();
                }, 300);
            }}>
                <PanesDirective>
                    {option==='Viewer' &&
                    <PaneDirective size="15%" min="60px" content={hPaneContent1} collapsible={true} />
                    }
                    <PaneDirective size="70%" min="60px" content={hPaneContent2} collapsible={true} />
                    {option==='Viewer' &&                    
                    <PaneDirective size="15%" min="60px" content={hPaneContent3} collapsible={true} />
                    }
                </PanesDirective>
            </SplitterComponent>

        )
    }


    

    /*interface ButtonGroupItemsInterface{
        iconCss:string;
        content:string;
        selected:boolean;
        click:() => void;
    }
    
    interface RibItemsSettingsface {
        iconCss?: string;
        Subitems?: ItemModel[];
        content?: string;
        dataSource?: string[];
        index?: number; 
        label?: string; 
        width?: string; 
        popupWidth?: string;
        allowFiltering?: boolean;
        selection?: RibbonGroupButtonSelection;
        header?:string;
        items?:ButtonGroupItemsInterface[] | ItemModel[];
        value?:string | undefined;
        checked?:boolean;
    }
    
    interface RibItemsInterface {
        type: string;
        disabled?: boolean;
        id?: string;
        allowedSizes?: RibbonItemSize;
        Settings?: RibItemsSettingsface;
        displayOptions?:DisplayMode;
    }
    
    //const RibbonGeneric()
    interface RibGroupInterface {
            id?: string;
            header?: string;
            groupIconCss?: string;
            showLauncherIcon?: boolean;
            isCollapsible?: boolean;
            enableGroupOverflow?:boolean;
            orientation?: string;
            cssClass?:string;
            overflowHeader?: string;
            Items?: RibItemsInterface[];
    }
    
    interface RibBIMInterface {
        TabName: string;
        Groups: RibGroupInterface[];
    }



    const RibItems:RibItemsInterface[] = [
        {
            type: 'Button',
            disabled: false,
            id: '55',
            allowedSizes: RibbonItemSize.Large,
            Settings: { iconCss: "e-icons e-table", Subitems: pasteOptions, content: "View" }
        }
    ];

    const RibHomeGroups:RibGroupInterface[] = [
        {
        id: '1',
        header: 'header',
        groupIconCss: '',
        showLauncherIcon: true,
        enableGroupOverflow:true,
        isCollapsible: false,
        overflowHeader: '',
        Items: RibItems,
        orientation: '',
        cssClass:''
        },
        {
            id: '2',
            header: 'header2',
            groupIconCss: '',
            showLauncherIcon: true,
            enableGroupOverflow:true,
            isCollapsible: false,
            overflowHeader: '',
            Items: RibItems,
            orientation: '',
            cssClass:''
            }        
    ];*/
   
    

    /*const RibbonGeneric = () => {

        const RibBIM:RibBIMInterface[] = [
            {TabName: 'Home', Groups: RibHomeGroups},
            {TabName: 'insert', Groups: RibHomeGroups},
            {TabName: 'View', Groups: RibHomeGroups}
        ];
    
        
        return (
                
                {RibBIM?.map( (elemRib : RibBIMInterface) => (
                    <RibbonTabDirective header={elemRib.TabName}>
                        <RibbonGroupsDirective>


                            {elemRib.Groups?.map( (elemGroupRib:RibGroupInterface) => (
                                <RibbonGroupDirective header={elemGroupRib?.header} overflowHeader={elemGroupRib?.overflowHeader} id={elemGroupRib?.id} isCollapsible={elemGroupRib?.isCollapsible} orientation={elemGroupRib?.orientation} groupIconCss={elemGroupRib?.groupIconCss} showLauncherIcon={elemGroupRib?.showLauncherIcon} cssClass={elemGroupRib?.cssClass}>
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            {elemGroupRib.Items?.map( (elemItemRib : RibItemsInterface) => (
                                                <>
                                                {elemItemRib.type==="SplitButton" &&
                                                    <RibbonItemDirective type="SplitButton" disabled={elemItemRib.disabled} id={elemItemRib.id} allowedSizes={elemItemRib.allowedSizes}
                                                        splitButtonSettings={{ iconCss: elemItemRib.Settings?.iconCss, items: elemItemRib.Settings?.Subitems, content: elemItemRib.Settings?.content, select: (args) => { updateContent(elemItemRib.Settings?.content + args.item.text); }, click: () => { updateContent(elemItemRib.Settings?.content); } }}>
                                                    </RibbonItemDirective>
                                                }
                                                {elemItemRib.type==="Button" &&                                                        
                                                        <RibbonItemDirective type="Button" allowedSizes={elemItemRib.allowedSizes} buttonSettings={{ iconCss: elemItemRib.Settings?.iconCss, content: elemItemRib.Settings?.content, clicked: () => { updateContent(elemItemRib.Settings?.content); /*enablePaste(); } }}>
                                                        </RibbonItemDirective>
                                                }
                                                {elemItemRib.type==="ComboBox" &&                                                        
                                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: elemItemRib!.Settings!.dataSource, index: elemItemRib.Settings?.index, label: elemItemRib.Settings?.label, width: elemItemRib.Settings?.width, popupWidth: elemItemRib.Settings?.popupWidth, allowFiltering: elemItemRib.Settings?.allowFiltering, change: (args) => { if (args.itemData) { updateContent(elemItemRib.Settings?.label + " -> " + args.itemData.text); } } }}>
                                                        </RibbonItemDirective>
                                                }
                                                
                                                {elemItemRib.type==="GroupButton" &&                                                        
                                                    <RibbonItemDirective type="GroupButton" allowedSizes={elemItemRib.allowedSizes} groupButtonSettings={{ selection: elemItemRib.Settings?.selection , header: elemItemRib.Settings?.header , items: elemItemRib.Settings?.items }}>
                                                    </RibbonItemDirective>
                                                }

                                                {elemItemRib.type==="ColorPicker" &&                                                        
                                                    <RibbonItemDirective type="ColorPicker" allowedSizes={elemItemRib.allowedSizes} displayOptions={elemItemRib.displayOptions} colorPickerSettings={{ value: elemItemRib.Settings?.value, change: (args) => { updateContent(args.currentValue.hex + " color"); } }}>
                                                    </RibbonItemDirective>
                                                }

                                                {elemItemRib.type==="DropDown" &&                                                        
                                                    <RibbonItemDirective type="DropDown" allowedSizes={elemItemRib.allowedSizes} dropDownSettings={{ iconCss: elemItemRib.Settings?.iconCss, items: elemItemRib.Settings?.items, content: elemItemRib.Settings?.content, select: (args) => { updateContent("Editor -> " + args.item.text); } }}>
                                                    </RibbonItemDirective>
                                                }

                                                {elemItemRib.type==="CheckBox" &&
                                                    <RibbonItemDirective type="CheckBox" checkBoxSettings={{ label: elemItemRib.Settings?.label, checked: elemItemRib.Settings?.checked, change: () => { updateContent("Ruler"); } }}>
                                                    </RibbonItemDirective>
                                                }

                                                </>
                                            ))}
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                    
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                                            ))}
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                                            ))}

            
        )
    }*/



                




    return (
        <div className='control-pane'>
            <div className='col-lg-12 control-section default-ribbon-section'>
                <div className='control ribbon-sample'>
                    <div id="default-ribbonContainer" className='default-ribbon-container' style={{ height: '93vh' }}>
                        
                        {option==='Viewer' &&
                        <MenuBimProjects updateContent={updateContent} fileSelect={fileSelect} launchClick={launchClick}/>
                        }
                        




                        <div id="default-ribbonPlaceHolder" style={{ height: '80%' }}>

                            <ChildPanel />

                            {/* <SplitterComponent height="100%" width="100%" separatorSize={4} orientation={'Vertical'} resizeStop={(e) => {
                                renderizar.current = false;
                                setWidthVw( e.paneSize[0] - 20 );
                                console.log(panelR);
                                setTimeout(() => {RefrescarV();}, 300);
                            }} beforeCollapse={(e) => {
                                setWidthVw( e.paneSize[0] - 20 );
                                setTimeout(() => {RefrescarV();}, 300);
                            }} beforeExpand={(e) => {
                                setWidthVw( e.paneSize[0] - 20 );
                                setTimeout(() => {RefrescarV();}, 300);
                            }}>
                                <PanesDirective>
                                    <PaneDirective size="80%" min="60px" content={ChildPanel.bind(this)} collapsible={true} />
                                    <PaneDirective size="20%" min="60px" content={()=><h1>Hello</h1>} collapsible={true} />
                                </PanesDirective>
                            </SplitterComponent> */}


                            {/* <div className="content1"></div>
                            
                            <div className="content2" style={{ overflowY:'scroll', overflowX:'hidden', height:'100%' }}>
                                {option===1 && <><GeneratorMenu/></>}
                                {option===2 && <><ErpMenu/></>}
                            </div> */}



                            {/* <div className="content3"></div>
                            <div className="content4"></div> */}
                            <ToastComponent id='toast' ref={toastInstance} position={{ X: 'Right' }} width='auto' height={25} timeOut={2000} cssClass='e-toast-info' showCloseButton={true} target="#default-ribbonPlaceHolder" newestOnTop={true} animation={{ show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } }} />
                        </div>
                        <ListViewComponent id='default-pictureList' dataSource={['This Device', 'Stock Images', 'Online Images']} showHeader={true} headerTitle="Insert Picture From" select={(args: any) => { updateContent("Picture -> " + args.text); }}></ListViewComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LayoutAppplications;