import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EventIcon from '@mui/icons-material/Event';
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';

const UpcommingEvents = () => {

    // const rows = [
    //     createData('Legacy sdf sdf sdf sdfs', 'Oct 24,2022', '11.30 AM'),
    //     createData('Legacy', 'Oct 24,2022', '11.30 AM'),
    //     createData('Legacy', 'Oct 24,2022', '11.30 AM'),
    //     createData('Legacy', 'Oct 24,2022', '11.30 AM'),
    // ];
    const [rows, setRows] = useState()

    const datetime = moment.utc();

    const formatTime = (time) => {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/eventScheduling/filter?eventStatus=Publish`)
            .then((res) => {
                console.log(res.data, "res.data")
                let arr = res.data;
                let i;
                let list = [];
                for (i = 0; i < arr.length; i++) {
                    const { eventName, date, time } = arr[i]

                    if (datetime.diff(moment.utc(arr[i].date)) < 0) {
                        list.push({ eventName: eventName, 
                            date: (new Date(date).getMonth() + 1) + '/' + (new Date(date).getDate()) + '/' + (new Date(date).getFullYear()), 
                            time:  formatTime(new Date(time)) })
                    }
                }
                setRows(list)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <TableContainer sx={{ mt: 5, boxShadow: 'none', width: 'fit-content' }} component={Paper}>
            <Table sx={{ maxWidth: '90%' }} size="small" aria-label="a dense table">
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow
                            key={row.eventName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& td': { whiteSpace: 'nowrap' } }}
                        >
                            <TableCell style={{ borderBottom: "none", }} >
                                <EventIcon />
                            </TableCell>
                            <TableCell style={{ borderBottom: "none" }} >
                                {row.eventName}
                            </TableCell>
                            <TableCell style={{ borderBottom: "none" }}>{row.date}</TableCell>
                            <TableCell style={{ borderBottom: "none" }}>{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UpcommingEvents