import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import HomeAuth from "./HomeAuth.jsx";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/home' element={<HomeAuth />}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Home /> */}
      {/* <HomeAuth /> */}
      {/* <Signup /> */}
      {/* <br /><br /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
