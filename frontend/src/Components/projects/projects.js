import { useState, useEffect, forwardRef, React } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { TextareaAutosize, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";


const Projects = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projectName, setProjectName] = useState();
  const [date, SetDate] = useState("");
  const [description, setDescription] = useState();

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

  const onSubmit = async () => {
    const project = {
      name: projectName,
      Date: date.$D + "/" + date.$M + "/" + date.$y,
      Description: description,
    };
    axios
      .post("http://localhost:5000/project/add", project)
      .then(() => {
        setMsg("Successfully Added Projects");
        SetSeverity("success");
        setOpenSnack(true);
      })
      .catch((err) => {
        setMsg("oops! Somthing Went Wrong");
        SetSeverity("error");
        setOpenSnack(true);
        console.log(err);
      });

    setOpen(false);
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, [onSubmit]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };
  return (
    <>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="success"
          style={{
            left: 500,
            top: 10,
            width: 200,
            height: 50,
            fontSize: 20,
          }}
        >
          Add Projects
        </Button>


      <div div style={{
        position: "absolute",
        top: 100,
        marginTop:100
      }
      }>
        <Grid container spacing={2}>
          {projects.map((pro) => (

            <Grid item>
              <Box sx={{ maxWidth: 600, minHeight: 150 }}>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 25 }} gutterBottom>
                      {pro.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/projectsdes/${pro._id}`}>
                      <Button size="small">Learn More</Button>
                    </Link>

                  </CardActions>
                </Card>
              </Box>

            </Grid>
          ))}
        </Grid>
      </div >

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Projects
          </Typography>
          <Stack spacing={2}>
            <TextField
              required
              id="outlined-basic"
              label="Project Name"
              variant="outlined"
              style={{ width: 400 }}
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />{" "}
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic example"
                value={date}
                onChange={(e) => {
                  SetDate(e);
                }}
                style={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextareaAutosize
              required
              id="outlined-basic"
              placeholder="Description"
              style={{ width: 400, maxHeight: 400 }}

              minRows={20}
              maxRows={40}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            {projectName === "" ||
              date === "" ||
              description === "" ||
              projectName === null ||
              date === null ||
              description === null ? (
              <Button variant="contained" color="success" disabled="true">
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="success" onClick={onSubmit}>
                Submit
              </Button>
            )}
          </Stack>
        </Box>
      </Modal>

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

export default Projects;
