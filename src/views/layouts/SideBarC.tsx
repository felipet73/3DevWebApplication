import * as React from 'react';
import { useEffect, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
import SEODashboard from '../dashboard/DashBoardP';
//import SEODashboard from './DashBoardP';

interface Prps{
    trogle:boolean;
    setCambios:React.Dispatch<React.SetStateAction<boolean>>;
}
  

const SidebarWithMenu = ({trogle, setCambios}:Prps) => {
    let sidebarobj = useRef<SidebarComponent>(null);
    
    const [content, SetContent] = React.useState('');

    let menuItems: MenuItemModel[] = [
        {
            text: 'Home',
            iconCss: 'icon-up-hand icon',
            items: [
                { text: 'Home Dashboard' }
            ]
        },
        {
            text: 'Code Generator',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Code Generator' },
            ]
        },

        {
            text: 'ERP',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'ERP Applications' },
            ]
        },
        {
            text: 'Learn',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Learn' },
            ]
        },
        {
            text: 'Utils',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [
                { text: 'Utils' },
            ]
        },
        {
            text: 'Catalags',
            iconCss: 'icon-bookmark icon',
            items: [
                { text: 'Catalogs' },
            ]
        },
        {
            text: 'Pubs',
            iconCss: 'icon-picture icon',
            items: [
                { text: 'Pubs' },
            ]
        },
        /*{
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile User' },
                { text: 'Laptop User' },
                { text: 'Desktop User' }
            ]
        },*/
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
            items: [
                { text: 'Profile Settings' },
                { text: 'Account Settings' },
            ]
        }
    ];
    const enableDock: boolean = true;
    const dockSize: string = '50px';
    const width: string = '220px';
    const target: string = '.main-menu-content';
    let folderEle: string = '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';

    useEffect(() => {
        //sidebarobj.current?.toggle();
        sidebarobj.current?.toggle();
        setCambios(state => !state);  
        setTimeout(() => {
            setCambios(state => !state);  
            //alert()  
        }, 800);
    }, [trogle])
    

    return (
        <div id="menu-wrapper">
            <div id="sidebarmenu">
                <div >
                    
                    {/* <ToolbarComponent id="menuToolbar" clicked={toolbarCliked.bind(this)}>
                        <ItemsDirective>
                            <ItemDirective prefixIcon="icon-menu" tooltipText="Menu"></ItemDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent> */}
                </div>
                {/* main content declaration */}
                
                {/* end of main content declaration
                sidebar element declaration */}
                
                <SidebarComponent id="menuSidebar" className="sidebar-menu" ref={sidebarobj} enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={false} type="Auto">
                
                        <div className="main-menu" >
                            <div className="" style={{ marginTop:'20px' }}>
                                <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu' ></MenuComponent>
                            </div>
                        </div>
                        
                </SidebarComponent>
                
                <div style={{overflow:'hidden'}}>
                <SEODashboard/> 
                </div>
            </div>
        </div>
    );
}
export default SidebarWithMenu;