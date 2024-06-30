import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function FoodCard({img, name}) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt doloribus a totam reiciendis perspiciatis vero illo. 
              {/* Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
