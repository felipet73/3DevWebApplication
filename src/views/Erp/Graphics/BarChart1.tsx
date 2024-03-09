/**
 * Sample for Column Series with disabled side by side placement
 */
import * as React from "react";
import { useEffect } from 'react';
import * as ReactDOM from "react-dom";
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, ChartTheme, ColumnSeries3D, Category3D, Tooltip3D, Chart3DLoadedEventArgs, Legend3D, Highlight3D } from '@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
export let data1: any[] = [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }, { x: 'Jack', y: 1 }, { x: 'Lucas', y: 1 }];
export let data2: any[] = [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }, { x: 'Jack', y: 2 }, { x: 'Lucas', y: 3 }];
export let data3: any[] = [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }, { x: 'Jack', y: 5 }, { x: 'Lucas', y: 6 }];
export let data4: any[] = [{ x: 'Jamesh', y: 10, text: 'Total 10' }, { x: 'Michael', y: 9, text: 'Total 9' }, { x: 'John', y: 11, text: 'Total 11' }, { x: 'Jack', y: 8, text: 'Total 8' }, { x: 'Lucas', y: 10, text: 'Total 10' }];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
        height:100%;
    }`;
/**
 * Column Side placment sample
 */
const BarChart1 = () => {

    const onChartLoad = (args: Chart3DLoadedEventArgs): void => {
        let chart: Element = document.getElementById('charts') as Element;
        chart.setAttribute('title', '');
    };
    const load = (args: Chart3DLoadedEventArgs): void => {
        let selectedTheme: string = document.location?.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast') as ChartTheme as ChartTheme;
    };

    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <Chart3DComponent id='charts' style={{ textAlign: "center" }}
                    load={load.bind(this)}
                    rotation={Browser.isDevice ? 5 : 25}
                    depth={500}
                    height='90%'
                    primaryXAxis={{
                        valueType: 'Category', interval: 1,
                        labelPlacement: 'BetweenTicks',
                        labelRotation: -45
                    }}
                    primaryYAxis={{
                        interval: Browser.isDevice ? 4 : 2
                    }}
                    enableSideBySidePlacement={false}
                    //title='Graphic Advance'
                    tooltip={{ enable: true }}
                    legendSettings={{ visible: true, enableHighlight: true }}
                    width={Browser.isDevice ? '100%' : '75%'}
                    loaded={onChartLoad.bind(this)}>
                    <Inject services={[ColumnSeries3D, Category3D, Tooltip3D, Legend3D, Highlight3D]} />
                    <Chart3DSeriesCollectionDirective>
                        <Chart3DSeriesDirective dataSource={data1} xName='x' yName='y' name='Grapes' type='Column'
                            columnWidth={0.2}
                        >
                        </Chart3DSeriesDirective>
                        <Chart3DSeriesDirective dataSource={data2} xName='x' yName='y' name='Orange' type='Column'
                            columnWidth={0.2}
                        >
                        </Chart3DSeriesDirective>
                        <Chart3DSeriesDirective dataSource={data3} xName='x' yName='y' name='Apple' type='Column'
                            columnWidth={0.2}
                        >
                        </Chart3DSeriesDirective>
                        <Chart3DSeriesDirective dataSource={data4} xName='x' yName='y' name='Total' type='Column'
                            columnWidth={0.2}
                        >
                        </Chart3DSeriesDirective>
                    </Chart3DSeriesCollectionDirective>
                </Chart3DComponent>
            </div>

        </div>
    )
}
export default BarChart1;