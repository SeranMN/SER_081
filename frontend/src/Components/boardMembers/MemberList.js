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

const MemberList = ({ members }) => {
    return (
        <Grid container spacing={3}>
            {members.map((event, index) => (
                <Grid item xs={12} md={8} lg={4}>

                    {/* <MembersCard member={member} setToggle={setToggle} toggle={toggle}/> */}
                    <Card sx={{ maxWidth: 360, mt: 4 }}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={event.designation}
                            subheader={event.boardMemberName}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={event.avatar}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {event.description}
                            </Typography>
                        </CardContent>
                        <div style={{ margin: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button  sx={{ backgroundColor: "#4caf50", boxShadow: 'none' }} autoFocus variant='contained' color="error" startIcon={<EditIcon />}>
                                    Edit
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Grid>

            ))}
        </Grid>
    )
}

export default MemberList