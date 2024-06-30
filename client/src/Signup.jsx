import "./SignInUp.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios'

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4004/signup',{name,email,password})
        .then(result=>{
            // console.log(result)
            navigate('/signin')
        })
        .catch(err=>console.log(err))
    }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="signup">
        <div className="left">
          {/* <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/1488/Untitled_3.png" alt=""/> */}
          {/* <img src="https://img.freepik.com/premium-photo/3d-character-chef_935410-3388.jpg" alt="" /> */}
          <img src="https://img.freepik.com/premium-photo/3d-man-chef-cartoon-character_747552-20867.jpg" alt="" />
        </div>
        <div className="right">
          <h1 className="text">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
            //   id="outlined"
              label="Name"
              variant="outlined"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br />
            <TextField
              type="email"
            //   id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <br />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e)=>setPassword(e.target.value)}
                required
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <br />
            <Button type='submit' size="large" variant="contained" className="btn">
              Sign Up
            </Button>
          </form>
          <br />
          <div className="text">Already have an account? <Link to='/signin'>Sign In</Link></div>
        </div>
      </div>
    </>
  );
}
