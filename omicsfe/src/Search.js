import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Grid, Header, Table } from 'semantic-ui-react'
import { omicApis } from './Api';

export default function Search(props) {

    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState(null);
    var geneList = []

    function appendSelectedOption(value) {
        geneList = [...selectedOption, value]
    }
    useEffect(() => {
        const results = []
        fetch(omicApis.getAllGenName.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then((data) => {
                data.forEach((value) => {
                    results.push({
                        key: value.name,
                        value: value.name,
                        text: value.name
                    });
                });
                setOptions(results);
            }).catch((error) => console.log(error));

    }, []);

    return (
        <div className='search-bar'>
            <Grid.Row className='search-text'>
                <Grid.Column>
                    <Dropdown
                        placeholder='Search Gene IDs...'
                        fluid
                        multiple
                        search
                        selection
                        size="massive"
                        options={options}
                        onChange={(e, data) => appendSelectedOption(data.value)}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='search-text'>
                <Grid.Column>
                    <Button
                        primary
                        onClick={() => props.retrieveData(geneList)}
                    > Retrieve Data
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </div>
    );
}