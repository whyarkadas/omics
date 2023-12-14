import React, { useState } from 'react';
import { Table, Header } from 'semantic-ui-react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function StatChart(props) {
    const rowData = props.data

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Gene Expressions',
            },
        },
    };

    const data = {
        labels: [1, 2, 3],
        datasets: [
            {
                label: "expression",
                data: [rowData.exper_rep1, rowData.exper_rep2, rowData.exper_rep3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: "control",
                data: [rowData.control_rep1, rowData.control_rep2, rowData.control_rep3],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    return (
        <>
            <Header as='h3'>Gene Expressions Chart</Header>
            <Bar options={options} data={data} />
        </>
    )
}