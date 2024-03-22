
//import Script from 'react-load-script';

//import queryString from 'query-string';
//import Swal from 'sweetalert2'
//import * as THREE from 'three';
//import {Vector3, LineBasicMaterial, Line, Geometry} from "three";

//import { AxiosAutodesk } from '../../config/axios';
//import { useDispatch, useSelector } from 'react-redux';
//import { actualizaMetrado, agregaCategoria, agregaCategoriaB, agregaElementos, agregaFamilia, agregaFamiliaB, agregaMetrado, agregaTipo, agregaTipoB, guardarAsociado, guardarMedicion, limpiaAsociado, limpiaElementos, limpiaElementosItems, ponerPropiedades, selectAsociados, selectELEMENTOS_METRADOS, selectParidas } from '../actions/proyects.actions';
import React, { useRef, useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import './viewer.css'
import { useViewerStore } from '../../stores/viewer/viewer.store';
import $ from 'jquery';
import { useBimProjectsStore, useGlobalStore } from '../../stores';
import { useProjectsTreeStore } from '../../stores/erp/bimprojects/projecttree.store';
//import * as TransformControls from 'three/examples/js/controls/TransformControls.js';



const devices = [
    {
        position: {
            x: 2.590268290876452,
            y: 1.20446526068116,
            z: 2.355262787057484,
        },
        type: "temperature",
        sensorTypes: ["co2", "temperature"],
    },
    {
        position: {
            x: -97.94954550038506,
            y: -50.21776820050724,
            z: 12.444056161946492,
        },
        type: "temperature",
        sensorTypes: ["temperature"],
    },
    {
        position: {
            x: 162.61,
            y: 75.54,
            z: -0.61,
        },
        type: "temperature",
        sensorTypes: ["temperature"],
    },
    {
        position: {
            x: 48.53,
            y: -48.27,
            z: -19.24,
        },
        type: "temperature",
        sensorTypes: ["temperature"],
    },

];

var ponerdato = true;
//const viewerLibaryURL1 = '//cdn.jsdelivr.net/gh/autodesk-forge/forge-extensions/public/extensions/NestedViewerExtension/contents/main.js';
//const viewerStylesheetURL1 = '//cdn.jsdelivr.net/gh/autodesk-forge/forge-extensions/public/extensions/NestedViewerExtension/contents/main.css';

//var seleccionados = "", seleccionadosCat = "", seleccionadosFamilia = "", seleccionadosTipo = "";
//const viewerLibaryURL2 = 'js/three.js';

/*var T_uniqueIds = [];
var T_categorias = [];
var T_NombreT = [];
var T_TipoT = [];*/
//var T_cantidad_elementos = 0;

//URN=dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLi02VW9rWXRDUVZXVDdiWDFZeXRZUHc/dmVyc2lvbj0x
//const modelURL = 'https://dukedhx.github.io/Forge-Workshop/shaver/0.svf';
//const modelURL = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
//const modelURL = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmktWmdsQkg4UnRXRWI1Zi1CWnZnQ0E/dmVyc2lvbj0x';
//const modelURL = 'https:\/\/developer.api.autodesk.com\/derivativeservice\/v2\/derivatives\/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x'
//const viewerLibaryURL = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=v7.*';
//const viewerStylesheetURL = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*';
//const viewerLibaryURL = 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js';
/*let viewerLibraryLoaded = false;
let viewerLibraryLoaded1 = false;
let viewerStyleLoaded = false;
let viewerLoading = false;*/

//const viewerLibaryURL1 = 'js/ForgeViewer.js';
//var viewer:any;

/*export const RefrescarV = async () => {
    if (viewer)
        viewer.resize();
}*/

//export const Viewer1=null;
//export const CambiardeModelo = async (NuevoModelo) => {
//setModelURL(NuevoModelo);
//await launchViewer(modelURL);
//}
/*function getForgeToken(callback) {
    postData('https://developer.api.autodesk.com/authentication/v1/authenticate', {
        'client_id': 'Lrn6oqLnwpCBd8GS0LuimGx5SHONYw4b',
        'client_secret': 'JLA2LfrdwUg4hMkz',
        'grant_type': 'client_credentials',
        'scope': 'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete'
    })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            callback(data.access_token, data.expires_in);
        });
}*/


/*
export const filtrar_campo = async (filtr, DatoarregloFiltrado, CampoFiltro, Comp, Valor) => {
    //var valo;
    await viewer.getProperties(DatoarregloFiltrado.Id, (props) => {
        //console.log(propiedad);
        let v1 = props.properties.find((filtro1) => filtro1.displayName === CampoFiltro)
        let valorC = '';
        if (v1) valorC = v1?.displayValue;
        if (Comp === 'Igual') {
            if (valorC.toString().trim() === Valor.toString().trim()) {
                //console.log('pongo este dato' + valorC + ' == ' + Valor)
                //console.log(DatoarregloFiltrado)
                filtr.push(DatoarregloFiltrado);
            }
        } else if (Comp === 'Contiene') {

            if (valorC.toString().trim().includes(Valor.toString().trim()) ) {
                filtr.push(DatoarregloFiltrado);
            }

        } else{
            if (valorC.toString().trim() !== Valor.toString().trim()) {
                //console.log('pongo este dato' + valorC + ' != ' + Valor)
                //console.log(DatoarregloFiltrado)
                filtr.push(DatoarregloFiltrado);
            }
        }
    })
}

export const ObtenerPropiedad = async (idelem, propiedad, valor, elemento, indice, valor2, filtr, mostrar) => {
    //var valo;
    await viewer.getProperties(idelem, (props) => {
        //console.log('valor de propiedades',propiedad);
        //console.log('valor de propiedades  ', props);
        let v1 = props.properties.find((filtro1) => filtro1.displayName === propiedad)
        //console.log(v1.displayValue);
        //valor=v1?.displayValue;
        if (v1 && v1?.displayValue !== '') {
            valor.push({ campo: propiedad, indice: indice, valor: v1?.displayValue });
            valor2.push({ campo: propiedad, valor: v1?.displayValue });
            let nP = '';
            if (mostrar === 'true')
                nP = propiedad + ' ';
            let Prop1 = 'N' + (elemento + 1)
            //filtr[indice].Prop1 = nP + v1?.displayValue;
            filtr[indice][`${Prop1}`] = nP + v1?.displayValue;
        }
        else {
            valor.push({ campo: propiedad, indice: indice, valor: 'SN' });
            valor2.push({ campo: propiedad, valor: 'SN' });
            let nP = '';
            if (mostrar === 'true')
                nP = propiedad + ' ';
            let Prop1 = 'N' + (elemento + 1)
            filtr[indice][`${Prop1}`] = nP + 'SN';
        }
    })
}

export const ObtenerPropiedades = async (idelem, filtr, indice, PedirDescripcion, PedirCantidad, PedirLongitud, PedirAlto, PedirAncho, calculodetalle) => {
    await viewer.getProperties(idelem, (props) => {
        //console.log(props.properties)
        if (PedirDescripcion !== '') {
            let v1 = props.properties.find((filtro1) => filtro1.displayName === PedirDescripcion)
            if (v1 && v1?.displayValue !== '') {
                filtr[indice].Descripcion = v1?.displayValue;
            } else {
                filtr[indice].Descripcion = filtr[indice].Descripcion;
            }
        }

        if (PedirCantidad !== '') {
            let v1 = props.properties.find((filtro1) => filtro1.displayName === PedirCantidad)
            if (v1 && v1?.displayValue !== '') {
                filtr[indice].Cantidad = v1?.displayValue;
            } else {
                filtr[indice].Cantidad = '1.00';
            }
        }

        if (PedirLongitud !== '') {
            if (PedirLongitud.substring(0, 1) === '=') {
                let terminos = calculodetalle.filter((filtro1) => filtro1.TipoCampo === 'Longitud').sort((a, b) => a.Posicion - b.Posicion)
                let resultado = 0;
                let proximaOperacion = '';
                for (let i = 0; i < terminos.length; i++) {

                    let vcampo = 0;
                    if (terminos[i].Campo === '') {
                        vcampo = 0;
                    } else {
                        if (!isNaN(terminos[i].Campo)) {
                            vcampo = parseFloat(terminos[i].Campo);
                        } else {
                            let v1 = props.properties.find((filtro1) => filtro1.displayName === terminos[i].Campo)
                            if (v1 && v1?.displayValue !== '') {
                                //verificar si es numerico
                                if (!isNaN(v1?.displayValue)) {
                                    vcampo = parseFloat(v1?.displayValue);
                                }
                                else
                                    vcampo = 0;
                            } else {
                                vcampo = 0;
                            }
                        }
                    }
                    //ya tengo en vcampo mi valor
                    if (i === 0) {
                        resultado = vcampo;
                    } else {
                        switch (proximaOperacion.trim()) {
                            case '+':
                                resultado += vcampo;
                                break;
                            case '-':
                                resultado -= vcampo;
                                break;
                            case '*':
                                resultado *= vcampo;
                                break;
                            case '/':
                                resultado /= vcampo;
                                break;
                            case '':
                                resultado = resultado;
                                break;
                        }
                    }
                    proximaOperacion = terminos[i].Operacion;
                }

                filtr[indice].Longitud = resultado;
            } else {
                let v1 = props.properties.find((filtro1) => filtro1.displayName === PedirLongitud)
                if (v1 && v1?.displayValue !== '') {
                    if (!isNaN(v1?.displayValue))
                        filtr[indice].Longitud = v1?.displayValue;
                    else
                        filtr[indice].Longitud = '';

                } else {
                    filtr[indice].Longitud = '';
                }
            }
        }



        if (PedirAlto !== '') {
            if (PedirAlto.substring(0, 1) === '=') {
                let terminos = calculodetalle.filter((filtro1) => filtro1.TipoCampo === 'Alto').sort((a, b) => a.Posicion - b.Posicion)
                let resultado = 0;
                let proximaOperacion = '';
                for (let i = 0; i < terminos.length; i++) {

                    let vcampo = 0;
                    if (terminos[i].Campo === '') {
                        vcampo = 0;
                    } else {
                        if (!isNaN(terminos[i].Campo)) {
                            vcampo = parseFloat(terminos[i].Campo);
                        } else {
                            let v1 = props.properties.find((filtro1) => filtro1.displayName === terminos[i].Campo)
                            if (v1 && v1?.displayValue !== '') {
                                //verificar si es numerico
                                if (!isNaN(v1?.displayValue))
                                    vcampo = parseFloat(v1?.displayValue);
                                else
                                    vcampo = 0;
                            } else {
                                vcampo = 0;
                            }
                        }
                    }
                    //ya tengo en vcampo mi valor
                    if (i === 0) {
                        resultado = vcampo;
                    } else {
                        switch (proximaOperacion.trim()) {
                            case '+':
                                resultado += vcampo;
                                break;
                            case '-':
                                resultado -= vcampo;
                                break;
                            case '*':
                                resultado *= vcampo;
                                break;
                            case '/':
                                resultado /= vcampo;
                                break;
                            case '':
                                resultado = resultado;
                                break;
                        }
                    }
                    proximaOperacion = terminos[i].Operacion;
                }

                filtr[indice].Alto = resultado;
            } else {
                let v1 = props.properties.find((filtro1) => filtro1.displayName === PedirAlto)
                if (v1 && v1?.displayValue !== '') {
                    if (!isNaN(v1?.displayValue))
                        filtr[indice].Alto = v1?.displayValue;
                    else
                        filtr[indice].Alto = '';


                } else {
                    filtr[indice].Alto = '';
                }
            }
        }


        if (PedirAncho !== '') {
            if (PedirAncho.substring(0, 1) === '=') {
                let terminos = calculodetalle.filter((filtro1) => filtro1.TipoCampo === 'Ancho').sort((a, b) => a.Posicion - b.Posicion)
                let resultado = 0;
                let proximaOperacion = '';
                for (let i = 0; i < terminos.length; i++) {

                    let vcampo = 0;
                    if (terminos[i].Campo === '') {
                        vcampo = 0;
                    } else {
                        if (!isNaN(terminos[i].Campo)) {
                            vcampo = parseFloat(terminos[i].Campo);
                        } else {
                            let v1 = props.properties.find((filtro1) => filtro1.displayName === terminos[i].Campo)
                            if (v1 && v1?.displayValue !== '') {
                                //verificar si es numerico
                                if (!isNaN(v1?.displayValue))
                                    vcampo = parseFloat(v1?.displayValue);
                                else
                                    vcampo = 0;
                            } else {
                                vcampo = 0;
                            }
                        }
                    }
                    //ya tengo en vcampo mi valor
                    if (i === 0) {
                        resultado = vcampo;
                    } else {
                        switch (proximaOperacion.trim()) {
                            case '+':
                                resultado += vcampo;
                                break;
                            case '-':
                                resultado -= vcampo;
                                break;
                            case '*':
                                resultado *= vcampo;
                                break;
                            case '/':
                                resultado /= vcampo;
                                break;
                            case '':
                                resultado = resultado;
                                break;
                        }
                    }
                    proximaOperacion = terminos[i].Operacion;
                }

                filtr[indice].Ancho = resultado;
            } else {
                let v1 = props.properties.find((filtro1) => filtro1.displayName === PedirAncho)
                if (v1 && v1?.displayValue !== '') {
                    if (!isNaN(v1?.displayValue))
                        filtr[indice].Ancho = v1?.displayValue;
                    else
                        filtr[indice].Ancho = '';

                } else {
                    filtr[indice].Ancho = '';
                }
            }
        }

    })
}

export const ObtenerPropiedadesElemento = async (idelem, retorno) => {
    
    await viewer.getProperties(idelem, (props) => {
        //console.log('Props dentro' , props);
        //return props;
        //retorno=props;
        retorno.push(props);
    })
    
}

export const ObtenerPropiedadesElemento2 = async (idelem, retorno) => {    
    await viewer.getProperties(idelem, retorno);
}

export const MostarModelo = (idelem) => {
    //alert("refresca");
    //viewer.resize();
    //viewer.showAll();
    //viewer.refresh(false);
    //viewer.refresh(true);
    //var urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlk1YXg4MUthUWZ1OUppZlU1b0M0M0E/dmVyc2lvbj0x';
    //await ViewScreen1.launchViewer(urn);
    //console.log('ESTOS SON MI IDS');
    //console.log(idelem);
    highlightRevit(idelem);
}

export function highlightRevit(idsRevit) {
    // Every Forge Viewer model has an ‘ExternalId Mapping’
    // this mapping is an object that has as keys the
    if (viewer)
        if (viewer.model)
            viewer.model.getExternalIdMapping((mapping) => {
                configureElementByUniqueIdAndMapping(idsRevit, mapping);
            });
}

function configureElementByUniqueIdAndMapping(idsRevit, mapping) {
    var elementsDbId = [];
    var idsRevitArray = idsRevit.split(',');
    for (var uniqueId in idsRevitArray) {
        const elementDbId = mapping[idsRevitArray[uniqueId]];
        if (elementDbId) {
            elementsDbId.push(elementDbId);
        }
    }
    viewer.isolate(elementsDbId);
    viewer.fitToView(elementsDbId);
}

export const RefrescarV = async () => {
    //alert("refresca");
    if (viewer)
        viewer.resize();
    //viewer.showAll();
    //viewer.refresh(false);
    //viewer.refresh(true);
    //var urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlk1YXg4MUthUWZ1OUppZlU1b0M0M0E/dmVyc2lvbj0x';
    //await ViewScreen1.launchViewer(urn);

}
*/

/*var UniquesSel = null;
var arreglo = [];
var UniquesSeleccionar = '';
var cantidadM = 0;
var ejecuantando = 0;
var ItemAc = null;
var opcSeleccionada = 0;
var Arreglo1 = null;
var Arreglo2 = null;*/
//var codPresupuesto = null;

interface Prps {
    load:boolean;
}

export const ViewerSc = () => {

    /*const dispatch = useDispatch();
    const proyects = useSelector((state: any) => state.proyects);*/

    //const [guardaMedicion, setGuardaMedicion] = useState(false);

    /*useEffect(() => {
        console.log('En mi efecto', proyects.DatosPresupuesto[0]?.CodPresupuesto);
        codPresupuesto=proyects.DatosPresupuesto[0]?.CodPresupuesto;
    }, [guardaMedicion])*/

    
    //const dataMetrado = useRef([]);
    

    const setSelectedItems = useViewerStore(store => store.setSelectedItems);

    const { viewerC, actualViewables } = useContext( GlobalContext );
    
    //const setToken = useGlobalStore(state => state.setToken);
    const selectedTheme = useGlobalStore(store => store.selectedTheme);
    const [modelURL, setModelURL] = useState('dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmktWmdsQkg4UnRXRWI1Zi1CWnZnQ0E/dmVyc2lvbj0x');
    //'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmktWmdsQkg4UnRXRWI1Zi1CWnZnQ0E/dmVyc2lvbj0x'
    //const [Viewer1, setViewer1] = useState(null);
    //const setViewables = useBimProjectsStore(store => store.setViewables);

    /*function initTasks() {
        const currentDate = new Date();
        const tasks: Task[] = [
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
            name: "Proyecto Edificio Colinas",
            id: "ProjectSample",
            progress: 25,
            type: "project",
            padre: true,
            nivel:0,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              2,
              12,
              28
            ),
            name: "Desbroce y desbosque de terreno",
            id: "Task 0",
            progress: 45,
            type: "task",
            project: "ProjectSample",    
            nivel:1,        
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: "Research",
            id: "Task 1",
            progress: 25,
            dependencies: ["Task 0"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Excavacion sin clasificar",
            id: "Task 2",
            progress: 10,
            dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Excavacion sin clasificar",
            id: "Task 8",
            progress: 10,
            dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 0, 0),
            name: "Relleno compactado",
            id: "Task 3",
            progress: 2,
            dependencies: ["Task 2"],
            type: "project",
            project: "ProjectSample",
            padre:true,
            nivel:1,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
            name: "Review",
            id: "Task 4",
            type: "task",
            progress: 70,
            dependencies: ["Task 2"],
            project: "Task 3",
            nivel:2,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Excavacion sin clasificar",
            id: "Task 5",
            progress: 10,
            dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },          
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Release",
            id: "Task 6",
            progress: currentDate.getMonth(),
            type: "milestone",
            dependencies: ["Task 4"],
            project: "Task 3",
            nivel:2,
            visible:true,
          },
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Excavacion sin clasificar",
            id: "Task 7",
            progress: 10,
            dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Excavacion sin clasificar",
            id: "Task 8",
            progress: 10,
            dependencies: ["Task 1"],
            type: "task",
            project: "ProjectSample",
            nivel:1,
            visible:true,
          },          
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
            name: "Party Time",
            id: "Task 9",
            progress: 0,
            isDisabled: true,
            type: "task",
            nivel:1,
            visible:true,
          },
        ];
        return tasks;
      }

    
    const [tasks, setTasks] = React.useState<Task[]>(initTasks());
    const currentDate = new Date();*/

    //return tasks;

    //const { env, docUrn, adapterType, api } = props.appData;
    /*if (props.appData.dataStart && props.appData.dataEnd) {
        let dataStart = new Date(props.appData.dataStart);
        let dataEnd = new Date(props.appData.dataEnd);
        startRange.setTime(dataStart.getTime());
        endRange.setTime(dataEnd.getTime());

        if (startDate.getTime() < startRange.getTime() || startDate.getTime() >= endRange.getTime()) {
            startDate.setTime(startRange.getTime());
        }

        if (endDate.getTime() <= startRange.getTime() || endDate.getTime() >= endRange.getTime()) {
            endDate.setTime(endRange.getTime());
        }

        if (currDate.getTime() <= startRange.getTime() || currDate.getTime() >= endRange.getTime()) {
            currDate.setTime(endRange.getTime());
        }

        // give it a little bit buffer to make the range selection visible
        startRange.setTime(dataStart.getTime() - 2 * 60 * 60 * 24 * 1000);
        endRange.setTime(dataEnd.getTime() + 2 * 60 * 60 * 24 * 1000);
    }*/
    //const appStateRef = useRef();
    //appStateRef.current = appState;
    /*timeOptionRef.current = timeOptions;
    
    hoveredDeviceInfoRef.current = hoveredDeviceInfo;*/

    //var urn;
    //const container: any = useRef();
    var posX = 0;
    var posY = 0;
    var posZ = 0;


    const token = useGlobalStore(store => store.token);
    const urn = useGlobalStore(store => store.urn);
    const setActualProperties = useBimProjectsStore(store => store.setActualProperties);
    const auxTree:any = React.useRef([]);
    //const setProjectTree = useProjectsTreeStore(store => store.setProjectTree)
    const charged = useProjectsTreeStore(store => store.charged)
    const setCharged = useProjectsTreeStore(store => store.setCharged)    
    //const setViewer = useGlobalStore(store => store.setViewer);

   // const [loadViewerLibrary, setLoadViewerLibrary] = useState(false);
    //const [loadViewerLibrary1, setLoadViewerLibrary1] = useState(false);

    /*
    const handleStyleLoad = async () => {
        viewerStyleLoaded = true;
        if (cargado1 && cargado2) {
            //urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlk1YXg4MUthUWZ1OUppZlU1b0M0M0E/dmVyc2lvbj0x';
            await launchViewer(modelURL);
            //alert(urn);
        }

        if (viewerLibraryLoaded && viewerLibraryLoaded1) {
            /*urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
            viewerLibraryLoaded && launchViewer(urn)

        }
    }*/
    
    
    //var cargado1 = false;
    //var cargado2 = false;

/*
    const handleScriptLoad1 = async () => {
        //alert('ya cargo');
        cargado2 = true;
        if (cargado1 && cargado2) {
            //urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlk1YXg4MUthUWZ1OUppZlU1b0M0M0E/dmVyc2lvbj0x';
            await launchViewer(modelURL);
            //alert(urn);
        }
        /*viewerLibraryLoaded1 = true;
        setTimeout(() => {
            if (viewer) {
                //viewer.loadExtension('MenuContextual');
                //viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true });
                //alert('carga extension');
                //viewer.loadExtension('MenuContextual');
                //viewer.activateExtension("NestedViewerExtension");
                //alert(viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true }));
                //viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true });
                //viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true });
                //alert(viewer.isExtensionLoaded("NestedViewerExtension"));
                //viewer.refresh(true);
            }
        }, 5000);
    }*/


    const handleScriptLoad2 = () => {

        /*var geom = new THREE.SphereGeometry(10, 8, 8);
        var material8 = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
        var sphereMesh = new THREE.Mesh(geom, material8);
        //var Cam = new THREE.Camera();
        //Cam.position.set(1,1,1);

        //var sphereMesh = new THREE.(geom, material8);
        sphereMesh.position.set(1, 2, 3);
        //sphereMesh.position.set(1, 2, 3);
        //sphereMesh.matrixWorld.setPosition(new THREE.Vector3(-59, 2, 3));
        //sphereMesh
        //sphereMesh.geometry.attributes.position.set([-59, 2, 3], 1);

        //sphereMesh.position.set(  1, 2, 3);
        //sphereMesh.
        if (!viewer.overlays.hasScene('custom-scene1')) {
            viewer.overlays.addScene('custom-scene1');
        }

        viewer.overlays.addMesh(sphereMesh, 'custom-scene1');
        /*sphereMesh.translateX(1);
        sphereMesh.translateY(20);
        sphereMesh.translateZ(3);*/

        //alert(sphereMesh.geometry.attributes);*/

    }

    /*const handleScriptLoad = async () => {
        viewerLibraryLoaded = true;

        //viewerStyleLoaded && loadViewer(modelURL)
        //urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
        cargado1 = true;
        if (cargado1 && cargado2) {
            //urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlk1YXg4MUthUWZ1OUppZlU1b0M0M0E/dmVyc2lvbj0x';
            await launchViewer(modelURL);
        }

        setTimeout(() => {

            /*if (viewer) {
                viewer.refresh(true);
                viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true });
                viewer.loadExtension('MenuContextual');
                viewer.refresh();
                //launchViewer(urn);
            }
            //viewer.loadExtension('MenuContextual');

            //alert('se carga');
            //launchViewer(urn);

        }, 4000);
        setTimeout(() => {
            //viewer.loadExtension('MenuContextual');
            //viewer.loadExtension("NestedViewerExtension", { filter: ["2d", "3d"], crossSelection: true });
            //viewer.refresh();
        }, 8000);

        //loadViewer(modelURL);
    }*/

    async function carga2() {



        var geom = new THREE.SphereGeometry(10, 8, 8);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var sphereMesh = new THREE.Mesh(geom, material);
        sphereMesh.position.set(12, 23, 43);
        //var scene = new THREE.scene(geom, material);
        //var sphereMesh = new THREE.(geom, material);
        //var scene = new THREE.Scene();
        //viewer.impl.scene.add(scene);
        //if (!viewerC.current.overlays.hasScene(scene)) {
            //viewerC.current.overlays.addScene(scene);
            //viewerC.current.impl.scene.add(scene);
        //}
        if (!viewerC.current.overlays.hasScene('custom-scene')) {
            viewerC.current.overlays.addScene('custom-scene');
            //viewer.impl.scene.add('custom-scene');
        }
        //alert('hola');
        //viewerC.current.impl.scene.add(sphereMesh);

        //scene.background = new THREE.Color(0x2a3b4c);
        //alert('carga2');
        viewerC.current.overlays.addMesh(sphereMesh as THREE.Object3D, 'custom-scene');
        
        //viewerC.current.refresh();


        //var urn = getParameterByName('urn');
        //alert('esta es la funcion');
        //seleccionados='c884ae1b-61e7-4f9d-0001-719e20b22d0b-006f9464';
        //var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
        //var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
        
        
        /*if (viewer)
            highlightRevit(seleccionados);*/
        /*var geom = new THREE.SphereGeometry(1, 2, 2);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        var sphereMesh = new THREE.Mesh(geom, material);
        //var scene = new THREE.scene(geom, material);
        var scene = new THREE.Scene();
        scene.add(sphereMesh);
        //viewerC.current?.overlays.addMesh(sphereMesh, scene.toString());
        //viewerC.current?.impl.scene.add(scene);
        sphereMesh.position.set(1, 2, 3);

        var geometry = new THREE.BoxGeometry(1,2,3);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube); 

        if (!viewerC.current?.overlays.hasScene(scene)) {
            viewerC.current?.overlays.addScene(scene);
            //viewerC.current.impl.scene.add(scene);
        }

        viewerC.current?.refresh();

        if (!viewerC.current.overlays.hasScene('custom-scene')) {
            viewerC.current.overlays.addScene('custom-scene');
        }

        viewerC.current.overlays.addMesh(cube, 'custom-scene');*/

        /*var geometry = new THREE.BoxGeometry(1,2,3);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var mesh = new THREE.Mesh(geometry, material);

        
        var ext = viewerC.current.getExtension('Autodesk.Viewing.SceneBuilder');

        var modelBuilder = await ext.addNewModel({
            conserveMemory: false,
            modelNameOverride: 'My Model Name'
        });
        var purple = new THREE.MeshPhongMaterial({
            color: new THREE.Color(1, 0, 1)
        });
        modelBuilder.addMaterial('purple', purple);    
        //var box = new THREE.BufferGeometry().fromGeometry(new THREE.BoxGeometry(10, 10, 10));
        let id = modelBuilder.addGeometry(geometry);
        var transform1 = new THREE.Matrix4().compose(
            new THREE.Vector3(-15, 0, 0),
            new THREE.Quaternion(0, 0, 0, 1),
            new THREE.Vector3(1, 1, 1)
        );
        modelBuilder.addFragment(1, 'purple', transform1);        
        var red = new THREE.MeshPhongMaterial({
            color: new THREE.Color(1, 0, 0)
        });
        //let torus = new THREE.BufferGeometry().fromGeometry(new THREE.TorusGeometry(10, 2, 32, 32) as any);
        
        const transform = new THREE.Matrix4().compose(
            new THREE.Vector3(19, 0, 0),
            new THREE.Quaternion(0, 0, 0, 1),
            new THREE.Vector3(1, 1, 1)
        );
        //modelBuilder.addFragment(torus, red, transform);

        //let mesh = new THREE.Mesh(torus, purple);
        mesh.matrix = new THREE.Matrix4().compose(
            new THREE.Vector3(0, 12, 12),
            new THREE.Quaternion(0, 0, 0, 1),
            new THREE.Vector3(1, 1, 1)
        );
        mesh.dbId = 100;    // Set the database id for the mesh
        modelBuilder.addMesh(mesh);*/

        //var sphereMesh = new THREE.(geom, material);
        //var scene = new THREE.Scene();
        //viewer.impl.scene.add(scene);
        /*if (!viewer?.overlays.hasScene(scene.toString())) {
            viewer?.overlays.addScene(scene.toString());
            //viewer.impl.scene.add('custom-scene');
        }*/


        /*if (!viewer.overlays.hasScene('custom-scene')) {
            viewer.overlays.addScene('custom-scene');
            //viewer.impl.scene.add('custom-scene');
        }*/
        //alert('hola');
        //viewer.impl.scene.add(sphereMesh);

        //scene.background = new THREE.Color(0x2a3b4c);
        //alert('carga2');
        //alert('mostrado');
        handleScriptLoad2();
        onModelLoaded1(viewerC.current);
        //var geom1 = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        //var material_red = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        /*var material_red = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        //add material red to collection
        viewer.impl.matman().addMaterial('ADN-Material' + 'red', material_red, true);
        var material_green = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
        //add material green to collection
        viewer.impl.matman().addMaterial('ADN-Material' + 'green', material_green, true);
        //get bounding box of the model
        var boundingBox = viewer.model.getBoundingBox();
        var maxpt = boundingBox.max;
        var minpt = boundingBox.min;
        var xdiff = maxpt.x - minpt.x;
        var ydiff = maxpt.y - minpt.y;
        var zdiff = maxpt.z - minpt.z;
        //set a nice radius in the model size
        var niceRadius =
            Math.pow((xdiff * xdiff +

                ydiff * ydiff +

                zdiff * zdiff), 0.5) / 10;
        //createsphere1 and place it at max point of boundingBox
        var sphere_maxpt = new THREE.Mesh(new THREE.SphereGeometry(niceRadius, 2000), material_red);
       //sphere_maxpt.geometry.attributes.position.set(maxpt.x, maxpt.y, maxpt.z);
        sphere_maxpt.position.set(maxpt.x, maxpt.y, maxpt.z);
        //create  sphere2 and place it at
        //min point of boundingBox
        var sphere_minpt =
            new THREE.Mesh(
                new THREE.SphereGeometry(
                    niceRadius, 30),
                material_green)
        sphere_minpt.position.set(minpt.x, minpt.y, minpt.z);*/
        //add two spheres to scene
        /*viewer.impl.scene.add(sphere_maxpt);
        viewer.impl.scene.add(sphere_minpt);
        viewer.impl.scene.updateMatrixWorld(true);
        sphere_maxpt.matrixWorld.setPosition(new THREE.Vector3(1, 2, 3));
        sphere_minpt.matrixWorld.setPosition(new THREE.Vector3(10, 10, 10));
        viewer.impl.scene.updateMatrix();
        //update the viewer       
        viewer.impl.invalidate(true);
       const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const mesh = new THREE.Mesh( geometry, material );
        
        if (!viewer.overlays.hasScene('custom-scene')) {
            viewer.overlays.addScene('custom-scene');
        }

        viewer.overlays.addMesh(mesh, 'custom-scene');

        const geometry1 = new THREE.BoxGeometry(20, 20, 20, 20, 20, 20); 
        const material2 = new THREE.MeshBasicMaterial({ wireframe: true }); 
        const cube1 = new THREE.Mesh(geometry1, material2); 
        viewer.overlays.addMesh(cube1, 'custom-scene');*/
        //alert('llego');
        //viewer.refresh();



        /*var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);

        //add camera
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //add geometry
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;
        
        
        //animation
        var animate = function(){
            requestAnimationFrame(animate);

            //cube.rotateX(0.01);
            //cube.rotateY(0.01);
            cube.rotation.y += 0.01;
            
            renderer.render(scene, camera);

        }

        //animate();
        viewer.overlays.addMesh(cube, scene);*/

        //viewer.loadExtension("Botones");
        //viewer.loadExtension("MenuContextual");
        //viewer.loadExtension("NestedViewerExtension", { filter: ["2d","3d"], crossSelection: true });


        /*$('#LateralToolbar.ControlGroup').css({
            'top':'200px',
            'background-color':'red'
        });*/

        // CrearPanel('');






    }


    function highlightRevit(idsRevit:any) {
        // Every Forge Viewer model has an ‘ExternalId Mapping’
        // this mapping is an object that has as keys the
        if (viewerC.current && viewerC.current.model)
            viewerC.current.model.getExternalIdMapping( (mapping:any) => {
                configureElementByUniqueIdAndMapping(idsRevit, mapping);
            } , ()=>{});
    }
    
    function configureElementByUniqueIdAndMapping(idsRevit:any, mapping:any) {
        var elementsDbId = [];
        var idsRevitArray = idsRevit.split(',');
        for (var uniqueId in idsRevitArray) {
            const elementDbId = mapping[idsRevitArray[uniqueId]];
            if (elementDbId) {
                elementsDbId.push(elementDbId);
            }
        }
        viewerC.current?.isolate(elementsDbId);
        viewerC.current?.fitToView(elementsDbId);
    }

    // @urn the model to show
    // @viewablesId which viewables to show, applies to BIM 360 Plans folder
        
    
    
    function launchViewer(urn:string, viewableId = '') {
        //alert(viewerLibraryLoaded1);
        console.log('RENDERIZANDO EL VIEWER  ***********************');
        console.log(token);
        /*var options = {
            env: 'AutodeskProduction',
            accessToken: token.access_token,
            //api: 'derivativeV2' + (atob(urn.replace('_', '/')).indexOf('emea') > -1 ? '_EU' : ''), // handle BIM 360 US and EU regions            
        };*/
        var options = {
            env: 'AutodeskProduction',
            accessToken: token.access_token
        };        
        //alert('se cargo'+'urn= '+urn+' acces token=');
        //if (!Autodesk) return;
        var documentId = 'urn:' + urn;   
        Autodesk.Viewing.Initializer(options, () => {
            const config = {
                extensions: ['Autodesk.VisualClusters', 'Autodesk.DocumentBrowser', 'MenuContextual']
            };
        if (viewerC.current) viewerC.current=null;
        viewerC.current = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer')!);
        ///setViewer( new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer')!) );
        //viewerC.current=viewerC.current;
        
        viewerC.current?.start();
        Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
        viewerC.current!.autocam.shotParams.destinationPercent! = 3;
        viewerC.current!.autocam.shotParams.duration = 3;
        
        setTimeout(() => {
            //alert();
            const options1:any = {tintColor: {r: 0, g: 1, b: 0},gizmoOffsetRight:10};
            viewerC.current?.loadExtension('Autodesk.Section',options1);
            viewerC.current?.loadExtension('Autodesk.VisualClusters');
            viewerC.current?.loadExtension('Autodesk.DocumentBrowser');
            viewerC.current?.loadExtension('Autodesk.Viewing.SceneBuilder');
            viewerC.current?.loadExtension('MenuContextual');
            viewerC.current?.loadExtension('Autodesk.DataVisualization');
            viewerC.current?.loadExtension("Autodesk.AEC.LevelsExtension");
            
            if (selectedTheme==='material3-dark'){
                viewerC.current?.setTheme('dark-theme');
                viewerC.current?.setLightPreset(3);    
            }else{
                viewerC.current?.setTheme('light-theme');
                viewerC.current?.setLightPreset(0);
            }
            setTimeout(() => {
                carga2();                
            }, 2000);
        }, 2000);
        
        
    });        
        
        /*Autodesk.Viewing.Initializer(options, () => {
            const config = {
                extensions: ['Autodesk.VisualClusters', 'Autodesk.DocumentBrowser', 'Autodesk.Section', 'Autodesk.BIM360.Minimap', 'Autodesk.ViewCubeUi', 'Autodesk.AEC.Minimap3DExtension', 'Autodesk.AEC.Minimap3DExtension', 'MenuContextual', 'Botones', 'Autodesk.DataVisualization']
            /*};
            viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer')!, config);
            //viewer = new Autodesk.Viewing.GuiViewer3D(container.current, config);
            viewer.start();
            var documentId = 'urn:' + urn;
            Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
            //const Cronos = new Autodesk.DataVisualization.UI.ChronosTimeSlider('');
            if (!viewer) return;
            if (!viewer.autocam) return;
            // smooth navigation...
            viewer.autocam.shotParams.destinationPercent = 3;
            viewer.autocam.shotParams.duration = 3;
            //viewer.setTheme('light -theme');
            viewer.setTheme('light-theme');
            viewer.setLightPreset(0);
            const options = {tintColor: {r: 0, g: 1, b: 0},gizmoOffsetRight:10}
            viewer.loadExtension('Autodesk.Section',options);
            
        });*/



        function onDocumentLoadSuccess(doc:any) {
            // if a viewableId was specified, load that view, otherwise the default view

            //var items = doc.getRoot().find({ role: '3d', type: 'geometry' });
            //var items = doc.getSubItemsWithProperties(doc.getRoot(),{ role: '3d', type: 'geometry' },false);

            /*var Items = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRoot(), {
                'type' : 'geometry',
                'role' : '2d'
            }, false);*/
            var viewables1 = doc.getRoot().search({'type':'geometry'});
            console.log('vistas del modelo', viewables1);
            //viewer.loadDocumentNode(doc, viewables1[6]);
            var viewables = (viewableId ? doc.getRoot().findByGuid(viewableId) : doc.getRoot().getDefaultGeometry());
            //setViewables([viewables1]);
            actualViewables.current=[viewables1];
            //var items = doc.getRoot().find({ role: '3d', type: 'geometry' });
            /*var arrg = [];
            var selectedItems = [];
            const employees:any = [];
            const employees1 = [];
            const employees2 = [];
            var elementos = [];
            employees.push({'ID': '','Name': ''});
            employees2.push({'ID': '','Name': '','Categoria': '',});
            employees1.push({'ID': '','Name': '','Familia': '','Categoria': ''});*/
            //var E_Id = '', E_cat = '', E_tip = '', E_ext = '';
            
            if (!viewerC.current) return;
            console.log('antes binded',viewerC.current);
            viewerC.current.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, onSelectionBinded);
            viewerC.current.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, (e:any)=>{
                console.log('*****Cambindo vista',e)
                
                setCharged(!charged);
                /*const ObteinData = (async ()=>{
                    auxTree.current=[];
                    viewerC.current?.getObjectTree(function (objTree:any) {
                      //console.log(objTree);
                      objTree.enumNodeChildren(
                          objTree.getRootId(),
                          function (dbId:any) {
                              var objSelected = dbId;
                              
                              viewerC.current.getProperties(objSelected, (props:any) => {
                                //console.log(props);
                                var it = viewerC.current.model.getData().instanceTree;
                                let hijos = props.properties.filter((data:any)=>data.displayName==='child').map((data:any)=>{
                                  var nodeFinalName = it.getNodeName(data.displayValue)
                                  //if (nodeFinalName==='') return;
                                  //if (nodeFinalName?.includes('ANALY')) return;
                                  return ({
                                    id:data.displayValue,
                                    name:nodeFinalName,
                                    type:'family',
                                    expanded:false,
                                    children:[]
                                  })
                                });
                                //console.log('hijos', hijos);
                                auxTree.current=[...auxTree.current,{id:props.dbId,name:props.name, type:'category' , expanded:false, children:[]}]
                              })
                          })
                      })      
                      setTimeout(() => {
                        var it = viewerC.current.model.getData().instanceTree;
                        for (let i=0;i<auxTree.current.length;i++)
                          for (let j=0;j<auxTree.current[i].children.length;j++){
                            let prophijos:any=[];
                            const ObteinProps1=(props1:any) => {
                              //console.log(props1)  
                              prophijos = props1.properties.filter((data1:any)=>data1.displayName==='child').map((data1:any)=>{
                                var nodeFinalName1 = it.getNodeName(data1.displayValue)                  
                                //if (nodeFinalName1==='') return;
                                //if (nodeFinalName1?.includes('ANALY')) return;
                                return ({
                                  id:data1.displayValue,
                                  name:nodeFinalName1,
                                  type:'type',
                                  expanded:false,
                                  children:[]
                                })
                              });
                              auxTree.current[i].children[j].children=prophijos;
                            }
                            viewerC.current.getProperties(auxTree.current[i].children[j].id, ObteinProps1);
                          }
              
                        setTimeout(() => {
                          var it = viewerC.current.model.getData().instanceTree;
                          for (let i=0;i<auxTree.current.length;i++)
                            for (let j=0;j<auxTree.current[i].children.length;j++)
                              for (let k=0;k<auxTree.current[i].children[j].children.length;k++){  
                              let prophijos:any=[];
                              const ObteinProps1=(props1:any) => {
                                prophijos = props1.properties.filter((data1:any)=>data1.displayName==='child').map((data1:any)=>{
                                  var nodeFinalName1 = it.getNodeName(data1.displayValue)
                                  //if (nodeFinalName1==='') return;
                                  //if (nodeFinalName1?.includes('ANALY')) return;  
                                  return ({
                                    id:data1.displayValue,
                                    name:nodeFinalName1,
                                    type:'element',
                                    expanded:false,
                                    children:[]
                                  })
                                });
                                //console.log(prophijos)
                                auxTree.current[i].children[j].children[k].children=prophijos;
                              }
                              viewerC.current.getProperties(auxTree.current[i].children[j].children[k].id, ObteinProps1);
                            }
                            setTimeout(() => {
                              setProjectTree(auxTree.current);
                            }, 1300);
                        }, 1300);
                      }, 1300);
                  })();*/
                
                /*
                
                var instanceTree = e.model.getData().instanceTree;
                var rootId = instanceTree.getRootId();
                //var rootId = instanceTree.getNodeName(2839);
                var indexinNames = instanceTree.nodeAccess.dbIdToIndex[2839];
                var indexinStrings = instanceTree.nodeAccess.names[indexinNames];
                
                console.log('id of topology', indexinNames);
                console.log('ids of topology', indexinStrings);
                var alldbId:any = [];
                if (!rootId) {
                    return alldbId;
                }
                var queue:any = [];
                queue.push(rootId);
                while (queue.length > 0) {
                    var node = queue.shift();
                    alldbId.push(node);
                    instanceTree.enumNodeChildren(node, function(childrenIds:any) {
                        queue.push(childrenIds);
                        viewerC.current.getProperties(childrenIds, (props:any) => {
                            //console.log(props);
                        });
                    });
                }
                console.log('Alll',alldbId);



                */


            });

            viewerC.current.loadDocumentNode(doc, viewables).then( (i:any) => {
                console.log('estas son las vistas', i);
                //elementos = [];
                
                
                
                /*
                    viewerC.current.getObjectTree(function (objTree:any) {
                    console.log(objTree);
                    objTree.enumNodeChildren(
                        objTree.getRootId(),
                        function (dbId:any) {
                            console.log(dbId);
                            //var DBids = viewer.getSelection();                            
                            var objSelected = dbId;
                            viewerC.current.getProperties(objSelected, (props:any) => {console.log(props);})
                        })
                    })
                
                */


                
                
                }, true);
            };





                

                /*var instanceTree = viewerC.current.model.getData().instanceTree;
                function getAlldbIds (rootId:any) {
                    var alldbId:any = [];
                    if (!rootId) {
                        return alldbId;
                    }
                    var queue = [];
                    queue.push(rootId);
                    while (queue.length > 0) {
                        var node = queue.shift();
                        alldbId.push(node);
                        instanceTree.enumNodeChildren(node, function(childrenIds:any) {
                            queue.push(childrenIds);
                        });
                    }
                    return alldbId;
                }
                
                var rootId = instanceTree.getRootId();
                const ll = getAlldbIds(rootId);
                console.log('all dbids', ll)*/
                
                
            
                //viewerC.current.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, PonerProps);


                /*const material = new THREE.LineBasicMaterial({color: 0xffff00, linewidth: 2});
                const geometry = new THREE.Geometry();
                geometry.vertices.push(
                    new Vector3(-10, 0, 0),
                    new Vector3(0, 10, 0),
                    new Vector3(10, 0, 0)
                );

                const line = new THREE.Line(geometry, material);

                viewerC.current.impl.createOverlayScene('pointclouds');
                viewerC.current.impl.addOverlay('pointclouds', line);

                viewerC.current.addEventListener(
                    Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, (args:any) => {
                        //and can't add in this place
                        const material = new THREE.LineBasicMaterial({color: 0xffff00, linewidth: 2});
                        const geometry = new THREE.Geometry();
                        geometry.vertices.push(
                            new THREE.Vector3(-10, 0, 0),
                            new THREE.Vector3(0, 10, 0),
                            new THREE.Vector3(10, 0, 0)
                        );

                        const line = new THREE.Line(geometry, material);

                        viewerC.current.impl.createOverlayScene('pointclouds');
                        viewerC.current.impl.addOverlay('pointclouds', line);
                    })*/

            /*setTimeout(() => {
                PonerProps(15);
            }, 500);*/
            
            //viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, PonerProps);
            //viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, PonerProps);
            // onModelLoaded1(viewer);
            setTimeout(() => {
                init22();    
            }, 1500);
            
            /*viewer.hideModel(doc);
            viewer.showModel(doc);
            if (viewer.areAllVisible())
            alert('se cargo bien')
            else
            alert('no se cargo')*/
            //alert();
            //viewer.setBackgroundColor(red, green, blue, red2, green2, blue2)
            //viewer?.setBackgroundColor(0, 0, 0, 0, 0, 0);
            /*$(".property-name aggregate-name").on( "click", function() {
                alert($( this ).text());
            })*/

        }


        function verseleccionado() {
            //let viewerImpl = viewer!.impl;

            /*this.activate = (name) => {
                this.active = true;
            };
    
            this.deactivate = (name) => {
                this.clearMarkedObject(this.markedFragments);
                this.active = false;
            };*/

            //this.handleSingleClick = (event, button) => {
            //if (button === 0) {
            //const res = [];
            //const vpVec = viewerImpl.clientToViewport(event.canvasX, event.canvasY);
            /* const dbId = viewerImpl
                 .renderer()
                 .idAtPixel(vpVec.x, vpVec.y, res, [viewerImpl.renderer().getOverlayIdTarget()]);
 
             if (true) {
                 let test = viewerImpl.hitTestViewport(vpVec, false);
                 console.log(test);
             }*/

            // "dbId == -1" when nothing is clicked.

            // }



        }


        async function onSelectionBinded(event:any) {
            //alert('hola');
            //var currSelection = viewerC.current!.getSelection();
            //var domElem = document.getElementById('MySelectionValue');
            //console.log(event)
            //console.log(currSelection)
            /*let vector = new THREE.Vector3();
            event.object.getWorldPosition(vector);
            console.log(vector);*/

            //domElem.innerText = currSelection.length /*+ " " + vector.x + "," + vector.y + "," + vector.z*/;
            console.log('Este es el evento de cambiar ', event);

            
            //verseleccionado();
            //alert(event.clientX);

            /*var uniqueIds = [];
            var DBids = viewer.getSelection();
            var n = 0;
            for (var uniqueId of DBids) {
                var objSelected = viewer.getSelection()[n];
                n = n + 1;
                console.log('Este es el objeto seleccionado',objSelected);
            }*/

            //console.log('Estas son las props');
            var uniqueIds = [];
            var DBids = viewerC.current!.getSelection();            
            // Use the model's getPropertySet to get the PropertySet instance for the specified dbIds
            //const propSet = viewerC.current!.model.getPropertySet(DBids);
               // iterate, aggregate, etc
               //console.log('selection', DBids);
               //console.log('properties', propSet);
            

            /*const obtener = ((props:any)=>{
                console.log('estas son las propiedades', props);
                //return (props);
                //data.push(props)
                data.push({Name:`${props.dbId}-${props.name}`, dbId:props.dbId})
            })
            
            viewerC.current!.getProperties(objSelected, obtener);*/

            //setSeleccionaE1(DBids);
            /*const obj={
    DataA:[{Name:'Nombre2', dbId:'0101'},{Name:'Nombre3', dbId:'0105'}],
    DataB:[{},{}]
}*/
            
           /* let array:any=[];
            const obtener = (props:any, array:any) => {
                //await array.push(props);
                //array = [...array, props];
                //console.log('Este e el array',  array);    
                console.log('Este e el array',  array);    
                setSelectedItems({ DataModel:array, DataList:[] });
            }*/
            
            

            var n = 0;
            const data:any = [];

            if (DBids.length===1){
                const obtener = ((props:any)=>{
                    console.log('estas son las propiedades', props);
                    setActualProperties(props.properties);
                    data.push({Name:`${props.dbId}-${props.name}`, dbId:props.dbId})
                })
                viewerC.current!.getProperties(DBids[0], obtener);
            }
            else{

                const obtener2 = ((props:any)=>{
                    console.log('estas son las propiedades', props);
                    //setActualProperties(props.properties);
                    //return (props);
                    //data.push(props)
                    
                })
                
                viewerC.current.model.getPropertySet(DBids, obtener2);

                //viewerC.current!.getBulkProperties(dbIds, onSuccessCallback, onErrorCallback)


                for (var uniqueId of DBids) {
                    var objSelected = viewerC.current!.getSelection()[n];
                    n = n + 1;
                    //const el = proyects.DataElementos?.find(x=>x.Id===objSelected);
                    //console.log('elementoss', proyects?.DataElementos);
                    //console.log('elemento', el);
                    //const elems=[];
                    
                    /*viewerC.current!.getProperties(objSelected, (props:any) => {
                        uniqueIds.push(props.externalId);
                        if (n == DBids.length) {
                            //callbackObj.showMessage(uniqueIds);
                            //callbackObj.returnex(uniqueIds);
                            //alert(uniqueIds);
                            console.log(props);
                            //9c9538fd-af40-4b3d-bd89-f8e4acac1fd8-000525ae
                        }
                    })*/
                    /*viewerC.current!.getProperties(objSelected, (props:any)=>{
                        //array = [...array, {Name:`${props.dbId}-${props.name}`, dbId:props.dbId}];
                        array.push({Name:`${props.dbId}-${props.name}`, dbId:props.dbId})
                        obtener([{Name:`${props.dbId}-${props.name}`, dbId:props.dbId}],array );
                    });*/
                    
                    const obtener = ((props:any)=>{
                        //console.log('estas son las propiedades', props);


                        //setActualProperties(props.properties);
                        //return (props);
                        //data.push(props)
                        data.push({Name:`${props.dbId}-${props.name}`, dbId:props.dbId})
                    })
                    
                    viewerC.current!.getProperties(objSelected, obtener);
                }

            }
            
            setTimeout(async() => {
                //console.log('estas son las propiedades', await data);
                setSelectedItems({ DataModel:await data, DataList:[] });
                
            }, 600);


            let viewerImpl = viewerC.current!.impl;

            /*this.activate = (name:any) => {
                this.active = true;
            };
    
            this.deactivate = (name) => {
                this.clearMarkedObject(this.markedFragments);
                this.active = false;
            };*/

            //this.handleSingleClick = (event, button) => {
            //if (button === 0) {
            const res:any = [];
            const vpVec = viewerImpl.clientToViewport(event.canvasX, event.canvasY);
             const dbId = viewerImpl
                 .renderer()
                 .idAtPixel(vpVec.x, vpVec.y, res, [viewerImpl.renderer().getOverlayIdTarget()]);

                 /*var geom = new THREE.SphereGeometry(2, 2, 2);
                 var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                 var sphereMesh = new THREE.Mesh(geom, material);
                 sphereMesh.position.set(vpVec.x, vpVec.y, res);
                 if (!viewerC.current.overlays.hasScene('custom-scene1')) {
                     viewerC.current.overlays.addScene('custom-scene1');
                     //viewer.impl.scene.add('custom-scene');
                 }
                 viewerC.current.overlays.addMesh(sphereMesh as THREE.Object3D, 'custom-scene1');
                 console.log(vpVec.x, vpVec.y, res);*/

             if (true) {
                 let test = viewerImpl.hitTestViewport(vpVec, false);
                 console.log(test);

         

             }

             //"dbId == -1" when nothing is clicked.

            //}



        }

        function PonerProps(event:any) {
            $('#forgeViewer #LateralToolbar.ControlGroup').css({
                'background-color': 'black',
                'border-radius': '10px',
                'display': 'block'
            });
    
            $('#forgeViewer #guiviewer3d-toolbar').css({
                'background-color': 'rgba(255,255,255,0.10)',
                'border-radius': '5px',
                'display': 'block'
            });
            $('#forgeViewer #settingsTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)'           ,
                'display': 'block'
            });
            $('#forgeViewer #modelTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)',
                'display': 'block'
            });
            $('#forgeViewer #navTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)',
                'display': 'block'
            });
    
            $('#forgeViewer #toolbar-documentModels').css({
                'background-color': 'rgba(1,1,1,0.55)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.90)',
                'display': 'block'
            });
        }
        /*function PonerProps(event) {
            $('#LateralToolbar.ControlGroup').css({
                'background-color': '#fff',
                'border-radius': '10px'
            });

            $('#guiviewer3d-toolbar').css({
                'background-color': 'rgba(255,255,255,0.10)',
                'border-radius': '5px'
            });
            $('#settingsTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)'
            });
            $('#modelTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)'
            });
            $('#navTools').css({
                'background-color': 'rgba(255,255,255,0.15)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.80)'
            });

            $('#toolbar-documentModels').css({
                'background-color': 'rgba(1,1,1,0.55)',
                'border-radius': '15px',
                'color': 'rgba(1,1,1,0.90)'
            });

            //console.log('Este es el evento', event);
            onModelLoaded1(viewer);


        }*/


        function onDocumentLoadFailure(viewerErrorCode:any) {
            console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);            
        }

        function addIds(DBids:any, uniqueIds:any, callback:any) {
            var n = 0;
            for (var uniqueId of DBids) {
                var objSelected = viewerC.current!.getSelection()[uniqueId];
                viewerC.current!.getProperties(objSelected, (props:any) => {
                    uniqueIds.push(props.externalId);
                    n = n++;
                    if (n == DBids.length) {
                        callback(null, uniqueIds)
                    }
                });

            }

        }

        

        /**
         * Handles `Autodesk.Viewing.GEOMETRY_LOADED_EVENT` event that is sent when a model has been completely loaded in the viewer.
         *
         * @param {Autodesk.Viewing.GuiViewer3D} viewerC.current The viewer in which the model is loaded.
         */
        async function onModelLoaded1(viewer:any) {
            const dataVizExt = viewer.getExtension("Autodesk.DataVisualization");
            const DATAVIZEXTN = Autodesk.DataVisualization?.Core;
            if (!DATAVIZEXTN) { return; }
            
            var styleMap:any;
            
            const SensorStyleDefinitions = {
                co2: {
                    url: `uno.svg`,
                    color: 0xffffff,
                },
                temperature: {
                    url: `uno.svg`,
                    color: 0xffffff,
                },
                default: {
                    url: `uno.svg`,
                    color: 0xffffff,
                },
            };

            // Create model-to-style map from style definitions.
            /*Object.entries(SensorStyleDefinitions).forEach(([type, styleDef]) => {

                styleMap['default'] = new DATAVIZEXTN.ViewableStyle(
                    DATAVIZEXTN?.ViewableType.SPRITE,
                    new THREE.Color(0xffffff) ,
                    `uno.svg`
                );
            });*/

            /*styleMap['default'] = new DATAVIZEXTN.ViewableStyle(
                DATAVIZEXTN?.ViewableType.SPRITE,
                new THREE.Color(0xffffff) ,
                `uno.svg`
            );*/

            const div = document.createElement("div");  // <div></div>
            const app = document.getElementById('root'); // <div id="app">App</div>
            const div1 = document.createElement("div1");  // <div></div>
            const div2 = document.createElement('div2'); // <div id="app">App</div>
            const div3 = document.createElement("div3");  // <div></div>
            const div4 = document.createElement('div4'); // <div id="app">App</div>


            const viewableData = new DATAVIZEXTN.ViewableData();

            /*await viewableData.finish();
            dataVizExt.addViewables(viewableData);
            dataVizExt.removeAllViewables();*/


            viewableData.spriteSize = 20;
            let startId = 1;

            devices.forEach((device) => {
                //let style = styleMap[device?.type] || styleMap["default"];
                let style = new DATAVIZEXTN.ViewableStyle(DATAVIZEXTN?.ViewableType.SPRITE,new THREE.Color(0xffffff),`uno.svg`);
                const viewable = new DATAVIZEXTN.SpriteViewable(new THREE.Vector3(device.position.x, device.position.y, device.position.z), style, startId)!;
                viewableData.addViewable(viewable);
                startId++;
            });
            await viewableData.finish();
            if (!dataVizExt) return;
            dataVizExt.addViewables(viewableData);

            /**
             * Called when a user clicks on a Sprite Viewable
             * @param {Event} event 
             */
            function onItemClick(event:any) {
                //alert('click');
                //alert(devices[event.dbId - 1].position.x);
                //alert(event.dbId);
            }

            /**
             *  Called when a user hovers over a Sprite Viewable 
             * @param {Event} event 
             */

            function onItemHovering(event:any) {
                //alert();
                console.log("Show tooltip here", event);
                console.log("Show tooltip here", event.originalEvent);
                //alert(event.point);
                //alert(viewer.model.getUpVector());
                 //const currAppState = appStateRef.current;

                div.style.display = 'none';
                posX = event.originalEvent.normalizedX;
                posY = event.originalEvent.normalizedY;
                //posZ=event.point.z;
                if (event.dbId) {
                    //alert(event.dbId);
                    //console.log(devices[event.dbId].position.x);
                    //alert(devices[event.dbId-1].position.x);
                    //alert(event.originalEvent.clientX);
                    
                    
                    
                    
                    
                    const div = document.createElement("div");
                    div1.style.fontSize = '1rem';
                    div.textContent = "Msj.";
                    var tempX = event.originalEvent.clientX + document.body.scrollLeft;
                    var tempY = event.originalEvent.clientY + document.body.scrollTop;
                    /*const app = document.createElement("div"); // <div></div>
                    app.id = "app"; // <div id="app"></div>
                    app.appendChild(div);*/
                    //var ClientRect = div.getBoundingClientRect();
                    /*var ClientRect = elemento.getBoundingClientRect();
                    return { //objeto
                    x: Math.round(evt.clientX - ClientRect.left),
                    y: Math.round(evt.clientY - ClientRect.top)
                        }
                        
                        
                        */



                        
                    div.appendChild(div1);
                    div1.textContent = 'Ejemplo ' + event.dbId;
                    div1.style.textAlign = 'center';
                    //div.textContent = "Ejemplo "+ event.dbId;                // <div>Ejemplo</div>
                    div2.innerHTML = 'Otro dato';
                    //div1.classList.add('card');
                    //div1.classList.add('card-header');
                    div.classList.add('element');
                    div1.classList.add('element');
                    //div2.classList.add('card-title');
                    //div3.classList.add('card-header');


                    div1.style.fontSize = '0.8rem';
                    //div1.style.border = '1px 1px 1px 2px rgba(255,255,255,0.95)';

                    //div1.style.backgroundColor = 'rgba(1,1,1,0.85)';
                    //div1.style.width = '100%';

                    //div.appendChild(div2);
                    div2.style.fontSize = '0.7rem';

                    //div.style.backgroundColor = 'rgba(1,1,1,0.65)';
                    //div.style.alignContent = 'center';
                    div.style.borderRadius = '10px';
                    div.style.position = 'absolute';
                    div.style.zIndex = '999';
                    div.style.fontSize = '1.7rem';
                    div.style.width = '100px';
                    div.style.height = '70px';
                    //div.style.top = event.originalEvent.pageY;
                    //div.style.left = event.originalEvent.pageX;
                    //div.style.top = event.originalEvent.pageY+'px';
                    div.style.top = (event.originalEvent.pageY - 80) + 'px';
                    div.style.left = (event.originalEvent.pageX - 65) + 'px';
                    div.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
                    //div.style.left = posX+'px';
                    div.style.display = 'block';
                    //div.style.visibility = 'block';
                    app!.insertAdjacentElement("beforebegin", div);

                    setTimeout(() => {
                        div.style.display = 'none';    
                    }, 1800);
                    



                    //determina un margen de pixels del div al raton
                    //div.insertAdjacentElement("beforebegin", div1);
                    //div.insertAdjacentElement("beforebegin", div2);
                    /* window.currentMouseX = e.pageX;
                     window.currentMouseY = e.pageY;*/
                    //La variable IE determina si estamos utilizando IE

                    //Si no utilizamos IE capturamos el evento del mouse

                    /*var tempX = 0;
                    var tempY = 0;
                    //if (IE) { //para IE
                        tempX = event.clientX + document.body.scrollLeft;
                        tempY = event.clientY + document.body.scrollTop;*/
                    /*} else { //para netscape
                        tempX = event.pageX;
                        tempY = event.pageY;
                    }
                    if (tempX < 0) { tempX = 0; }
                    if (tempY < 0) { tempY = 0; }*/

                    //modificamos el valor del id "posicion" para indicar la posicion del mouse
                    //document.getElementById('posicion').innerHTML = "PosX = " + tempX + " | PosY = " + tempY;

                    /*document.getElementById('flotante').style.top = tempY;
                    document.getElementById('flotante').style.left = tempX;
                    document.getElementById('flotante').style.display = 'block';*/




                    /*if (event.hovering && currAppState.dbId2DeviceIdMap) {
                        const deviceId = currAppState.dbId2DeviceIdMap[event.dbId];
                        const device = currAppState.session.dataStore.getDevice(deviceId);
        
                        if (device) {
                            const position = device.position;
                            const mappedPosition = currAppState.viewer.impl.worldToClient(position);
        
                            // Accounting for vertical offset of viewer container.
                            const vertificalOffset = event.originalEvent.clientY - event.originalEvent.offsetY;
        
                            setHoveredDeviceInfo({
                                id: deviceId,
                                xcoord: mappedPosition.x,
                                ycoord: mappedPosition.y + vertificalOffset - SpriteSize / viewer.getWindow().devicePixelRatio,
                            });
                        }
                    } else {
                        if (hoveredDeviceInfoRef.current && hoveredDeviceInfoRef.current.id != null) {
                            setHoveredDeviceInfo({});
                        }
                    }*/
                    /*const positionx = event.originalEvent.clientX;
                    const positiony = event.originalEvent.clientY;
                     var hitTest = this.viewer.clientToWorld(event.originalEvent.clientX, event.originalEvent.clientY, true);
                     if (hitTest) {
                         let x = hitTest.point.x;
                         let y = hitTest.point.y;
                         let z = hitTest.point.z;
                     }*/


                    /*var screenPoint = {
                        x: event.clientX,
                        y: event.clientY
                    };
        
                    //get the selected 3D position of the object
        
                    //viewer canvas might have offset from the webpage.
        
                    let viewer_pos = viewer.container.getBoundingClientRect();
                    var hitTest = viewer.impl.hitTest(screenPoint.x - viewer_pos.x,
                        screenPoint.y - viewer_pos.y, true);
        
                    if (hitTest) {
                        alert(hitTest.intersectPoint.x+" "+hitTest.intersectPoint.y);
                        /*drawPushpin({
                            x: hitTest.intersectPoint.x,
                            y: hitTest.intersectPoint.y,
                            z: hitTest.intersectPoint.z
                        });*/
                    //}



                    //const mappedPosition = viewer.impl.worldToClient(position);

                }

                //alert('show');
            }

            const DataVizCore = Autodesk.DataVisualization.Core;
            viewerC.current.addEventListener(DataVizCore.MOUSE_CLICK, onItemClick);
            viewerC.current.addEventListener(DataVizCore.MOUSE_HOVERING, onItemHovering);


        }

        function init22() {
            
            //delegate the mouse click event
            $(viewerC.current?.container).bind("click", onMouseClick);

            //viewerC.current?.container.addEventListener("onclick", onMouseClick);
            //viewerC.current?.addEventListener("onclick", onMouseClick);
            //$(viewerC.current?.container).bind("dblclick", onMouseClick);
            //delegate the event of CAMERA_CHANGE_EVENT
            viewerC.current!.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, function (rt:any) {
                //find out all pushpin markups
                var $eles = $("div[id^='mymk']");
                var DOMeles = $eles.get();
                for (var index in DOMeles) {
                    //get each DOM element
                    var DOMEle = DOMeles[index];
                    var divEle = $('#' + DOMEle.id);
                    //get out the 3D coordination
                    var val = divEle.data('3DData');
                    var pushpinModelPt = JSON.parse(val);
                    //get the updated screen point
                    var screenpoint = viewerC.current!.worldToClient(new THREE.Vector3(
                        pushpinModelPt.x,
                        pushpinModelPt.y,
                        pushpinModelPt.z));
                    //update the SVG position.
                    divEle.css({
                        'left': screenpoint.x - pushpinModelPt.radius * 2,
                        'top': screenpoint.y - pushpinModelPt.radius
                    });
                }
            });
        }

        function onMouseClick(event:any) {
            console.log('diste click');
            
            if (ponerdato){

                var screenPoint = {
                    x: event.clientX,
                    y: event.clientY
                };
    
                //get the selected 3D position of the object
    
                //viewer canvas might have offset from the webpage.
    
                let viewer_pos = viewerC.current.container.getBoundingClientRect();
                var hitTest = viewerC.current.impl.hitTest(screenPoint.x - viewer_pos.x,
                    screenPoint.y - viewer_pos.y, true);
                
                if (hitTest) {
                    drawPushpin({
                        x: hitTest.intersectPoint.x,
                        y: hitTest.intersectPoint.y,
                        z: hitTest.intersectPoint.z
                    });

                }
    

            }
        }

        //generate a random id for each pushpin markup

        function drawPushpin(pushpinModelPt:any) {

            //convert 3D position to 2D screen coordination
            var screenpoint = viewerC.current!.worldToClient(
                new THREE.Vector3(pushpinModelPt.x,
                    pushpinModelPt.y,
                    pushpinModelPt.z));

            //build the div container
            //alert(pushpinModelPt.x + ' ' + pushpinModelPt.y);
            devices.push(
                {
                    position: {
                        x: pushpinModelPt.x,
                        y: pushpinModelPt.y,
                        z: pushpinModelPt.z,
                    },
                    type: "temperature",
                    sensorTypes: ["co2", "temperature"],
                });

                 var geom = new THREE.SphereGeometry(2, 2, 2);
                 var material = new THREE.MeshLambertMaterial({ color: 0x3D6979  });
                 var sphereMesh = new THREE.Mesh(geom, material);
                 sphereMesh.position.set(pushpinModelPt.x, pushpinModelPt.y, pushpinModelPt.z);
                 if (!viewerC.current.overlays.hasScene('custom-scene1')) {
                     viewerC.current.overlays.addScene('custom-scene1');
                     //viewer.impl.scene.add('custom-scene');
                 }
                 viewerC.current.overlays.addMesh(sphereMesh as THREE.Object3D, 'custom-scene1');
                 


            onModelLoaded1(viewerC.current);

        }

        const CargarPartidas = () => {
            var DBids = viewerC.current!.getSelection();
            var n = 0;
            for (var uniqueId of DBids) {
                //alert(uniqueId);

                var objSelected = viewerC.current!.getSelection()[0];
                viewerC.current!.getProperties(objSelected, (props:any) => {
                    var Idunico = props.externalId;
                    //alert(Idunico);
                    
                   

                       
                       
                    //T_uniqueIds.push(props.externalId);
                })

            }


        }


        /*function PanelBIM(viewer, container, id, title, options = '') {
            this.viewer = viewer;
            Autodesk.Viewing.UI.DockingPanel.call(this, container, id, title, options);
            //Autodesk.Viewing.UI.ModelStructurePanel
            // Style para docking panel
            this.container.classList.add('docking-panel-container-solid-color-a');
            this.container.style.top = "50px";
            this.container.style.left = "90px";
            //this.container.style.width = "auto";
            //this.container.style.height = "auto";
            this.container.style.width = "350px";
            this.container.style.height = "350px";

            this.container.style.resize = "auto";

            // creamos un div para contener el panel
            var div = document.createElement('div');
            div.style.margin = '5px';
            div.id = "ContenidoBIM";
            div.innerText = "Mi contenido";
            this.container.appendChild(div);
            // añadiremos elementos después
        }
        PanelBIM.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
        PanelBIM.prototype.constructor = PanelBIM;


        function PanelBIM1(viewer:any, container:any, id:any, title:any, options = ''):any {
            this.viewer = viewer;
            Autodesk.Viewing.UI.DockingPanel.call(this, container, id, title, options);
            //Autodesk.Viewing.UI.ModelStructurePanel
            // Style para docking panel
            this.container.classList.add('docking-panel-container-solid-color-a');
            this.container.style.top = "40px";
            this.container.style.left = "20px";
            //this.container.style.width = "auto";
            //this.container.style.height = "auto";
            this.container.style.width = "350px";
            this.container.style.height = "350px";

            this.container.style.resize = "auto";

            // creamos un div para contener el panel
            var div = document.createElement('div');
            div.style.margin = '5px';
            div.id = "ContenidoBIM1";
            div.innerText = "Mi contenido";
            this.container.appendChild(div);
            // añadiremos elementos después
        }
        PanelBIM1.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
        PanelBIM1.prototype.constructor = PanelBIM1;*/



        class MenuContextual extends Autodesk.Viewing.Extension {
            constructor(viewer:any, options:any) {
                super(viewer, options);
                this.onCreacionContextualMenuItem = this.onCreacionContextualMenuItem.bind(this);
            }

            get menuId() {
                return 'ItemMenuContextual';
            }

            onCreacionContextualMenuItem(menu:any, status:any) {
                if (status.hasSelected) {
                    if (viewerC.current!.getSelection().length > 0) {
                        menu.push(
                            {
                                title: 'Mi opcion 1',
                                target: () => {
                                    CargarPartidas();
                                }
                            },
                            {
                            title: 'Mi Opcion 2 ',
                            target:[
                            /*{
                                title: 'Añadir una comentario',
                                target: () => {
                                    //BuscarNombreImagen(function callback(miNameImagen) {
                                    //if (!miNameImagen.includes('<')) {
                                    //CrearPanel(miNameImagen);
                                    //CrearPanel('doc1.pdf');
                                    //carga2();
                                    //}
                                    //});
                                }

                            },*/
                            {
                                title: 'Mi option 3',
                                target: () => {

                                        alert('option 3')


                                   
                                      
                                    }
                                
                            },
                            {
                                title: 'Mi option 4',
                                target: () => {

                                    
                                }
                            },
                            {
                                title: 'Mi option 5',
                                target: () => {
                                   
                                }
                            },
                            
                    ]});
                    }//cierro if getSelection()=1    

                } else {


                    menu.push(
                        {
                            title: 'Mi option 6',
                            target: () => {
                               


                               
                            }
                        }
                        
                    );

                   


                }


            }



            load() {
                // Creación menu contextual item
                this.viewer.registerContextMenuCallback(
                    this.menuId,
                    this.onCreacionContextualMenuItem
                );
                return true;
            }

            unload() {
                // Borrado de todas los items
                this.viewer.unregisterContextMenuCallback(this.menuId);
                return true;
            }

        }
        Autodesk.Viewing.theExtensionManager.registerExtension('MenuContextual', MenuContextual);


        function getRandomString(length:any) {
            var s = '';
            do { s += Math.random().toString(36).substr(2); } while (s.length < length);
            s = s.substr(0, length);

            return s;
        }

        /*function Botones(viewer:any, options:any) {
            Autodesk.Viewing.Extension.call(this, viewer, options);
            var _viewer = viewer;
            var _this = this;
            _this.load = function () {
                createBotones();
                return true;
            };
            _this.unload = function () {
                deleteBotones();
                return true;
            };

            function createBotones() {

                var ctrlGroup = new Autodesk.Viewing.UI.ControlGroup(
                    'LateralToolbar.ControlGroup'
                );
                createPanelButton(ctrlGroup);
                // this.viewer.toolbar.addControl(ctrlGroup);

                //Creo un nuevo toolbar
                var toolbar = new Autodesk.Viewing.UI.ToolBar('toolbar-extension');
                //Añado el ctrlGroup al toolbar
                toolbar.addControl(ctrlGroup);
                //Creo un nuevo <div> contenedor del toolbar
                var toolbarDivHtml = '<div id="divToolbar"> </div>';
                //Añado el contenedor al viewer
                $(_viewer.container).append(toolbarDivHtml);

                // Doy stylo al <div>
                $('#divToolbar').css({
                    'top': 'calc(50% + 96px)',
                    'left': '0%',
                    'z-index': '100',
                    'position': 'absolute'
                });



                //añado el toolbar al <div>

                $('#divToolbar')[0].appendChild(toolbar.container);

                $('#MostrarMapa').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });
                $('#MostrarFoto').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });
                $('#MostrarVideo').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });
                $('#MostrarRecursos').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });
                $('#MostrarPres').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });
                $('#MostrarCrono').css({
                    'background-color': 'rgba(255,255,255,0.85)',
                    'border-radius': '25px',
                    'color': 'rgba(1,1,1,0.80)'
                });






            }

            function deleteBotones() {
                $('#LateralToolbar.ControlGroup').remove();
            }

        };*/

        //Botones.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
        //Botones.prototype.constructor = Botones;
        //Autodesk.Viewing.theExtensionManager.registerExtension('Botones', Botones);

        // Creación de botones Mostrar mapa - mostrar fotos mostrar Video y mostrar Documento
        function createPanelButton(ctrl:any) {
            var buttonVerMapa = new Autodesk.Viewing.UI.Button('MostrarMapa');
            buttonVerMapa.onClick = function (e) {
                ponerdato = !ponerdato;
                carga2();
                //MostrarMapa('Mapa1.jpg');
            };
            ctrl.addControl(buttonVerMapa);
            buttonVerMapa.setToolTip('Presupuestos');
            buttonVerMapa.setIcon('adsk-icon-bug');
            //buttonVerMapa.setIcon('nav-icon fab fa-accusoft');
            //<i className=""></i>
            var buttonVerFotos = new Autodesk.Viewing.UI.Button('MostrarFoto');
            buttonVerFotos.onClick = function (e) {
                //MostrarFoto();
            };
            ctrl.addControl(buttonVerFotos);
            buttonVerFotos.setToolTip('Cronograma');
            buttonVerFotos.setIcon('adsk-icon-structure');

            var buttonVerVideo = new Autodesk.Viewing.UI.Button('MostrarVideo');
            buttonVerVideo.onClick = function (e) {
                //MostrarVideo();
            };
            ctrl.addControl(buttonVerVideo);
            buttonVerVideo.setToolTip('Recursos');
            buttonVerVideo.setIcon('adsk-icon-layers');

            var buttonVerRec = new Autodesk.Viewing.UI.Button('MostrarRecursos');
            buttonVerRec.onClick = function (e) {
                //MostrarMapa('Mapa1.jpg');
            };
            ctrl.addControl(buttonVerRec);
            buttonVerRec.setToolTip('Avance');
            buttonVerRec.setIcon('adsk-icon-section-analysis');

            var buttonVerPres = new Autodesk.Viewing.UI.Button('MostrarPres');
            buttonVerPres.onClick = function (e) {
                //MostrarMapa('Mapa1.jpg');
            };
            ctrl.addControl(buttonVerPres);
            buttonVerPres.setToolTip('Ver Incidencias');
            buttonVerPres.setIcon('adsk-icon-measure-menu');

            var buttonVerCrono = new Autodesk.Viewing.UI.Button('MostrarCrono');
            buttonVerCrono.onClick = function (e) {
                //MostrarMapa('Mapa1.jpg');
            };
            ctrl.addControl(buttonVerCrono);
            buttonVerCrono.setToolTip('Planillas');
            buttonVerCrono.setIcon('adsk-icon-settings-render');




            /*var buttonVerDocumento = new Autodesk.Viewing.UI.Button('MostrarPDF');
            buttonVerDocumento.onClick = function (e) {
                createQualityIssues();
            };
            ctrl.addControl(buttonVerDocumento);
            buttonVerDocumento.setToolTip('Ver documento');
            buttonVerDocumento.setIcon('adsk-icon-bug');*/
        }


        function seleccionar_btn() {
            //btn.addClass();
            alert('hola');

        }



        function CrearPanel(imageName:any) {
            imageName = "doc2.pdf";
            var itemMenuContextual = $("#ItemMenuContextual") as any;
            var panel = itemMenuContextual.panel;
            //if (panel == null) {
            //panel = new PanelVacioBIM(viewer, viewer.container, 'PanelPropiedadesBIM', 'Cargar Rubros');
            itemMenuContextual.panel = panel;
            //}
            var panelId = document.getElementById('PanelPropiedadesBIM');
            if (panelId != null) {
                panelId.style.display = "block";
            }


            var html = '<div class="docking-panel-container-solid-color-b settings-tabs docking-panel-delimiter-shadow">' +
                '<ul>' +
                '<li id="ViewerSettingsPanel0-1-performancetab" class="performance tabselected selectedmouseout"><a>' +
                '<span data-i18n="Configuration">Rubros del Presupuesto</span></a>' +
                '</li>' +
                '<li id="ViewerSettingsPanel0-1-navigationtab" class="navigation"><a>' +
                '<span data-i18n="Navigation">Asignar Familias</span></a>' +
                '</li>' +
                '<li id="ViewerSettingsPanel0-1-appearance" class="appearance"><a>' +
                '<span data-i18n="Appearance">Elementos asinados</span></a>' +
                '</li>' +
                '<li id="ViewerSettingsPanel0-1-environment" class="environment"><a>' +
                '<span data-i18n="Environment">Programación</span></a>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '<div class="docking-panel-scroll docking-panel-container-solid-color-a right"id="ViewerSettingsPanel0-1-scroll-container" style="height: calc(100% - 110px);">' +
                '<div class="settings-tabs-tables-container">' +
                '<table id="ViewerSettingsPanel0-1-performancetab-table" class="settings-table adsk-lmv-tftable performance settings-selected-table">' +
                '<tbody style="display: table; width: 100%;">' +

                '<tr class="logical-group">' +
                '<td colspan="3">' +
                '<div data-i18n="Performance Optimization" style="margin-top:20px;">Opcion 1' +
                '</div>' +
                '</td>' +
                '</tr>' +


                '<div class="btn-group" style="margin-top:30px;">' +
                '<button type="button" class="btn btn-outline-default">Principal 3D</button>' +
                '<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-icon" data-toggle="dropdown">' +
                '<span class="sr-only">Toggle Dropdown</span>' +
                '</button>' +
                '<div class="dropdown-menu" role="menu">' +
                '<a class="dropdown-item" href="#">Action</a>' +
                '<a class="dropdown-item" href="#">Another action</a>' +
                '<a class="dropdown-item" href="#">Something else here</a>' +
                '<div class="dropdown-divider"></div>' +
                '<a class="dropdown-item" href="#">Separated link</a>' +
                '</div>' +
                '</div>' +







                '</tbody>' +
                '</table>' +

                '<table id="ViewerSettingsPanel0-1-navigationtab-table" class="settings-table adsk-lmv-tftable navigation">' +

                '<tbody style="display: table; width: 100%;">' +
                '<tr class="logical-group">' +
                '<td colspan="3">' +
                '<div data-i18n="ViewCube">Opcion 2</div>' +
                '</td>' +
                '</tr>' +

                '</tbody>' +
                '</table>' +


                '</div>' +
                '</div>';
            var cont = 0;
            var cadenaaux = "";

            var cadenaaux1 = "";


            /*for (var elem of T_NombreT) {
                var separador = "[",
                    arregloDeSubCadenas = elem.split(separador);
                var separador1 = "Revit",
                    arregloDeSubCadenas1 = T_categorias[cont].replace('Revit ', '');
                cadenaaux = cadenaaux + '<a class="claseElemento list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home" style="width:90%;">' + cont + '. ' + arregloDeSubCadenas1 + ' - ' + arregloDeSubCadenas[0] + ' ' + T_TipoT[cont] + '</a>';
                cont++;
            }*/






            var procesadosCat = [];
            var contar_procesados = 0, Indicador = 0;
            var cont1 = 0;

            /*for (var elem1 of T_NombreT) {
                var arregloDeSubCadenas1 = T_categorias[cont1].replace('Revit ', '');
                Indicador = 0;
                for (var elem2 of procesadosCat) {
                    if (elem2 === arregloDeSubCadenas1) {
                        Indicador = 1;
                    }
                }
                if (!Indicador) {
                    cadenaaux1 = cadenaaux1 + '<a class="clase1 list-group-item list-group-item-action active" id="list-home-list2" data-bs-toggle="list" role="tab" aria-controls="list-home" style="width:75%;">' + arregloDeSubCadenas1 + '</a>';
                    procesadosCat.push(arregloDeSubCadenas1);
                    contar_procesados++;
                }
                cont1++;
            }*/



            html =
                '<nav>' +
                '<div class="nav nav-tabs" id="nav-tab" role="tablist" style="background:rgba(0,0,0,0.5); color:white;">' +
                '<button class="nav-link" id="nav-seleccion-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style="background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.6);">Elementos</button>' +
                '<button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style="background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.6);">Clasificados</button>' +
                '<button class="nav-link" id="nav-contact-tab" onclick="alert("hola")" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style="background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.6);">Vinculos</button>' +
                '</div>' +
                '</nav>' +
                '<div class="tab-content" id="nav-tabContent">' +


                '<div class="tab-pane fade" id="nav-seleccion" role="tabpanel" aria-labelledby="nav-home-tab">Listado de elementos seleccionados' +

                '<div class="row">' +
                '<div class="col-11">' +
                '<div class="list-group" id="list-tab" role="tablist" style="height:450px; overflow:scroll;font-size:0.8rem;">' +

                cadenaaux +
                //'<a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">Nombre </a>'+



                //'<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="list-messages">Messages</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">Settings</a>'+
                '</div>' +
                '</div>' +
                /*'<div class="col-8">'+
                    '<div class="tab-content" id="nav-tabContent">'+
                    '<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>'+
                    '<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>'+
                    '<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>'+
                    '<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>'+
                    '</div>'+
                '</div>'+*/
                '</div>' +

                '</div>' +

                '<div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Categorías, Familias y tipos seleccionadas' +


                '<div class="row">' +
                '<div class="col-4">' +
                '<div class="list-group" id="list-tab" role="tablist" style="height:400px; overflow:scroll;font-size:0.7rem;">' +

                cadenaaux1 +
                //'<a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">Nombre </a>'+



                //'<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="list-messages">Messages</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">Settings</a>'+
                '</div>' +
                '</div>' +

                '<div class="col-4">' +
                '<div class="list-group" id="lista-tipos" role="tablist" style="height:400px; overflow:scroll;font-size:0.6rem;">' +

                //cadenaaux1+
                //'<a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">Nombre </a>'+



                //'<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="list-messages">Messages</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">Settings</a>'+
                '</div>' +
                '</div>' +

                '<div class="col-3">' +
                '<div class="list-group" id="lista-tipos1" role="tablist" style="height:400px; overflow:scroll;">' +

                //cadenaaux1+
                //'<a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">Nombre </a>'+



                //'<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="list-messages">Messages</a>'+
                //'<a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">Settings</a>'+
                '</div>' +
                '</div>' +

                /*'<div class="col-8">'+
                    '<div class="tab-content" id="nav-tabContent">'+
                    '<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>'+
                    '<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>'+
                    '<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>'+
                    '<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>'+
                    '</div>'+
                '</div>'+*/


                '</div>' +
                '<div class="row" style="height:15px;">' +

                '</div>' +
                '<div class="row">' +

                //BOTONES
                '<div class="col-9">' +
                '<button id="sel_cat" type="button" class="btn btn-primary" style="font-size:0.6rem;"></button>' +
                '<button id="sel_familia" type="button" class="btn btn-secondary" style="font-size:0.6rem;"></button>' +

                '</div>' +

                '<div class="col-2">' +
                '<button type="button" id="btn-siguiente-tipo" class="btn btn-danger" style="margin-left:20px;">Siguiente</button>' +

                '</div>' +


                '</div>' +


                '</div>' +


                //DIV PARA SELECCIONAR UNA ASOCIACION
                '<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Asociar elementos para generación de cantidades ' +
                '<div class="row">' +
                '<div class="col-11">' +
                '<button id="sel_cat1" type="button" class="btn btn-primary" style="font-size:0.7rem;">Categoria seleccionada</button>' +
                '<button id="sel_familia1" type="button" class="btn btn-secondary" style="font-size:0.6rem;">Tipo seleccionado</button>' +
                '</div>' +
                '</div>' +

                '<div class="row" style="height:20px;">' +
                '</div>' +


                '<div class="row">' +
                '<div class="col-3">' +
                '<ul class="list-group">' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Contenedores</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Unidad</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Cantidad</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Longitud</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Ancho</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-outline-secondary btn-sm">Alto</button></li>' +
                '</ul>' +

                '</div>' +
                //'<div class="col-1">'+
                //'</div>'+

                '<div class="col-8">' +
                '<ul class="list-group">' +
                '<li class="list-group-item"><button id="Mas_contenedores" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '<li class="list-group-item"><button id="" type="button" class="btn btn-secondary btn-sm">+</button></li>' +
                '</ul>' +
                '</div>' +

                '</div>' +

                '<div class="row" style="height:15px;">' +//separacion del boton
                '</div>' +

                '<div class="row">' +
                '<div class="col-9">' +
                '</div>' +
                '<div class="col-2">' +
                '<button type="button" id="btn-siguiente-tipo" class="btn btn-danger" style="margin-left:20px;">Siguiente</button>' +
                '</div>' +


                '</div>' +


                '</div>' +
                '</div>';


            var ficheroJPG_a_txt = [""];
            //var html = '<div class="uicomponent-panel-controls-container" >hola Mundo' + '</div>'

            var div1 = document.getElementById('ContenidoPanelBIM');
            if (div1 != null) {
                div1.innerHTML = html;
            }


            $("#Mas_contenedores").on("click", function () {
                // alert('abro mas');

                //var panel1 = itemMenuContextual.panel;
                //if (panel == null) {
                //var panel1 = new PanelIngresoDatosBIM(viewer, viewer.container, 'PanelIngresoBIM', 'Agregar contenedor');
                //itemMenuContextual.panel = panel;
                //}
                var panelId = document.getElementById('PanelIngresoBIM');
                if (panelId != null) {
                    panelId.style.display = "block";
                }


                var html1 = '<div class="docking-panel-container-solid-color-b settings-tabs docking-panel-delimiter-shadow">Seleccione una propiedad</div>';
                var div11 = document.getElementById('ContenidoIngresoBIM');
                if (div11 != null) {
                    div11.innerHTML = html1;


                }


            });

            $(".clase1").on("click", function () {
                //alert($( this ).text());
                //alert($("#sel_cat").text());
                //$("#sel_cat").prop('value', $( this ).text());
                $("#sel_cat").html($(this).text());
                $("#sel_familia").html('');


                $("#sel_cat1").html($(this).text());
                $("#sel_familia1").html('');

                //$("#sel_cat").text=$( this ).text();

                //alert($( this ).text());
                var estesel = $(this).text();
                //$('#lista-tipos').text="hola";
                $(".item_tipo").remove();
                $(".item_tipodet").remove();

                var procesadosTipo = [];
                var contar_procesadosTip = 0, IndicadorTip = 0;
                var cont2 = 0;
                var auxcadenamuestra = "";

                /*for (var elem1 of T_NombreT) {
                    var arregloDeSubCadenas1 = T_categorias[cont2].replace('Revit ', '');

                    var separador = "[",
                        arregloDeSubCadenas = elem1.split(separador);

                    var este = arregloDeSubCadenas[0] + ' ' + T_TipoT[cont2];
                    //cadenaaux=cadenaaux+'<a class="claseElemento list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">'+cont+'. '+arregloDeSubCadenas1+' - '+arregloDeSubCadenas[0]+' '+T_TipoT[cont]+'</a>';
                    //cont++;
                    //que pertenezca a la categoría
                    if (estesel === arregloDeSubCadenas1) {
                        //alert(estesel+'==='+arregloDeSubCadenas1);    

                        if (auxcadenamuestra == "") {
                            auxcadenamuestra = T_uniqueIds[cont2];
                        } else {
                            auxcadenamuestra = auxcadenamuestra + ',' + T_uniqueIds[cont2];
                        }

                        IndicadorTip = 0;
                        for (var elem2 of procesadosTipo) {
                            if (elem2 === este) {
                                IndicadorTip = 1;
                            }
                        }
                        if (!IndicadorTip) {
                            //cadenaaux1=cadenaaux1+'<a class="clase1 list-group-item list-group-item-action active" id="list-home-list2" data-bs-toggle="list" role="tab" aria-controls="list-home">'+este+'</a>';
                            $('#lista-tipos').append('<a class="item_tipo list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home" style="width:70%;">' + este + ' </a>');
                            procesadosTipo.push(este);
                            contar_procesadosTip++;
                        }
                    }
                    cont2++;
                }*/

                //$('#lista-tipos').append('<a class="item_tipo list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">'+$( this ).text()+' </a>');

                if (viewerC.current && auxcadenamuestra != "")
                    highlightRevit(auxcadenamuestra);




                $(".item_tipo").on("click", function () {
                    //alert($( this ).text());


                    $("#sel_familia").html($(this).text());
                    $("#sel_familia1").html($(this).text());


                    var estesel1 = $(this).text();
                    //$('#lista-tipos').text="hola";
                    $(".item_tipodet").remove();

                    //var procesadosTipodet = [];
                    var contar_procesadosTipdet = 0, IndicadorTipdet = 0;
                    var cont3 = 0;
                    var cadenamostrar = "";

                    /*for (var elem1 of T_NombreT) {
                        var arregloDeSubCadenas1 = T_categorias[cont3].replace('Revit ', '');

                        var separador = "[", arregloDeSubCadenas = elem1.split(separador);
                        var este = arregloDeSubCadenas[0] + ' ' + T_TipoT[cont3];

                        //que pertenezca a la categoría y al mismo tipo
                        //alert(este+'=='+estesel1);
                        if (este.trim() == estesel1.trim()) {

                            //cadenaaux1=cadenaaux1+'<a class="clase1 list-group-item list-group-item-action active" id="list-home-list2" data-bs-toggle="list" role="tab" aria-controls="list-home">'+este+'</a>';
                            $('#lista-tipos1').append('<a class="item_tipodet list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home" style="width:60%;">' + cont3 + ' </a>');
                            //procesadosTipo.push(este);
                            //contar_procesadosTipdet++;
                            if (cadenamostrar === "") {
                                cadenamostrar = T_uniqueIds[cont3];
                            } else {
                                cadenamostrar = cadenamostrar + ',' + T_uniqueIds[cont3];
                            }


                        }
                        cont3++;
                    }*/

                    if (viewerC.current && cadenamostrar != "")
                        highlightRevit(cadenamostrar);

                    //$('#lista-tipos').append('<a class="item_tipo list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">'+$( this ).text()+' </a>');


                    $(".item_tipodet").on("click", function () {
                        //alert($( this ).text());
                        var indice = parseInt($(this).text());

                       /* if (viewer)
                            highlightRevit(T_uniqueIds[indice]);*/



                    });









                    //var estesel=$( this ).text();
                    //$(".item_tipo").remove();
                });


                /* var separador = ".",
                     arregloDeSubCadenas = $( this ).text().split(separador);
                 var indice=parseInt(arregloDeSubCadenas[0]);
 
                 if (viewer)
                     highlightRevit(T_uniqueIds[indice]);*/

                //alert('hola');
            });




            $(".claseElemento").on("click", function () {
                //alert($( this ).text());
                // alert($( this ).text());

                var separador = ".",
                    arregloDeSubCadenas = $(this).text().split(separador);
                var indice = parseInt(arregloDeSubCadenas[0]);

                /*if (viewer)
                    highlightRevit(T_uniqueIds[indice]);*/

                //alert('hola');
            });

            $("#nav-seleccion-tab").on("click", function () {
                //console.log( $( this ).text() );
                //alert('holaa');

                $("#nav-seleccion-tab").addClass('active');
                $("#nav-contact-tab").removeClass('active');
                $("#nav-profile-tab").removeClass('active');


                $("#nav-seleccion").addClass('show');
                $("#nav-seleccion").addClass('active');

                $("#nav-profile").removeClass('active');
                $("#nav-profile").removeClass('show');

                $("#nav-contact").removeClass('active');
                $("#nav-contact").removeClass('show');
            });

            $("#nav-profile-tab").on("click", function () {
                //console.log( $( this ).text() );
                //alert('holaa');
                $("#nav-profile-tab").addClass('active');
                $("#nav-seleccion-tab").removeClass('active');
                $("#nav-contact-tab").removeClass('active');


                $("#nav-seleccion").removeClass('show');
                $("#nav-seleccion").removeClass('active');

                $("#nav-profile").addClass('active');
                $("#nav-profile").addClass('show');

                $("#nav-contact").removeClass('active');
                $("#nav-contact").removeClass('show');

            });

            $("#nav-contact-tab").on("click", function () {
                //console.log( $( this ).text() );
                //alert('holaa');
                /* $("#nav-profile-tab").removeClass('active');
                 $("#nav-seleccion-tab").removeClass('active');
                 $("#nav-contact-tab").addClass('active');
 
 
                 $("#nav-seleccion").removeClass('show');
                 $("#nav-seleccion").removeClass('active');
                 
                 $("#nav-profile").removeClass('active');
                 $("#nav-profile").removeClass('show');
 
                 $("#nav-contact").addClass('active');
                 $("#nav-contact").addClass('show');*/

            });

            $("#btn-siguiente-tipo").on("click", function () {
                //console.log( $( this ).text() );
                //alert('holaa');
                $("#nav-profile-tab").removeClass('active');
                $("#nav-seleccion-tab").removeClass('active');
                $("#nav-contact-tab").addClass('active');


                $("#nav-seleccion").removeClass('show');
                $("#nav-seleccion").removeClass('active');

                $("#nav-profile").removeClass('active');
                $("#nav-profile").removeClass('show');

                $("#nav-contact").addClass('active');
                $("#nav-contact").addClass('show');

            });


        }


        /*function PanelVacioBIM(viewer, container, id, title, options = '') {
            this.viewer = viewer;
            Autodesk.Viewing.UI.DockingPanel.call(this, container, id, title, options);
            //Autodesk.Viewing.UI.ModelStructurePanel
            // Style para docking panel
            this.container.classList.add('docking-panel-container-solid-color-a');
            this.container.style.top = "20px";
            this.container.style.left = "90px";
            //this.container.style.width = "auto";
            //this.container.style.height = "auto";
            this.container.style.width = "550px";
            this.container.style.height = "600px";

            this.container.style.resize = "auto";

            // creamos un div para contener el panel
            var div = document.createElement('div');
            div.style.margin = '5px';
            div.id = "ContenidoPanelBIM";
            div.innerText = "Mi contenido";
            this.container.appendChild(div);
            // añadiremos elementos después
        }
        PanelVacioBIM.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
        PanelVacioBIM.prototype.constructor = PanelVacioBIM;*/


        /*function PanelIngresoDatosBIM(viewer, container, id, title, options = '') {
            this.viewer = viewer;
            Autodesk.Viewing.UI.DockingPanel.call(this, container, id, title, options);
            //Autodesk.Viewing.UI.ModelStructurePanel
            // Style para docking panel
            this.container.classList.add('docking-panel-container-solid-color-a');
            this.container.style.top = "25%";
            this.container.style.left = "35%";
            //this.container.style.width = "auto";
            //this.container.style.height = "auto";
            this.container.style.width = "420px";
            this.container.style.height = "450px";

            this.container.style.resize = "auto";

            // creamos un div para contener el panel
            var div = document.createElement('div');
            div.style.margin = '5px';
            div.id = "ContenidoIngresoBIM";
            div.innerText = "Mi contenido";
            this.container.appendChild(div);
            // añadiremos elementos después
        }
        PanelIngresoDatosBIM.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
        PanelIngresoDatosBIM.prototype.constructor = PanelIngresoDatosBIM;

    }*/

    const loadViewer = (svfUrl: string) => {
        launchViewer(modelURL);
        //launchViewer(modelURL);
    }

    const cargar = async () => {
        if (viewerC.current) {
            //viewer.uninitialize();
            //viewer.finish();
            //viewer=null;
        }
        //launchViewer('dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmlPbG9fOEJSU2JDODh6ZmxaaUpxVXc/dmVyc2lvbj0x');
        launchViewer(urn);
        //alert(urn);
    }

    useEffect(() => {
        /*if (proyects.Urn === '') {
            if (viewer) {
                //viewer.uninitialize();
                viewer.finish();
                //viewer = null;
                return;
            }
            //return;
        }*/

        /*if (proyects.Urn) {
            setModelURL(proyects.Urn);
            //alert(modelURL);
            //alert(proyects.Urn);
            cargar();
        }*/
        alert('vamnos allamar a cargar')
        cargar();
        /*return ()=> {
            if (viewer) {
                //viewer.uninitialize();
                viewer.finish();
                viewer=null;
            }
           //if (window.NOP_VIEWER) window.NOP_VIEWER.finish() //terminate Viewer when unmounting
        }*/

    }, [urn])

    
    /*async function postData(url = '', data = {}) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: queryString.stringify(data)
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }*/


    /*const fetchConToken11 = () => {
        postData('https://developer.api.autodesk.com/authentication/v1/authenticate', {
            'client_id': 'Lrn6oqLnwpCBd8GS0LuimGx5SHONYw4b',
            'client_secret': 'JLA2LfrdwUg4hMkz',
            'grant_type': 'client_credentials',
            'scope': 'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete'
        })
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call

            });
    }*/


    /*function getForgeToken(callback:any) {
        postData('https://developer.api.autodesk.com/authentication/v1/authenticate', {
            'client_id': 'Lrn6oqLnwpCBd8GS0LuimGx5SHONYw4b',
            'client_secret': 'JLA2LfrdwUg4hMkz',
            'grant_type': 'client_credentials',
            'scope': 'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete'
        })
            .then(data => {
                //console.log(data); // JSON data parsed by `data.json()` call
                callback(data.access_token, data.expires_in);
            });
    }*/

   /* const loadStyleSheet = (href: string) => {
        const styles = document.createElement('link');
        styles.rel = 'stylesheet';
        styles.type = 'text/css';
        styles.href = href;
        styles.onload = handleStyleLoad;
        document.getElementsByTagName('head')[0].appendChild(styles);
    }*/


    /*useEffect(() => {
        async function loadServiceWorker() {
            //await new Promise(r=>{serviceWorker.register({onSuccess:()=>r()})});
            setLoadViewerLibrary(true);
            //setLoadViewerLibrary1(true);
            //await loadStyleSheet(viewerStylesheetURL1);
            await loadStyleSheet(viewerStylesheetURL);
            //alert('init');
        }
        loadServiceWorker();
        /*return ()=> {
            if (viewer) {
                //viewer.uninitialize();
                viewer.finish();
                viewer=null;
            }
    
           //if (window.NOP_VIEWER) window.NOP_VIEWER.finish() //terminate Viewer when unmounting
        }
    }, []);*/


    
    const laneId = 'demo-lane'
    const lanes = [
        {
            laneId,
            label: 'Plazo del Proyecto',
        },
    ]
    var now = new Date();
    const events = [
        {
            eventId: 'event-1',
            laneId: laneId,
            startTimeMillis: 1399845600000,
            //endTimeMillis: 1530698899000,
            endTimeMillis: now.getTime()
        },
        {
            eventId: 'event-2',
            laneId,
            startTimeMillis: 1167606000000,
            endTimeMillis: 1230698892000,
        },
    ]
    const dateFormat = (ms: number) => new Date(ms).toLocaleString();

    var tamano = $('#FrmPrin').width();

    const [fecha, setfecha] = useState(new Date(now.getTime()).toLocaleString());
    const [fechasel, setfechasel] = useState(new Date(now.getTime()).toLocaleString());

    const evento = (evento:any) => {
        setfecha(fechasel);
    }
    //const a = TimelineTheme;

    const oncursor = (millisAtCursor:any, startMillis:any, endMillis:any) => {
        setfechasel(new Date(millisAtCursor).toLocaleString());
    }

    return (
        <>
            <div style={{ display:'flex', background:'red' }}>
            <div className="" id="forgeViewer" style={{
                height: "100%", width: '100%',
                background: 'white',
                overflow:'hidden',
                zIndex:0,
                position:'absolute'
                /*display:'inline-table'*/

            }}></div>
            </div>
            {/* <div style={{ fontSize:'0.7rem', top:'10px', position:'absolute', zIndex:1 }}>Items seleccionados: <span id="MySelectionValue">0</span></div> */}
            {/* </div> */}
            {/* {loadViewerLibrary1 ? <Script url={viewerLibaryURL1} onLoad={handleScriptLoad1}></Script> : null} */}
            
            {/*loadViewerLibrary ? <Script url={viewerLibaryURL} onLoad={handleScriptLoad}></Script> : null*/}
            
            {/* {<Script url={viewerLibaryURL} onLoad={handleScriptLoad}></Script>} 
            {<Script url={viewerLibaryURL1} onLoad={handleScriptLoad1}></Script>} */}
            {/* </div> */}
        </>

    )
}



