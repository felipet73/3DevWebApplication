/**
 * ListView Template Sample
 */

import * as React from 'react';
import { useEffect } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { useBimProjectsStore } from '../../../../stores';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
//import './template.css';
//import { dataSource } from './listData';
import TreeModelDetail from './TreeModelDetail';

const items: ItemModel[] = [
    {
        text: 'View-Open',
        iconCss: 'e-ddb-icons e-dashboard'
    },
    {
        text: 'Add to Project',
        iconCss: 'e-ddb-icons e-notifications',
    },
    {
        text: 'Copy',
        iconCss: 'e-ddb-icons e-settings',
    },
    {
        text: 'Info',
        iconCss: 'e-ddb-icons e-logout'
    }];


const TreeViewProject1 = () => {
    //Customizing the elements to perform our own events
    const [data, setData] = React.useState<any>([]);
    const actualProyect = useBimProjectsStore(store => store.actualProject);
    let share: any;
    let comments: any;
    let bookmark: any;
    let timeStamp: any;
    // Set customized list template
    const listTemplate = (data: any) => {
        return (
            <div className={true ? "clearfix desc e-list-wrapper e-list-multi-line e-list-avatar'" : "clearfix e-list-wrapper e-list-multi-line e-list-avatar"}
                style={{ fontSize: "13px", fontFamily: "Segoe UI" }}>
                {
                    //data.imgSrc !== "" ? <img className='e-avatar' src={`${data.imgSrc}`} /> : ""
                    (data?.image && data?.image !== '') ?
                        <img className='e-avatar' style={{ width: '70px' }} src={`${process.env.REACT_APP_BASE_URL}images/models/${data?.image}`} /> :
                        <img className='e-avatar' src={`${"http://localhost:3001/api/images/users/e719a8ae-68bf-4ad0-a3b2-6702936cef42.png"}`} />
                }
                <img style={{ position: 'absolute', left: '100px', marginTop: '8px', width: '25px', height: '25px' }} src={`${data?.open ? "/assets/icons/mostrar.png" : "/assets/icons/ocultar.png"}`} />
                {data?.main && <img style={{ position: 'absolute', left: '130px', marginTop: '8px', width: '25px', height: '25px' }} src={`${"/assets/icons/main.png"}`} />}
                <DropDownButtonComponent items={items} style={{ position: 'absolute', right: '5px', marginTop: '15px' }} select={(e: any) => {
                    //console.log(e, props);
                }}></DropDownButtonComponent>
                <span className="e-list-item-header" style={{ fontSize: "13px", fontFamily: "Segoe UI" }}>{data.name} </span>
                <span className="e-list-content e-text-overflow" dangerouslySetInnerHTML={{ __html: data.description }} ></span>
                {
                    data.createdAt !== "" ?
                        <div>
                            <div id="list-logo">
                                <span className="bookmark"></span>
                                <span className="comments"></span>
                                <span className="share"></span>
                            </div>
                            <div className="timeStamp">{data.createdAt}</div></div> : ""
                }
                {data?.open && <TreeModelDetail modelId={data?.id}/>}
            </div>
        );
    }

    const onComplete = (): void => {
        let instance: any = document.getElementById('listview_template');
        instance = instance.ej2_instances[0];
        let listHeader: HTMLElement = instance.element.childNodes[0] as HTMLElement;
        let header: HTMLElement = listHeader.childNodes[0] as HTMLElement;
        if (header.style.display === 'none' || listHeader.childNodes.length === 3) {
            if (listHeader.childNodes[2] != null) {
                let childHeader: HTMLElement = listHeader.childNodes[2] as HTMLElement;
                childHeader.remove();
            }
        } else {
            let headerEle: HTMLElement = instance.element.querySelector('.e-list-header') as HTMLElement;
            let headerElement: HTMLElement = instance.element.querySelector('#list-logo') as HTMLElement;
            let clone: HTMLElement = headerElement.cloneNode(true) as HTMLElement;
            headerEle.appendChild(clone);
        }
        //Customizing the elements to perform our own events
        share = document.getElementsByClassName('share');
        comments = document.getElementsByClassName('comments');
        bookmark = document.getElementsByClassName('bookmark');
        timeStamp = document.getElementsByClassName('timeStamp');
        postActions();
    }
    // EventHnadler to Comments, BookMarks and Share Icons
    const postActions = (): void => {
        for (let i: number = 0; i < comments.length; i++) {
            comments[i].setAttribute('title', 'We can customize this element to perform our own action');
            comments[i].addEventListener('click', (event: any) => {
                event.stopPropagation();
            });
        }

        for (let i: number = 0; i < bookmark.length; i++) {
            bookmark[i].setAttribute('title', 'We can customize this element to perform our own action');
            bookmark[i].addEventListener('click', (event: any) => {
                event.stopPropagation();
            });
        }

        for (let i: number = 0; i < share.length; i++) {
            share[i].setAttribute('title', 'We can customize this element to perform our own action');
            share[i].addEventListener('click', (event: any) => {
                event.stopPropagation();
            });
        }

        for (let i: number = 0; i < timeStamp.length; i++) {
            timeStamp[i].addEventListener('click', (event: any) => {
                event.stopPropagation();
            });
        }
    }

    useEffect(() => {
        console.log('Este es actualProject', actualProyect);
        setTimeout(() => {
            setData(actualProyect?.models || []);
        }, 200);

        //setTit(actualProyect?.name || '')
    }, [actualProyect])



    return (
        <div className='control-pane'>
            <div className='control-section'>
                {/* ListView element */}
                <ListViewComponent id='listview_template' dataSource={data} headerTitle={actualProyect?.name} showHeader={true} cssClass='e-list-template' actionComplete={onComplete.bind(this)} template={listTemplate as any}></ListViewComponent>
            </div>
        </div>
    )
}
export default TreeViewProject1;