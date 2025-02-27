import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ComoTrabajamosCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height:400, m:1 }}>
    <CardActionArea sx={{ width: "100%", height:"100%"}}>
      <CardMedia
        component="img"
        height="200"
        image={item.imagen}
        alt={item.titulo}
        sx={{objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.descripcion}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ComoTrabajamosCard
