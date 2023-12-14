import React, { useState, useEffect } from 'react';
import { Button, Grid, Header, Table, Label } from 'semantic-ui-react'
import Statistics from './Statistics';
import StatChart from './StatChart';
import HeatMapChart from './HeatMapChart';
import DataTable from './DataTable';
import { omicApis } from './Api';

export default function OmicData(props) {
    const [stat, setStat] = useState(null)
    const [omicData, setOmicData] = useState(null)

    function getGeneStats(omic) {
        setOmicData(omic)
        fetch(omicApis.getGenStats.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'gene': omic.gene
            })
        }).then(response => response.json())
            .then((data) => {
                setStat(data);
            }).catch((error) => console.log(error));
    }

    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Header as='h3'>Gene Expressions</Header>
                <DataTable
                    omics={props.omics}
                    getGeneStats={getGeneStats} />
            </Grid.Column>
            <Grid.Column width={16}>
                {stat && <Statistics stat={stat} />}
            </Grid.Column>
            <Grid.Column width={8}>
                {stat && <StatChart data={omicData} />}
            </Grid.Column>
            <Grid.Column width={8}>
                {stat && <HeatMapChart data={omicData} />}
            </Grid.Column>
        </Grid.Row>
    );
}