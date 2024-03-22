import { createElement } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
/**
 * Represents document editor title bar.
 */
export class TitleBar {
    tileBarDiv;
    documentTitle:any;
    documentTitleContentEditor:any;
    export:any;
    close:any;
    print:any;
    open:any;
    documentEditor:any;
    isRtl;
    dialogComponent;
    constructor(element:any, docEditor:any, isShareNeeded:any, isRtl:any, dialogComponent:any) {
        //initializes title bar elements.
        this.tileBarDiv = element;
        this.documentEditor = docEditor;
        this.isRtl = isRtl;
        this.dialogComponent = dialogComponent;
        this.initializeTitleBar(isShareNeeded);
        this.wireEvents();
    }
    initializeTitleBar = (isShareNeeded:any) => {
        let downloadText;
        let downloadToolTip;
        let printText;
        let closeToolTip;
        let printToolTip;
        let openText;
        let documentTileText;
        if (!this.isRtl) {
            downloadText = 'Download';
            downloadToolTip = 'Download this document.';
            printText = 'Print';
            printToolTip = 'Print this document (Ctrl+P).';
            closeToolTip = 'Close this document';
            openText = 'Open';
            documentTileText = 'Document Name. Click or tap to rename this document.';
        }
        else {
            downloadText = 'تحميل';
            downloadToolTip = 'تحميل هذا المستند';
            printText = 'طباعه';
            printToolTip = 'طباعه هذا المستند (Ctrl + P)';
            openText = 'فتح';
            documentTileText = 'اسم المستند. انقر أو اضغط لأعاده تسميه هذا المستند';
        }
        // tslint:disable-next-line:max-line-length
        this.documentTitle = createElement('label', { id: 'documenteditor_title_name', styles: 'font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
        // tslint:disable-next-line:max-line-length
        this.documentTitleContentEditor = createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
        this.documentTitleContentEditor.appendChild(this.documentTitle);
        this.tileBarDiv.appendChild(this.documentTitleContentEditor);
        this.documentTitleContentEditor.setAttribute('title', documentTileText);
        let btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;'
            + 'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;height:28px;font-weight:400;margin-top: 2px;';
        // tslint:disable-next-line:max-line-length
                                //addButton(iconClass:any, btnText:any, styles:any, id:any, tooltipText:any, isDropDown:any, items:any) {
        this.close = this.addButton('e-icons e-close e-de-padding-right', "", btnStyles, 'de-close', closeToolTip, false, []);
        this.print = this.addButton('e-de-icon-Print e-de-padding-right', printText, btnStyles, 'de-print', printToolTip, false, []);
        this.open = this.addButton('e-de-icon-Open e-de-padding-right', openText, btnStyles, 'de-open', openText, false, []);
        let items = [
            { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
            { text: 'Word Document (*.docx)', id: 'word' },
            { text: 'Word Template (*.dotx)', id: 'dotx' },
            { text: 'Plain Text (*.txt)', id: 'txt' },
        ];
        // tslint:disable-next-line:max-line-length
        this.export = this.addButton('e-de-icon-Download e-de-padding-right', downloadText, btnStyles, 'documenteditor-share', downloadToolTip, true, items);
        if (!isShareNeeded) {
            this.export.element.style.display = 'none';
        }
        else {
            this.open.element.style.display = 'none';
        }
        if (this.dialogComponent == null)
            this.close.element.style.display = 'none';
    };
    setTooltipForPopup() {
        // tslint:disable-next-line:max-line-length
        document.getElementById('documenteditor-share-popup')!.querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        // tslint:disable-next-line:max-line-length
        document.getElementById('documenteditor-share-popup')!.querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        // tslint:disable-next-line:max-line-length
        document.getElementById('documenteditor-share-popup')!.querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
        // tslint:disable-next-line:max-line-length
        document.getElementById('documenteditor-share-popup')!.querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
    }
    wireEvents = () => {
        this.print.element.addEventListener('click', this.onPrint);
        this.close.element.addEventListener('click', this.onClose);
        this.open.element.addEventListener('click', (e:any) => {
            if (e.target.id === 'de-open') {
                let fileUpload:any = document.getElementById('uploadfileButton');
                fileUpload!.value = '';
                fileUpload.click();
            }
        });
        this.documentTitleContentEditor.addEventListener('keydown', (e:any) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.documentTitleContentEditor.contentEditable = 'false';
                if (this.documentTitleContentEditor.textContent === '') {
                    this.documentTitleContentEditor.textContent = 'Document1';
                }
            }
        });
        this.documentTitleContentEditor.addEventListener('blur', () => {
            if (this.documentTitleContentEditor.textContent === '') {
                this.documentTitleContentEditor.textContent = 'Document1';
            }
            this.documentTitleContentEditor.contentEditable = 'false';
            this.documentEditor.documentName = this.documentTitle.textContent;
        });
        this.documentTitleContentEditor.addEventListener('click', () => {
            this.updateDocumentEditorTitle();
        });
    };
    updateDocumentEditorTitle = () => {
        this.documentTitleContentEditor.contentEditable = 'true';
        this.documentTitleContentEditor.focus();
        window.getSelection()!.selectAllChildren(this.documentTitleContentEditor);
    };
    // Updates document title.
    updateDocumentTitle = () => {
        if (this.documentEditor.documentName === '') {
            this.documentEditor.documentName = 'Untitled';
        }
        this.documentTitle.textContent = this.documentEditor.documentName;
    };
    // tslint:disable-next-line:max-line-length
    addButton(iconClass:any, btnText:any, styles:any, id:any, tooltipText:any, isDropDown:any, items:any) {
        let button = createElement('button', { id: id, styles: styles });
        this.tileBarDiv.appendChild(button);
        button.setAttribute('title', tooltipText);
        if (isDropDown) {
            // tslint:disable-next-line:max-line-length
            let dropButton:any = new DropDownButton({ select: this.onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: () => { this.setTooltipForPopup(); } }, button as any);
            return dropButton;
        }
        else {
            let ejButton = new Button({ iconCss: iconClass, content: btnText }, button as any);
            return ejButton;
        }
    }
    onPrint = () => {
        this.documentEditor.print();
    };
    onClose = () => {
        this.dialogComponent.hide();
    };
    onExportClick = (args:any) => {
        let value = args.item.id;
        switch (value) {
            case 'word':
                this.save('Docx');
                break;
            case 'sfdt':
                this.save('Sfdt');
                break;
            case 'txt':
                this.save('Txt');
                break;
            case 'dotx':
                this.save('Dotx');
                break;
        }
    };
    save = (format:any) => {
        // tslint:disable-next-line:max-line-length
        this.documentEditor.save(this.documentEditor.documentName === '' ? 'sample' : this.documentEditor.documentName, format);
    };
}
