import React, { useState, useEffect } from 'react'

import SearchBar from './SearchBar';
import Container from '@mui/material/Container';
import FilterStatus from './FilterStatus';
import FilterYear from './FilterYear';
import GenerateReports from './GenerateReports';
import AddEvents from './AddEvents';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import EventList from './EventList';

const EventScheduling = () => {

    const [events, setEvents] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        function getEvents() {
            axios.get(`http://localhost:5000/eventScheduling/viewevents`).then((res) => {
                console.log(res.data)
                setEvents(res.data)

            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getEvents()

    }, [toggle])

    return (
        <>
            <Container sx={{ ml: 36 }}>
                <SearchBar />
            </Container>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterStatus />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterYear />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <GenerateReports />
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "flex-end" }} xs={12} md={8} lg={6}>
                        <AddEvents setToggle={setToggle} toggle={toggle} />
                    </Grid>
                </Grid>
            </Container>
            <EventList events={events} />

        </>
    )
}

export default EventScheduling