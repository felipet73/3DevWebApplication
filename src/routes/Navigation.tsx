import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import SidebarWithMenu from '../views/layouts/SideBarC';
import AppBar from '../views/layouts/AppBar';
import Presetation from '../views/home/Presentation';

import * as React from 'react';
import { useEffect } from 'react';
import { AppBarComponent, MenuComponent, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import '../views/layouts/color.css';
//import SEODashboard from './DashBoardP';
//import SidebarWithMenu from './SideBarC';
import AddressBar from '../views/layouts/BarAdress';
import Presentation from '../views/home/Presentation';
import Login from '../views/login/Login';



export const Navigation = () => {


    const [trogle, setTrogle] = React.useState(false);
    const [logeed, setLogged] = React.useState(false);
  
    const btnCreated = (): void => {
      const menuButtonElement = document.querySelectorAll('.color-appbar-section .e-inherit.menu');
      for (let i = 0; i < menuButtonElement.length; i++) {
        if (!(menuButtonElement[i].hasAttribute("aria-label"))) {
          menuButtonElement[i].setAttribute('aria-label', 'menu');
        }
      }
    }
    const productDropDownButtonItems: ItemModel[] = [
      { text: '3Dev Code Generator' },
      { text: '3Dev BIM ERP' },
      { text: '3Dev Learn' },
      { text: '3Dev Utils' },
      { text: '3Dev Catalogs' },
      { text: '3Dev Pubs' }
    ];
  
    const lenguajesDropDownButtonItems: ItemModel[] = [
      { text: 'English' },
      { text: 'Spanish' },
    ];
  
    const companyDropDownButtonItems: ItemModel[] = [
      { text: 'About Us' },
      { text: 'Customers' },
      { text: 'Blog' },
      { text: 'Careers' }
    ];
    const verticalMenuItems: MenuItemModel[] = [
      {
        iconCss: 'e-icons e-more-vertical-1',
        items: [
          { text: 'Home' },
          {
            text: 'Products',
            items: [
              { text: 'Developer' },
              { text: 'Analytics' },
              { text: 'Reporting' },
              { text: 'E-Signature' },
              { text: 'Help Desk' }
            ]
          },
          {
            text: 'Company',
            items: [
              { text: 'About Us' },
              { text: 'Customers' },
              { text: 'Blog' },
              { text: 'Careers' }
            ]
          },
          { text: 'Logout' }
        ]
      }
    ];
    const appBarColors: any = [
      { colorMode: 'Light', colorClass: 'e-light', isPrimary: 'true', loginClass: 'login' }, { colorMode: 'Dark', colorClass: 'e-dark', isPrimary: 'false', loginClass: 'e-inherit login' },
      { colorMode: 'Primary', colorClass: 'e-primary', isPrimary: 'false', loginClass: 'e-inherit login' }, { colorMode: 'Inherit', colorClass: 'e-inherit', isPrimary: 'true', loginClass: 'login' }
    ];
    const onInputFocus = (args: React.FocusEvent) => {
      ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
    }
    const onInputBlur = (args: React.FocusEvent) => {
      ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    }
    const beforeItemRender = (args: MenuEventArgs): void => {
      //console.log(args)
      if (args.element.children.length > 0 && args.element.children[0].classList.contains("e-more-vertical-1")) {
        args.element.setAttribute('aria-label', 'more vertical');
      }
    }
    const navigate = useNavigate();
    return (

<>
<div className='control-container'>
      <AppBarComponent colorMode={'Light'} isSticky>

      {!logeed && <>
        <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={productDropDownButtonItems}>Product Information</DropDownButtonComponent>
        <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }>About</ButtonComponent>
        <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }>Sponsors</ButtonComponent>
        {/* <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }></ButtonComponent>
        <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }>Condiciones Generales</ButtonComponent> */}
        
        <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }>Contact us</ButtonComponent>
        <div className='e-appbar-spacer' style={{width:'10%'}}></div>
          
          <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={lenguajesDropDownButtonItems} style={{ marginLeft: '10px', marginRight: '15px' }}>English</DropDownButtonComponent>
          <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> { navigate("/login");} }>Login </ButtonComponent>
          {/* <NavLink to="/login" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Login</NavLink> */}
        
        </>}
        {logeed && <>
          <ButtonComponent created={btnCreated} onClick={() => setTrogle(!trogle)} cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
          <AddressBar />
          <ButtonComponent cssClass='e-inherit e-appbar-menu'></ButtonComponent>
          <ButtonComponent cssClass='e-inherit e-appbar-menu'></ButtonComponent>
          <ButtonComponent cssClass='e-inherit e-appbar-menu'></ButtonComponent>
          <ButtonComponent cssClass='e-inherit e-appbar-menu'></ButtonComponent>

          <ButtonComponent cssClass='e-inherit home e-appbar-menu' iconCss='e-icons e-home'></ButtonComponent>
          <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={productDropDownButtonItems}>Products</DropDownButtonComponent>
          <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={companyDropDownButtonItems}>Company</DropDownButtonComponent>
          <div className='e-appbar-spacer'></div>
          <div style={{ width: '200px', marginRight: '10px' }}>
            <span className='e-input-group e-control-wrapper e-inherit'>
              <input type='text' className='e-searchinput e-input' placeholder='Search' onFocus={onInputFocus} onBlur={onInputBlur} />
              <span className='e-icons e-search e-input-group-icon'></span>
            </span>
          </div>
          <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={lenguajesDropDownButtonItems} style={{ marginLeft: '10px', marginRight: '15px' }}>Español</DropDownButtonComponent>
          <div className="e-avatar e-avatar-xlarge e-avatar-circle" style={{ marginRight: '10px' }}>
            <img className="image" src="https://ej2.syncfusion.com/react/demos/src/avatar/images/pic01.png" alt="avatar" />
          </div>
          {/* <ButtonComponent isPrimary={true} cssClass={'login'}>Login</ButtonComponent> */}
          <MenuComponent cssClass={'e-inherit e-appbar-icon-menu ' + 'e-light'} items={verticalMenuItems} beforeItemRender={beforeItemRender} select={
            (e)=>{
                if (e.item.text==='Logout'){
                    setLogged(false);
                    navigate("/home");
                } 
                
                
            }}></MenuComponent>
        </>
        }

      </AppBarComponent>

      <div className="appbar-content" >

        {/*logeed && <SidebarWithMenu trogle={trogle} setCambios={setCambios} />*/}
        {/*!logeed && <Presentation />*/}
      </div>
      <Routes>
                    <Route path="dashboard" element={ <SidebarWithMenu trogle={trogle} setCambios={()=>{}} /> } />
                    <Route path="login" element={ <Login setLogged={setLogged} /> } />
                    <Route path="home" element={ <Presentation /> } />
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>

    </div>

        
        {/* <SidebarWithMenu trogle={false} setCambios={()=>{}}/> */}
        
            
                {/* <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav> */}


                

            
        </>
    )
}
