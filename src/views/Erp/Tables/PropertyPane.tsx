import * as React from 'react';
export let PropertyPaneProps = { title: '', children: null };
export const PropertyPane = ({ title, children }: any) => {
    PropertyPaneProps.title = title;
    PropertyPaneProps.children = children;
    return (<div className='property-panel-section'>
        <div className="property-panel-header">
            {title}
        </div>
        <div className="property-panel-content">
            {children}
        </div>
    </div>);

}