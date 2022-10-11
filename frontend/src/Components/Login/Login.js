import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Alert from "../toast/Alert";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState();

  const login = () => {
    
    axios.post(`http://localhost:5000/login/${email}`, { password:pwd })
      .then((data) => {
        console.log(data.data);
        if (data.data == 'Invalid') {
          <Alert Severity = "error" Msg = "Invalid Crenditals"/>
        } else {
          navigate('/adminDashboard');
          <Alert Severity="Sucess" Msg="Login Sucessfull" open={true} />
        }
        
        
      }).catch((err) => {
        console.log(err)
    })
  }

  return (
      <div style={{ backgroundColor: "#0e0569", height: "100vh" }}>
      <Box
        component="span"
        sx={{
          mx: "100px",
          my: "20px",
          transform: "scale(0.8)",
        }}
      >
        <Card sx={{ width: 400, mx: "70%", my: "10%", height: "50%" }}>
          <CardContent>
            <Typography variant="h4">Login</Typography>
          </CardContent>
          <CardContent>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              sx={{ width: 300 }}
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </CardContent>
          <CardContent>
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              sx={{ width: 300 }}
              value={pwd}
              onChange={(e) => { setPwd(e.target.value) }}
            />
          </CardContent>
          <CardContent>
            <Button variant="contained" color="success" sx={{ width: 300 }} onClick = {login} >
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Login;
