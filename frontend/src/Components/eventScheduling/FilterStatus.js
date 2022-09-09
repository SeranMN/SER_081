import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterStatus = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{  }}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Event Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Event Status"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Pending</MenuItem>
                    <MenuItem value={20}>Approved</MenuItem>
                    <MenuItem value={30}>Rejected</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default FilterStatus