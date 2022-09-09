import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
            <Paper
                component="form"
                sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 400, bgcolor: '#bdbdbd' }}
                variant="outlined"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Events"
                    inputProps={{ 'aria-label': 'search Events' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
    )
}

export default SearchBar