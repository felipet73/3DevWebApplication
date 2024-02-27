import * as React from 'react';
import { useEffect } from 'react';
import { AppBarComponent, MenuComponent, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import './color.css';
//import SEODashboard from './DashBoardP';
import SidebarWithMenu from './SideBarC';
import AddressBar from './BarAdress';
import Presentation from '../home/Presentation';




interface Prps {
  setCambios: React.Dispatch<React.SetStateAction<boolean>>;
}


const AppBar = ({ setCambios }: Prps) => {

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

  return (
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
          <ButtonComponent cssClass='e-inherit e-appbar-menu' onClick={()=> setLogged(true) }>Login</ButtonComponent>
        
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
          <MenuComponent cssClass={'e-inherit e-appbar-icon-menu ' + 'e-light'} items={verticalMenuItems} beforeItemRender={beforeItemRender} select={(e)=>{if (e.item.text==='Logout') setLogged(false);}}></MenuComponent>
        </>
        }

      </AppBarComponent>

      <div className="appbar-content" >

        {logeed && <SidebarWithMenu trogle={trogle} setCambios={setCambios} />}
        {!logeed && <Presentation />}
      </div>


    </div>
  );
}
export default AppBar;