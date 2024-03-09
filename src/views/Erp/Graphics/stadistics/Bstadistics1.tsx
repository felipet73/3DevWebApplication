/**
 * Sample for Polar Series with drawType Scatter
 */
import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartSeriesType, Legend, Category, ILoadedEventArgs, PolarSeries, RadarSeries, ScatterSeries, Tooltip, ChartTheme, Highlight } from '@syncfusion/ej2-react-charts';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
export let data1: any[] = [
    { text: 'Myanmar', x: 'MMR', y: 7.3, y1: 6.3, y2: 7.5 },
    { text: 'India', x: 'IND', y: 7.9, y1: 6.8, y2: 7.2 },
    { text: 'Bangladesh', x: 'BGD', y: 6.8, y1: 6.9, y2: 6.9 },
    { text: 'Cambodia', x: 'KHM', y: 7.0, y1: 7.0, y2: 6.9 },
    { text: 'China', x: 'CHN', y: 6.9, y1: 6.7, y2: 6.6 },
    { text: 'Bhutan', x: 'BTN', y: 6.1, y1: 6.2, y2: 5.9 },
    { text: 'Iceland', x: 'ISL', y: 4.1, y1: 7.2, y2: 5.7 },
    { text: 'Nepal', x: 'NPL', y: 2.7, y1: 0.6, y2: 5.5 },
    { text: 'Pakistan', x: 'PAK', y: 4.0, y1: 4.7, y2: 5.0 },
    { text: 'Poland', x: 'POL', y: 3.9, y1: 2.7, y2: 3.4 },
    { text: 'Australia', x: 'AUS', y: 2.4, y1: 2.5, y2: 3.1 },
    { text: 'Korea', x: 'KOR', y: 2.8, y1: 2.8, y2: 2.7 },
    { text: 'Singapore', x: 'SGP', y: 1.9, y1: 2.0, y2: 2. },
    { text: 'Canada', x: 'CAN', y: 0.9, y1: 1.4, y2: 1.9 },
    { text: 'Germany', x: 'DEU', y: 1.5, y1: 1.8, y2: 1.6 },
    { text: 'Denmark', x: 'DNK', y: 1.6, y1: 1.1, y2: 1.5 },
    { text: 'France', x: 'FRA', y: 1.3, y1: 1.3, y2: 1.4 },
    { text: 'Austria', x: 'AUT', y: 1.0, y1: 1.5, y2: 1.4 }
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
        width: 50%;
    }`;
const Bstadistics1 = () => {
    const [type, setType] = useState<ChartSeriesType>('Polar');
    let chartInstance = useRef<ChartComponent>(null);
    let dropElement = useRef<DropDownListComponent>(null);
    let loaded: EmitType<ILoadedEventArgs>;

    const onChartLoad = (args: ILoadedEventArgs): void => {
        document.getElementById('chartsST1')!.setAttribute('title', '');
    };
    const load = (args: ILoadedEventArgs): void => {
        let selectedTheme: string = document.location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast') as ChartTheme;
    };
    const change = (): void => {
        chartInstance.current!.series[0].type = dropElement.current!.value as ChartSeriesType;
        chartInstance.current!.series[1].type = dropElement.current!.value as ChartSeriesType;
        chartInstance.current!.series[2].type = dropElement.current!.value as ChartSeriesType;
        chartInstance.current!.series[0].animation!.enable = false;
        chartInstance.current!.series[1].animation!.enable = false;
        chartInstance.current!.series[2]!.animation!.enable = false;
       chartInstance.current!.refresh();
    };
    let droplist: { [key: string]: Object }[] = [
        { value: 'Polar' },
        { value: 'Radar' }
    ];
    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section row' >
                <div className='col-md-12' style={{ display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        alignContent: 'stretch',
                        alignItems: 'center'  }}>
                    <ChartComponent id='chartsST1' ref={chartInstance} primaryXAxis={{ valueType: 'Category', labelPlacement: 'OnTicks', interval: 1, coefficient: Browser.isDevice ? 80 : 100 }} primaryYAxis={{ labelFormat: '{value}%', minimum: 0, maximum: 8, interval: 2 }} legendSettings= {{ visible: true, enableHighlight: true }} load={load.bind(this)} 
                        //title="GDP by Countries" 
                        loaded={onChartLoad.bind(this)} tooltip={{ enable: true, format: '${point.text} : <b>${point.y}%</b>' }}>
                        <Inject services={[Legend, Category, PolarSeries, RadarSeries, Highlight, ScatterSeries, Tooltip]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='text' yName='y' name='2015' type={type} drawType='Scatter' marker={{ height: 7, width: 7, dataLabel: { name: 'text' } }} />
                            <SeriesDirective dataSource={data1} xName='text' yName='y1' name='2016' type={type} drawType='Scatter' marker={{ height: 7, width: 7, shape: 'Diamond', dataLabel: { name: 'text' } }} />
                            <SeriesDirective dataSource={data1} xName='text' yName='y2' name='2017' type={type} drawType='Scatter' marker={{ height: 7, width: 7, shape: 'Triangle', dataLabel: { name: 'text' } }} />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>

            </div>
        </div>
    )    
}
export default Bstadistics1;