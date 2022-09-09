import { Button, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { React, useEffect, useState, forwardRef } from "react";
import { Link, useParams } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";

const ProjectDes = () => {
  const params = useParams();
  const [project, setProject] = useState("");

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [severity, SetSeverity] = useState("");
  const [msg, setMsg] = useState("");

  const [openSnack, setOpenSnack] = useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const deleteProject = async () => {
    axios
      .delete(`http://localhost:5000/project/delete/${params.id}`)
      .then(() => {
        setMsg("Massage Deleted Sucessfully");
        SetSeverity("success");
        setOpenSnack(true);
      })
      .catch((err) => {
        setMsg("Oops! Somthing Went Wrong");
        SetSeverity("error");
        setOpenSnack(true);
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/project/${params.id}`)
      .then(async (res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2}>

          <Typography variant="h1" gutterBottom>
            
            {project.name}
          </Typography>
          <Card>
             <CardContent
                  component="img"
                  src="/clublogo.png"
                  height={"150"} 
                  width={"150"}
                />
            <CardContent>
              <Typography>{project.Description}</Typography>
              </CardContent>
            </Card>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs = {2}>
            <Button onClick={deleteProject}>delete</Button>
          </Grid>
          <Grid item xs = {2}>
            <Button onClick={deleteProject}>delete</Button>
            </Grid>
        </Grid>
      </Stack>

      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProjectDes;
