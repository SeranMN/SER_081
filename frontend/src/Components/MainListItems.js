import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AdminHome from './AdminHome';
import EventScheduling from './eventScheduling/EventScheduling';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const MainListItems = ({setView,setHeader}) => {
    return (
        <>
            <ListItemButton onClick={() => {
                setHeader("Dashboard")
                setView(<AdminHome/>)
            }}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DriveFolderUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Board Members" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                setHeader("Events")
                setView(<EventScheduling/>)
            }}>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
            </ListItemButton>
        </>
    )
}

export default MainListItems

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//     </React.Fragment>
// );