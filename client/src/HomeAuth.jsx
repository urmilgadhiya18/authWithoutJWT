import "./Home.css";
import Button from "@mui/material/Button";
import FoodCard from './Card.jsx'
import {Link} from 'react-router-dom';


export default function HomeAuth() {
  return (
    <>
      <div className="navbar">
        <div className="logo text">Logo</div>
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
        <Link to="/">
        <Button size="large" variant="contained" className="btn">
          Logout
        </Button>
        </Link>
        {/* <Button size="large" variant="contained" className="btn">Sign In/Up</Button> */}
      </div>

      <div className="hero">
        <div className="cards">
          <FoodCard className="card" name="Burger" img="https://th.bing.com/th/id/OIP.FZK7tjVMdnaDVf_T2csb6QHaHa?w=626&h=626&rs=1&pid=ImgDetMain" />
          <FoodCard className="card" name="Pizza" img="https://png.pngtree.com/png-clipart/20231004/ourlarge/pngtree-pizza-slice-for-hotel-and-restaurants-menu-png-image_10191428.png"/>
          <FoodCard className="card" name="Donut" img="https://s3.envato.com/files/251613029/14.jpg"/>
          <FoodCard className="card" name="HotDog" img="https://s3.envato.com/files/251613029/04.jpg"/>
          {/* <FoodCard className="card" name="Burger" img="https://craftwork-images.b-cdn.net/wp-content/uploads/edd/2024/01/69.png" /> */}
          {/* <FoodCard className="card" name="SandWich" img="https://s3.envato.com/files/251613029/16.jpg"/>
          <FoodCard className="card" name="Pizza" img="https://img.lovepik.com/free-png/20220513/lovepik-creative-c4d-cartoon-style-pizza-3d-food-stereo-png-image_wh1200.png"/>
          <FoodCard className="card" name="Combo" img="https://www.shutterstock.com/image-illustration/fast-food-hamburger-french-fries-260nw-2083198933.jpg"/> */}
        </div>
        {/* <img src="https://static.vecteezy.com/system/resources/previews/013/079/422/original/3d-illustration-of-restaurant-3d-rendering-of-a-fast-food-restaurant-on-blue-background-3d-rendering-png.png" alt="" /> */}
        {/* <img src="https://img.freepik.com/premium-photo/group-cartoon-characters-with-cupcake-top_662214-100605.jpg" alt="" /> */}
      </div>
    </>
  );
}
