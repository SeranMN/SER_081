import React, { useEffect, useState } from 'react'
// import SearchBar from './SearchBar';
import Container from '@mui/material/Container';
// import FilterStatus from './FilterStatus';
// import GenerateReports from './GenerateReports';
import AddBoardMembers from './AddBoardMembers';
import Grid from '@mui/material/Grid';
import FilterYear from '../eventScheduling/FilterYear';
import Designation from './Designation';
import axios from 'axios';
import MemberList from './MemberList';

const ViewBoardMembers = () => {

    const [members, setMembers] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        function getBoardMembers() {
            axios.get("http://localhost:5000/boardMembers/viewMembers").then((res) => {
                console.log(res.data)
                setMembers(res.data)
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getBoardMembers()
    }, [toggle])

    return (
        <>
            {/* <Container sx={{ ml: 36 }}>
                <SearchBar />
            </Container> */}
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={2}>
                        <Designation />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterYear />
                    </Grid>
                    {/* <Grid item xs={12} md={8} lg={2}>
                        <GenerateReports />
                    </Grid> */}
                    <Grid item sx={{ display: "flex", justifyContent: "flex-end" }} xs={12} md={8} lg={6}>
                        <AddBoardMembers toggle={toggle} setToggle={setToggle} />
                    </Grid>
                </Grid>
            </Container>
            <MemberList members={members} />
        </>
    )
}

export default ViewBoardMembers