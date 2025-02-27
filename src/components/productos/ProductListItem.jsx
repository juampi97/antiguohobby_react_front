import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function ProductListItem({
  title,
  category,
  price,
  thumbnail,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumbnail}
          alt={title}
          sx={{ height: "250px", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {category}
          </Typography>
          <Divider variant="middle" component="div" sx={{ my:1 }} />
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            ${price}
          </Typography>
          <Divider variant="middle" component="div" sx={{ my:1 }} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ width:"100%", display:"flex", justifyContent:"center" }}>
          <Button disabled size="small" color="primary">
            Ver mas
          </Button>
          {/* <Button size="small" color="primary">
            Agregar
          </Button> */}
        </Box>
      </CardActions>
    </Card>
  );
}
