import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Designation = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{  }}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Event Status"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Secreatary</MenuItem>
                    <MenuItem value={20}>Treasurer</MenuItem>
                    <MenuItem value={30}>President</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Designation