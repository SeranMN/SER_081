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
      <Stack spacing={2}>
        {projects.map((pro) => (
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Box sx={{ width: 1100, minHeight: 150 }}>
              <Card>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid md={4}>
                    <CardContent
                      component="img"
                      src={pro.avatar}
                      height={"300"}
                      width={"300"}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  
                >
                  <Grid md={8}>
                    <CardContent>
                      <Typography sx={{ fontSize: 30 }} gutterBottom>
                        {pro.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Grid>
                  <Grid md={8}>
                    <CardContent>
                      <Typography sx={{ fontSize: 28}} gutterBottom>
                        {pro.Description}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
        ))}
      </Stack>
    </Container>
  );
};

export default HomeProjects;
