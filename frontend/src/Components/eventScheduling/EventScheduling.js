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
import SearchBar from './SearchBar';
import Container from '@mui/material/Container';
import FilterStatus from './FilterStatus';
import FilterYear from './FilterYear';
import GenerateReports from './GenerateReports';
import AddEvents from './AddEvents';
import Grid from '@mui/material/Grid';

const EventScheduling = () => {
    return (
        <>
            <Container sx={{ ml: 36 }}>
                <SearchBar />
            </Container>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterStatus />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <FilterYear />
                    </Grid>
                    <Grid item xs={12} md={8} lg={2}>
                        <GenerateReports />
                    </Grid>
                    <Grid item sx={{display:"flex", justifyContent:"flex-end"}} xs={12} md={8} lg={6}>
                        <AddEvents />
                    </Grid>
                </Grid>
            </Container>

            <Card sx={{ maxWidth: 360, mt: 4 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016 12.30 p.m."
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default EventScheduling