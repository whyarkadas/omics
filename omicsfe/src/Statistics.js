import React, { useState } from 'react';
import { Table, Header } from 'semantic-ui-react'

export default function Statistics(props) {
    return (
        <div className='search-text'>
            <Header as='h3'>Gene Stats</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Gene</Table.HeaderCell>
                        <Table.HeaderCell>Mean</Table.HeaderCell>
                        <Table.HeaderCell>Media</Table.HeaderCell>
                        <Table.HeaderCell>Variance</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{props.stat.gene}</Table.Cell>
                        <Table.Cell>{props.stat.mean}</Table.Cell>
                        <Table.Cell>{props.stat.median}</Table.Cell>
                        <Table.Cell>{props.stat.variance}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}