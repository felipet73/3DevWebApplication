/**
 * ListBox RemoteData Sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ListBoxComponent, FieldSettingsModel, DragEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';
import { ContextMenuComponent, MenuAnimationSettingsModel, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
//import data from './dataSourceDrag.json';
import { Browser } from '@syncfusion/ej2-base';

import './drag-and-drop.css';
import { useViewerStore } from '../../../../stores/viewer/viewer.store';


/*const obj={
    DataA:[{Name:'Nombre2', dbId:'0101'},{Name:'Nombre3', dbId:'0105'}],
    DataB:[{},{}]
}*/

const DragAndDrop = () => {

    const selectedItems = useViewerStore(store => store.selectedItems);

    const listObj1 = useRef<ListBoxComponent>(null);
    const listObj2 = useRef<ListBoxComponent>(null)
    const dataA: DataManager = new DataManager({
        //json: data["dragAndDropA"]
        json: selectedItems.DataModel
    });
    const dataB: DataManager = new DataManager({
        //json: data["dragAndDropB"]
        json: selectedItems.DataList
    });
    const fields: FieldSettingsModel = { text: 'Name' };
    const modifiedDataA: ModifiedRecords = { addedRecords: [], deletedRecords: [], changedRecords: [] };
    const modifiedDataB: ModifiedRecords = { addedRecords: [], deletedRecords: [], changedRecords: [] };
    const saveChanges = (): void => {
        dataA.saveChanges(modifiedDataA, fields.text);
        dataB.saveChanges(modifiedDataB, fields.text);
        modifiedDataA.addedRecords = []; modifiedDataB.addedRecords = [];
    }
    const onDropGroupA = (args: any): void => {
        args.items.forEach((item: { [key: string]: Object; }): void => {
            if (!listObj1.current!.getDataByValue(item[fields.text!] as string)) {/*Preventing item manipulation on drag and drop within same list box.*/
                modifiedDataB.addedRecords.push(item);
                modifiedDataA.deletedRecords.push(item);
            }
        });
    }
    const onDropGroupB = (args: any): void => {
        args.items.forEach((item: { [key: string]: Object; }): void => {
            if (!listObj2.current!.getDataByValue(item[fields.text!] as string)) {
                modifiedDataA.addedRecords.push(item);
                modifiedDataB.deletedRecords.push(item);
            }
        });
    }


    let animationSettings: MenuAnimationSettingsModel = {
        effect: Browser.isDevice ? 'ZoomIn' : 'SlideDown'
    };
    let content: string = Browser.isDevice ? 'Touch hold to open the ContextMenu' : 'Right click/Touch hold to open the ContextMenu';

    //ContextMenu items definition
    let menuItems: MenuItemModel[] = [
        {
            text: 'Cut',
            iconCss: 'e-cm-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-cm-icons e-cm-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-cm-icons e-paste',
            items: [
                {
                    text: 'Paste Text',
                    iconCss: 'e-cm-icons e-pastetext'
                },
                {
                    text: 'Paste Special',
                    iconCss: 'e-cm-icons e-pastespecial'
                }
            ]
        },
        {
            separator: true
        },
        {
            text: 'Link',
            iconCss: 'e-cm-icons e-link'
        },
        {
            text: 'New Comment',
            iconCss: 'e-cm-icons e-comment'
        }];

    // Event triggers while rendering each menu item where “Link” menu item is disabled
    const addDisabled: any = (args: MenuEventArgs) => {
        if (args.item.text === 'Link') {
            args.element.classList.add('e-disabled');
        }
    }




    return (
        <div className='control-pane'>
            <div className='col-lg-12 control-section' style={{ minHeight: '450px' }}>
                <div id="drag-drop-wrapper">
                    <div id="contextmenutarget" className="listbox-control">
                        <h4>Selected</h4>
                        <ListBoxComponent ref={listObj1} dataSource={dataA} scope="combined-list" height="230px" allowDragAndDrop={true} fields={fields} drop={onDropGroupA} change={(e)=>console.log('seleccion', e)} />
                    </div>
                    <ContextMenuComponent target='#contextmenutarget' items={menuItems} animationSettings={animationSettings} beforeItemRender={addDisabled} select={(e)=> console.log(e)} />
                    {/* <span className="e-swap-icon"></span> */}
                    <div className="listbox-control">
                        <h4>My List</h4>
                        <ListBoxComponent ref={listObj2} dataSource={dataB} scope="combined-list" height="230px" allowDragAndDrop={true} fields={fields} drop={onDropGroupB} />
                        <button className="e-btn" onClick={saveChanges}>Update</button>
                    </div>
                    

                </div>
            </div>
        </div>
    );

}
export default DragAndDrop;
interface ModifiedRecords {
    addedRecords: { [key: string]: Object }[];
    deletedRecords: { [key: string]: Object }[];
    changedRecords: { [key: string]: Object }[];
}