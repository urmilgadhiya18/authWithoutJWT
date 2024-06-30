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

export default function Signin() {

  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4004/signin',{email,password})
        .then(result=>{
            if(result.data==="Success"){
              navigate('/home')
            }
        })
        .catch(err=>console.log(err))
    }

  return (
    <>
      <div id="signin">
        <div className="left">
          {/* <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/1488/Untitled_3.png" alt="" /> */}
          <img src="https://img.freepik.com/premium-photo/3d-character-chef_935410-3388.jpg" alt="" />
          {/* <img src="https://static.vecteezy.com/system/resources/previews/013/079/422/original/3d-illustration-of-restaurant-3d-rendering-of-a-fast-food-restaurant-on-blue-background-3d-rendering-png.png" alt="" /> */}
          {/* <img src="https://img.freepik.com/premium-photo/3d-man-chef-cartoon-character_747552-20867.jpg" alt="" /> */}
        </div>
        <div className="right">
          <h1 className="text">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <br />

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e)=>setPassword(e.target.value)}
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
            <Button type="submit" size="large" variant="contained" className="btn">
              Sign In
            </Button>
          </form>
          <br/>
          <div className='text'>Doesn't have an account yet? <Link to='/signup'>Sign Up</Link></div>
        </div>
      </div>
    </>
  );
}
