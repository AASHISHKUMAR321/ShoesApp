import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  image,
  brand,
  description,
  price,
  addtocart,
  handler,
  id,
}) {
  return (
    <Card sx={{ maxWidth: 280 }} onClick={() => handler(id)}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          <h4>{brand}</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rs-{price}</Button>
        <Button size="small" onClick={addtocart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
