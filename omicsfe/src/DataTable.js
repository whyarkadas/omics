import React, { useState, useEffect } from 'react';
import { Button, Grid, Header, Table, Label } from 'semantic-ui-react'
import Statistics from './Statistics';
import StatChart from './StatChart';
import HeatMapChart from './HeatMapChart';

export default function DataTable(props) {
    return (
        <div className='search-text'>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>gene</Table.HeaderCell>
                        <Table.HeaderCell>transcript</Table.HeaderCell>
                        <Table.HeaderCell>exper_rep1</Table.HeaderCell>
                        <Table.HeaderCell>exper_rep2</Table.HeaderCell>
                        <Table.HeaderCell>exper_rep3</Table.HeaderCell>
                        <Table.HeaderCell>control_rep1</Table.HeaderCell>
                        <Table.HeaderCell>control_rep2</Table.HeaderCell>
                        <Table.HeaderCell>control_rep3</Table.HeaderCell>
                        <Table.HeaderCell>action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.omics.map(omic => (
                        <Table.Row>
                            <Table.Cell>{omic.gene}</Table.Cell>
                            <Table.Cell>{omic.transcript}</Table.Cell>
                            <Table.Cell>{omic.exper_rep1}</Table.Cell>
                            <Table.Cell>{omic.exper_rep2}</Table.Cell>
                            <Table.Cell>{omic.exper_rep3}</Table.Cell>
                            <Table.Cell>{omic.control_rep1}</Table.Cell>
                            <Table.Cell>{omic.control_rep2}</Table.Cell>
                            <Table.Cell>{omic.control_rep3}</Table.Cell>
                            <Table.Cell>
                                <Button
                                    primary
                                    onClick={() => props.getGeneStats(omic)}
                                >
                                    Analysis
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}