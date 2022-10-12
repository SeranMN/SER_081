import React, { useEffect, useState } from 'react'
import SearchBar from './MemberSearchBar';
import Container from '@mui/material/Container';
// import FilterStatus from './FilterStatus';
import MemberGenerateReport from './MemberGenerateReport';
import AddBoardMembers from './AddBoardMembers';
import Grid from '@mui/material/Grid';
import FilterYear from '../eventScheduling/FilterYear';
import Designation from './Designation';
import axios from 'axios';
import MemberList from './MemberList';
// import { useSelector } from 'react-redux';

const ViewBoardMembers = () => {

    const [members, setMembers] = useState([])
    const [toggle, setToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    // const year = useSelector(state => state.filterEvents.year)

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

    const findMembers = (boardMemberName) => {
        if (boardMemberName) {
            axios.get(`http://localhost:5000/boardMembers/search/${boardMemberName}`)

                .then((res) => {
                    let arr = res.data;
                    let i;
                    let list = [];
                    for (i = 0; i < arr.length; i++) {
                        list.push(arr[i]);
                    }
                    setMembers(list)
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    };

    useEffect(() => {
        let query
        // if (status && year) {
        //     query = `?eventStatus=${status}&year=${year}`
        // }
        // else if (status) {
        //     query = `?eventStatus=${status}`
        // }
        // else if (year) {
        //     query = `?year=${year}`
        // }
        axios.get(`http://localhost:5000/boardMembers/filter${query}`)
        .then((res) => {
            console.log(res.data, "res.data")
            let arr = res.data;
            let i;
            let list = [];
            for (i = 0; i < arr.length; i++) {
                list.push(arr[i]);
            }
            setMembers(list)
        })
        .catch((err) => {
            console.log(err);
        });

    }, [])

    return (
        <>
            <Container sx={{ ml: 40 }}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} findMembers={findMembers} />
            </Container>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={2}>
                        <Designation />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterYear />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <MemberGenerateReport />
                    </Grid>
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