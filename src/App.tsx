import { Navigation } from './routes/Navigation';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalProvider';


L10n.load({
  'es': {
      'grid': {
          'EmptyRecord': 'Registro vacio',
          'GroupDropArea': 'Grupo',
          'UnGroup': 'Desagrupar',
          'EmptyDataSourceError': 'No se encontraron datos',
          'Item': 'Ariculo',
          'Items': 'Articulos'
      },
      'pager':{
          'currentPageInfo': '{0} de {1} Paginas',
          'totalItemsInfo': '({0} registros)',
          'firstPageTooltip': 'Primera pagina',
          'lastPageTooltip': 'Ultima Pagina',
          'nextPageTooltip': 'Siguiente pagina',
          'previousPageTooltip': 'Pagina previa',
          'nextPagerTooltip': 'Siguente pagina',
          'previousPagerTooltip': 'Pagina previa'
      }
  }
});


function App() {

  const [selectedTheme, setSelectedTheme] = useState('material3-dark');
  const [cambios, setCambios] = useState(true);
  /*const selectCSS = () => {
      if (selectedTheme){
        const el = document.getElementById('theme') as HTMLAnchorElement;
        el.href = 'tailwind-dark.css';
        setCambios(!cambios);
      } else {
          const el = document.getElementById('theme') as HTMLAnchorElement;
          el.href = 'tailwind.css';
          setCambios(!cambios);
      }
    }*/

   
    const setTheme = (selectedTheme:string) => {
      const el = document.getElementById(selectedTheme) as HTMLLinkElement;
      //alert(selectedTheme);
      el.disabled = false;
      const otherTheme = selectedTheme == "material3" ? "material3-dark" : "material3";
      const el1 = document.getElementById(otherTheme) as HTMLLinkElement;
      el1.disabled = true;
      //alert(otherTheme);
      setSelectedTheme(selectedTheme);

    };

  //import "/node_modules/@syncfusion/ej2/tailwind-dark.css";
  setCulture('es');


  return (
    <>
      <GlobalProvider>
      <BrowserRouter>
      <FabComponent id='fab' iconCss={selectedTheme==='material3' ? 'e-icons e-contrast':'e-icons e-brightness'} cssClass= 'custom-position' content='' onClick={()=> {
        if (selectedTheme==='material3')
            //setSelectedTheme('material3-dark'); 
            setTheme('material3-dark');
        else
            setTheme('material3');
            //setSelectedTheme('material3'); 
        }} target='#targetElement'></FabComponent>

        <Navigation setCambios={setCambios}/>
      </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
