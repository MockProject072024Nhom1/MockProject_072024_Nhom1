import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const GridCard = ({ name, number, icon, color }) => {
  return (
    <Grid item xs={2.5}>
      <Card
        sx={{
          backgroundColor: `${color}`,
          color: '#fff',
          borderRadius: '4px'
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" width="100%">
            {icon}
            {number}
          </Typography>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GridCard;
