import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const MemberRemove = ({ handleClose1, id, toggle, setToggle }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/boardMembers/delete/${id}`).then((res) => {
            setToggle(!toggle)
            handleClose1()
        }).catch((err) => {
            console.log(err, "errr")
        })
    }
    return (
        <div>
            <MenuItem onClick={handleDelete}>
                Remove
            </MenuItem>
        </div>
    )
}

export default MemberRemove