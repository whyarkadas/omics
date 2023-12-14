import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Grid, Header, Table } from 'semantic-ui-react'
import OmicData from './OmicData';
import Search from './Search';
import { omicApis } from './Api';


export default function Omics() {
    const [omics, setOmics] = useState(null);

    function retrieveData(geneList) {
        fetch(omicApis.getGenData.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'genes': geneList
            })
        }).then(response => response.json())
            .then((data) => {
                setOmics(data);
            }).catch((error) => console.log(error));
    }

    return (
        <Grid className='grid-layout'>
            <Grid.Row>
                <Header className='search-text' as='h1'>Omics Data Retrieval and Analysis System</Header>
            </Grid.Row>
            <Search retrieveData={retrieveData}></Search>
            {omics && <OmicData omics={omics} />}
        </Grid>
    );
}