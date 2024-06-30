import "./Home.css";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="navbar">
        <div className="logo text">Logo</div>
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
        <Link to="/signin">
          <Button size="large" variant="contained" className="btn">
            Sign In/Up
          </Button>
        </Link>
      </div>

      <div className="hero">
        {/* <img src="https://static.vecteezy.com/system/resources/previews/013/079/422/original/3d-illustration-of-restaurant-3d-rendering-of-a-fast-food-restaurant-on-blue-background-3d-rendering-png.png" alt="" /> */}
        {/* <img src="https://img.freepik.com/premium-photo/group-cartoon-characters-with-cupcake-top_662214-100605.jpg" alt="" /> */}
      </div>
    </>
  );
}
