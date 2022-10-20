import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import MembersCard from './MembersCard';

const MemberList = ({ members, toggle, setToggle }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={3}>
            {members.map((member, index) => (
                <Grid item xs={12} md={8} lg={4}>

                    {/* <MembersCard member={member} setToggle={setToggle} toggle={toggle}/> */}
                    <Card sx={{ maxWidth: 360, mt: 4 }}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={member.designation} 
                            subheader={<><p>{member.boardMemberName}</p> <>{member.year}</></>} 
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={member.avatar}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {member.description}
                            </Typography>
                        </CardContent>
                        <div style={{ margin: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <MembersCard member={member} setToggle={setToggle} toggle={toggle}/>
                               
                            </div>
                        </div>
                    </Card>
                </Grid>

            ))}
        </Grid>
    )
}

export default MemberList