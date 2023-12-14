import _ from 'lodash'

import React, { useState } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const initialState = {
    loading: false,
    results: [],
    value: '',
}

function exampleReducer(state, action) {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }

        default:
            throw new Error()
    }
}

function GeneSearch() {
    const [state, dispatch] = React.useReducer(exampleReducer, initialState)
    const { loading, results, value } = state
    const { source, setSource } = useState([])


    const timeoutRef = React.useRef()
    const handleSearchChange = React.useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' })
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result) => re.test(result.title)

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(source, isMatch),
            })
        }, 300)
    }, []);

    React.useEffect(() => {
        const results = []
        fetch("http://localhost:3000/api/getAllGenName", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then((data) => {
                data.forEach((value) => {
                    results.push({
                        label: value.name,
                        value: value.name,
                    });
                });
                setSource(results);
            }).catch((error) => console.log(error));

        clearTimeout(timeoutRef.current)
    }, []);

    return (
        <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
            <Grid.Column>
                <Search
                    loading={loading}
                    placeholder='Search Gene IDs...'
                    onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                    }
                    onSearchChange={handleSearchChange}
                    results={results}
                    value={value}
                    size="huge"
                />
            </Grid.Column>
        </Grid>
    )
}

export default GeneSearch