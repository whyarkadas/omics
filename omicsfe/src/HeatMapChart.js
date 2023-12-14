import { Header } from 'semantic-ui-react';
import { HeatMapComponent, Inject, Legend, Tooltip } from '@syncfusion/ej2-react-heatmap';
export default function HeatMapChart(props) {
    const omic = props.data

    const heatmapData = [
        [omic.exper_rep1, omic.exper_rep2, omic.exper_rep3],
        [omic.control_rep1, omic.control_rep2, omic.control_rep3]];

    const xAxis = {
        labels: ['expression', 'control'],
    }

    const yAxis = {
        labels: ['1', '2', '3'],
    }

    return (
        <>
            <Header as='h3'>Gene Expressions Heatmap</Header>
            <HeatMapComponent
                xAxis={xAxis}
                yAxis={yAxis}
                dataSource={heatmapData}>
                <Inject services={[Legend, Tooltip]} />
            </HeatMapComponent>
        </>
    );
}
