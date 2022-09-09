import React from 'react'
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';

const GenerateReports = () => {
    return (
        <>
            <Button sx={{backgroundColor:'#757ce8'}} variant="contained" size="medium" startIcon={<AssignmentIcon />}>Reports</Button>
        </>
    )
}

export default GenerateReports