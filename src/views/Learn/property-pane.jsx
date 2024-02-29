import * as React from 'react';
export let PropertyPaneProps = { title: '', children: null };
export class PropertyPane extends React.Component {
    render() {
        PropertyPaneProps.title = this.props.title;
        PropertyPaneProps.children = this.props.children;
        return (<div className='property-panel-section'>
                <div className="property-panel-header">
                    {this.props.title}
                </div>
                <div className="property-panel-content">
                    {this.props.children}
                </div>
            </div>);
    }
}
