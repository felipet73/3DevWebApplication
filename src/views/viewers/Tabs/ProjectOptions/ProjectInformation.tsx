import { PopupSettingsModel } from '@syncfusion/ej2-inplace-editor/src/inplace-editor/base/models-model';
import { TextBoxModel } from '@syncfusion/ej2-inputs';
import { ChangeEventArgs as DropDownChangeArgs, DropDownListComponent, FieldSettingsModel, MultiSelectModel } from '@syncfusion/ej2-react-dropdowns';
import { ActionEventArgs, Inject, InPlaceEditorComponent, MultiSelect, RenderMode, Rte } from '@syncfusion/ej2-react-inplace-editor';
import { RichTextEditorModel } from '@syncfusion/ej2-richtexteditor';

import { DatePickerModel, DateRangePickerModel, DateTimePickerModel, TimePickerModel } from '@syncfusion/ej2-calendars';
import { DateRangePicker, TimePicker } from '@syncfusion/ej2-react-inplace-editor';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { PropertyPane } from '../common/property-pane';
import './api.css';

// tslint:disable:max-line-length

function ProjectInformation(this: any) {
    let inplaceEditorControlEle: HTMLDivElement | null;
        inplaceEditorControlEle = null;
        let inplaceEditorControlRef: React.Ref<HTMLDivElement>=(element)=>{
            inplaceEditorControlEle = element;
        };    
    let titleObj: InPlaceEditorComponent;
    let tagObj: InPlaceEditorComponent;
    let rteObj: InPlaceEditorComponent;
    let editorMode: DropDownListComponent
    let popupSettings: PopupSettingsModel = { model: { width: 300 } };

    let multiValue: string[] = ['TypeScript', 'JavaScript'];

    // define the array of string
    let multiData: any = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];

    let textValidationRules: { [name: string]: { [rule: string]: Object; }; } = { Title: { required: [true, 'Enter valid title'] } };

    let textModel: TextBoxModel = { placeholder: 'Enter your question title' };

    let rteValidationRules: { [name: string]: { [rule: string]: Object; }; } = { rte: { required: [true, 'Enter valid comments'] } };

    let rteModel: RichTextEditorModel = {
        toolbarSettings: {
            enableFloating: false,
            items: ['Bold', 'Italic', 'Underline', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|', 'OrderedList', 'UnorderedList']
        }
    };

    let selectValidationRules: { [name: string]: { [rule: string]: Object; }; } = { Tag: { required: [true, 'Enter valid tags'] } };

    let selectModel: any = { dataSource: multiData, placeholder: 'Enter your tags', mode: 'Box', };

    // Mapping DropDownList dataSource property
    let editorData: { [key: string]: Object }[] = [
        { 'value': 'Inline', 'text': 'Inline' }, { 'value': 'Popup', 'text': 'Popup' }
    ];

    // Mapping DropDownList fields property
    let dropDownFields: FieldSettingsModel = { text: 'text', value: 'value' };

    // Mapping DropDownList value property
    let dropDownVal: string = 'Inline';

    // Change event funtion for DropDownList component   
    function changeEditorMode(e: DropDownChangeArgs): void {
        let mode: string = editorMode.value as string;
        titleObj.mode = mode as RenderMode;
        tagObj.mode = mode as RenderMode;
        rteObj.mode = mode as RenderMode;
        titleObj.dataBind();
        tagObj.dataBind();
        rteObj.dataBind();
    }

    function selectionActionSuccess(e: ActionEventArgs): void {
        e.value = chipCreation(e.value.split(',') as string[]);
    }

    function create(): void {
        rteObj.popupSettings.model!.width = inplaceEditorControlEle!.offsetWidth;
        chipOnCreate();
    }

    function chipOnCreate(): void {
        tagObj.element.querySelector('.e-editable-value')!.innerHTML = chipCreation(tagObj.value as string[]);
    }

    function chipCreation(data: string[]): string {
        let value: string = '<div class="e-chip-list">';
        [].slice.call(data).forEach((val: string) => {
            value += '<div class="e-chip"> <span class="e-chip-text"> ' + val + '</span></div>';
        });
        value += '</div>';
        return value;
    }
    function rendereComplete(): void {
        let rightPane: HTMLElement | null = document.getElementById('right-pane');
        if (rightPane) {
            rightPane.addEventListener('scroll', scrollRightPane);
        }
    }

    function componentWillUnmount() {
        let rightPane: HTMLElement | null = document.getElementById('right-pane');
        if (rightPane) {
            rightPane.removeEventListener('scroll', scrollRightPane);
        }
    }

    function scrollRightPane(): void {
        let mode: HTMLSelectElement = (document.getElementById('editorMode') as HTMLSelectElement);
        if (mode && mode.value === 'Inline') {
            return;
        }
        if (titleObj && titleObj.element.querySelectorAll('.e-editable-open')) {
            titleObj.enableEditMode = false;
        }
        if (tagObj && tagObj.element.querySelectorAll('.e-editable-open')) {
            tagObj.enableEditMode = false;
        }
        if (rteObj && rteObj.element.querySelectorAll('.e-editable-open')) {
            rteObj.enableEditMode = false;
        }
    }


    let dateObj: InPlaceEditorComponent;
    let timeObj: InPlaceEditorComponent;
    let dateTimeObj: InPlaceEditorComponent;
    let dateRangeObj: InPlaceEditorComponent;
    //let editorMode: DropDownListComponent

    let dateValue: Date = new Date('5/23/2017');

    let dateTimeValue: Date = new Date('5/23/2017 12:00 PM');

    let dateRangeValue: Date[] = [new Date('5/23/2017'), new Date('7/5/2017')];

    let datePickerModel: DatePickerModel = { placeholder: 'Select a date' };

    let timePickerModel: TimePickerModel = { placeholder: 'Select a time', value: new Date('5/23/2017,12:00 PM') };

    let dateTimePickerModel: DateTimePickerModel = { placeholder: 'Select a date and time' };

    let dateRangePickerModel: DateRangePickerModel = { placeholder: 'Select a date range' };

    // Mapping DropDownList dataSource property
    /*let editorData: { [key: string]: Object }[] = [
        { 'value': 'Inline', 'text': 'Inline' }, { 'value': 'Popup', 'text': 'Popup' }
    ];*/

    // Mapping DropDownList fields property
    //let dropDownFields: FieldSettingsModel = { text: 'text', value: 'value' };

    // Mapping DropDownList value property
   // let dropDownVal: string = 'Inline';

    




        return (
            <div className='control-pane'>
                <div className="col-lg-12 control-section inplace-editor-control-section form-layout" ref={inplaceEditorControlRef} id='inplace-editor-control'>
                    <div className="content-wrapper" style={{ marginBottom: "25px" }}>
                        <div id="confirmation">
                            <div id="submitDialog"></div>
                            <form id="formId" className="form-horizontal">


                            <div className="e-card e-card-horizontal e-product" id="horizontal_phone_product">
                                    <div className="e-card-stacked">
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title"> iPhone X</div>
                                                <div className="e-card-sub-title">Marketed by Apple Inc</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with
                                            support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per
                                            second. It supports Qi-standard wireless charging.
                                        </div>
                                        <div className="e-card-actions" style={{ justifyContent: 'center' }}>
                                            <button className="e-btn e-outline e-primary">
                                                <div className="e-size">64GB </div>
                                            </button>
                                            <button className="e-btn e-outline e-primary">
                                                <div className="e-size">256GB </div>
                                            </button>
                                        </div>
                                    </div>
                                    <img src="/assets/images/card3.png" alt="iPhone X" height="415px" style={{ width: '50%' }} />
                                </div>
                            


                                <div className="form-group">
                                    <label className="col-sm-12 control-label" style={{ textAlign: "left", fontSize: "14px", fontWeight: 700 }}>
                                        Projec Name</label>
                                    <InPlaceEditorComponent ref={(title:any) => { titleObj = title }} id='inplace_title_editor' data-underline='false' mode='Inline' emptyText='Enter your question title' name='Title' value='Succinctly E-Book about TypeScript' validationRules={textValidationRules} model={textModel} >
                                    </InPlaceEditorComponent>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-12 control-label" style={{ textAlign: "left", fontSize: "14px", fontWeight: 700 }}>
                                        Project Details</label>
                                    <InPlaceEditorComponent ref={(rte:any) => { rteObj = rte }} id='inplace_comment_editor' data-underline='false' mode='Inline' type='RTE' editableOn='EditIconClick' submitOnEnter={false} value='The extensive adoption of JavaScript for application development, and the ability to use HTML and JavaScript to create Windows Store apps, has made JavaScript a vital part of the Windows development ecosystem. Microsoft has done extensive work to make JavaScript easier to use.' emptyText='Enter your comment' name='rte' validationRules={rteValidationRules} model={rteModel} popupSettings={popupSettings} >
                                        <Inject services={[Rte]} />
                                    </InPlaceEditorComponent>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-12 control-label" style={{ textAlign: "left", fontSize: "14px", fontWeight: 700 }}>
                                        Date</label>
                                        <InPlaceEditorComponent ref={(dateTime:any) => { dateTimeObj = dateTime }} id='dateTimePickerEle' mode='Inline' type='DateTime' value={dateTimeValue} model={dateTimePickerModel} >
                                        </InPlaceEditorComponent>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-12 control-label" style={{ textAlign: "left", fontSize: "14px", fontWeight: 700 }}>
                                        Tags</label>
                                    <InPlaceEditorComponent ref={(tag:any) => { tagObj = tag }} id='inplace_tag_editor' data-underline='false' mode='Inline' type='MultiSelect' created={create.bind(this)} value={multiValue} emptyText='Enter your tags' name='Tag' actionSuccess={selectionActionSuccess.bind(this)} validationRules={selectValidationRules} model={selectModel} >
                                        <Inject services={[MultiSelect]} />
                                    </InPlaceEditorComponent>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className='col-lg-4 property-section' id="editorProperty">
                    <PropertyPane title='Properties'>
                        <table id="property" title="Properties" className="property-panel-table">
                            <thead>
                                <tr>
                                <th></th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>Mode</div>
                                    </td>
                                    <td>
                                        <div>
                                            <DropDownListComponent ref={(drop) => { editorMode = drop }} id='editorMode' className='form-control' dataSource={editorData} fields={dropDownFields}
                                                value={dropDownVal} width={'90%'} change={changeEditorMode.bind(this)} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div> */}
            </div>
        );
}
export default ProjectInformation;