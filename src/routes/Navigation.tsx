
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { AppBarComponent, MenuComponent, MenuItemModel, MenuEventArgs, SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import Presentation from '../views/home/Presentation';
import Login from '../views/auth/login/Login';
import SEODashboard from '../views/dashboard/DashBoardP';
import BreadCrum from '../views/layouts/BreadCrum';
import LayoutAppplications from '../views/layouts/Applications/LayoutAppplications';
import LearnMenu from '../views/Learn/LearnMenu';
import Notifications from '../views/layouts/Notifications';
import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons';

import '../views/layouts/sidebar-menu.css';
import Register from '../views/auth/register/Register';
import { UserInterface } from '../interfaces/userInterface';
import { useGlobalStore } from '../stores';

interface Prps {
  setCambios: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation = ({ setCambios }: Prps) => {
  const navigate = useNavigate();
  const [trogle, setTrogle] = React.useState(false);
  const [logeed, setLogged] = React.useState(false);
  const [actualRoute, setActualRoute] = React.useState<string[]>(['3Dev Dashboard']);
  //const [actualUser, setActualUser] = React.useState<UserInterface>({name:'', email:'', emailValidated:false, id:'',role:['']});

  const loggedUser = useGlobalStore(state => state.loggedUser);
  //const setLoggedUser = useGlobalStore( state => state.setLoggedUser);


  let sidebarobj = React.useRef<SidebarComponent>(null);

  let menuItems: MenuItemModel[] = [
    {
      text: 'Home Dashboard',
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
      text: 'Catalogs',
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

  useEffect(() => {
    //setActualUser(JSON.parse( localStorage.getItem("User3Dev") ?? '{}' ) || {});
    //setLoggedUser(JSON.parse( localStorage.getItem("User3Dev") ?? '{}'));
    sidebarobj.current?.toggle();
    setCambios(state => !state);
    setTimeout(() => setCambios(state => !state), 800);
  }, [trogle])

  useEffect(() => {
    setTimeout(() => setTrogle(!trogle), 1500);
  }, [])


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
  const SelectApp = (e: any) => {
    console.log(e.item.text)
    if (e.item.text === 'Code Generator') { navigate("/codegenerator"); setActualRoute(['3Dev Code Generator']); }
    if (e.item.text === 'Home Dashboard') { navigate("/dashboard"); setActualRoute(['3Dev Dashboard']); }
    if (e.item.text === 'ERP' || e.item.text === 'ERP Applications') { navigate("/erp"); setActualRoute(['3Dev ERP']); }
    if (e.item.text === 'Learn') { navigate("/learn"); setActualRoute(['3Dev Learn']); }
    if (e.item.text === 'Utils') { navigate("/utils"); setActualRoute(['3Dev Utils']); }
    if (e.item.text === 'Catalogs') { navigate("/catalogs"); setActualRoute(['3Dev Catalogs']); }
    if (e.item.text === 'Pubs') { navigate("/pubs"); setActualRoute(['3Dev Pubs']); }
  }

  const SelectMenuUsr = (e: any) => {
    if (e.item.text === 'Logout') {
      setLogged(false);
      navigate("/home");
    }
  }

  return (
    <>
      <div className='control-container'>
        <AppBarComponent colorMode={'Light'} isSticky>
          {!logeed && <>
            <ButtonComponent cssClass='e-inherit home e-appbar-menu' iconCss='e-icons e-home' onClick={() => navigate("/home")} ></ButtonComponent>
            <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={productDropDownButtonItems}>Product Information</DropDownButtonComponent>
            <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={() => navigate("/about")}>About</ButtonComponent>
            <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={() => navigate("/sponsors")}>Sponsors</ButtonComponent>
            {/* <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }></ButtonComponent>
            <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> {} }>Condiciones Generales</ButtonComponent> */}
            <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={() => navigate("/contact")}>Contact us</ButtonComponent>
            <div className='e-appbar-spacer' style={{ width: '10%' }}></div>
            <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={lenguajesDropDownButtonItems} style={{ marginLeft: '10px', marginRight: '15px' }}>English</DropDownButtonComponent>
            <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={() => { navigate("/login"); }}>Login </ButtonComponent>
            {/* <NavLink to="/login" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Login</NavLink> */}
          </>}
          {logeed && <>
            <ButtonComponent created={btnCreated} onClick={() => setTrogle(!trogle)} cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
            {actualRoute.length > 0 && <BreadCrum actualRoute={actualRoute} setActualRoute={setActualRoute} />}
            <div className='e-appbar-spacer'></div>
            <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={productDropDownButtonItems}>Products</DropDownButtonComponent>
            <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={companyDropDownButtonItems}>Company</DropDownButtonComponent>
            <div className='e-appbar-spacer' style={{ width: '10px' }}></div>
            <div style={{ width: '200px', marginRight: '10px' }}>
              <span className='e-input-group e-control-wrapper e-inherit'>
                <input type='text' className='e-searchinput e-input' placeholder='Search' onFocus={onInputFocus} onBlur={onInputBlur} />
                <span className='e-icons e-search e-input-group-icon'></span>
              </span>
            </div>
            <Notifications />
            <DropDownButtonComponent cssClass={'e-inherit e-appbar-menu ' + 'e-light'} items={lenguajesDropDownButtonItems} style={{ marginLeft: '10px', marginRight: '15px' }}>English</DropDownButtonComponent>
                <div className="e-avatar e-avatar-xlarge e-avatar-circle" style={{ marginRight: '10px' }}>
                <img className="image" src={(loggedUser && loggedUser?.img) ? "https://images.pexels.com/photos/11259425/pexels-photo-11259425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : `https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="avatar" style={{ height:'34px', marginTop:'-12px' }}/>
                </div>    
            <span className="e-badge e-badge-light e-badge-notification e-badge-overlap" style={{ marginTop:'45px', marginLeft:'-110px', width:'120px' }}>{loggedUser && loggedUser?.name}</span>
            
            
            <MenuComponent title={loggedUser && loggedUser?.name} cssClass={'e-inherit e-appbar-icon-menu ' + 'e-light'} items={verticalMenuItems} beforeItemRender={beforeItemRender} select={SelectMenuUsr}></MenuComponent>
            
          </>
          }
        </AppBarComponent>
        <div className="appbar-content" >
          <div id="menu-wrapper">
            <div id="sidebarmenu">
              {logeed &&
                <SidebarComponent id="menuSidebar" className="sidebar-menu" ref={sidebarobj} enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={false} type="Auto">
                  <div className="main-menu" >
                    <div className="" style={{ marginTop: '20px' }}>
                      <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu' select={SelectApp}></MenuComponent>
                    </div>
                  </div>
                </SidebarComponent>
              }
              <div style={{ overflow: 'hidden' }}>
                <Routes>
                  <Route path="dashboard" element={<SEODashboard />} />
                  <Route path="codegenerator" element={<LayoutAppplications option={1} />} />
                  <Route path="erp" element={<LayoutAppplications option={2} />} />
                  <Route path="learn" element={<LearnMenu />} />
                  <Route path="utils" element={<LayoutAppplications option={3} />} />
                  <Route path="catalogs" element={<h1>Catalogs</h1>} />
                  <Route path="pubs" element={<h1>Pubs</h1>} />
                  <Route path="home" element={<Presentation />} />
                  <Route path="about" element={<h1>About</h1>} />
                  <Route path="sponsors" element={<h1>Sponsors</h1>} />
                  <Route path="contact" element={<h1>Contact</h1>} />
                  <Route path="codegeneratordocs" element={<h1>Code generator docs</h1>} />
                  <Route path="erpdocs" element={<h1>Erp docs</h1>} />
                  <Route path="register" element={<Register setTrogle={setTrogle} setLogged={setLogged} />} />
                  <Route path="login" element={<Login setTrogle={setTrogle} setLogged={setLogged} />} />
                  <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


{/* <SidebarWithMenu trogle={false} setCambios={()=>{}}/> */ }
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
