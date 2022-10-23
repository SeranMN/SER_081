import { useState, useEffect, forwardRef, React } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
const HomeProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
        {projects.map((pro) => (
          <Card sx={{ margin: '4px', backgroundColor: '#9e9e9e' }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  src={pro && pro.avatar}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item xs={9} paddingRight={15} >
                <Typography variant="h4" sx={{ textAlign: 'center', mt: '35px' }} color='black' >
                  {pro.name}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'justify', mt: '25px',ml: '20px' }} color='black' paragraph>
                   ascacakj akhjc basjcka sckajc kaisjc askjc kasj cakjsc ka caksj kasj aksjv aksjv akv saj ashjv asjhv asjhv ahjv asjv sa
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
    </Container>
  );
};

export default HomeProjects;
