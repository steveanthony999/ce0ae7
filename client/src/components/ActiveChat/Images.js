import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: '200px',
    height: '160px',
  },
}));

const Images = ({ images, origin }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems='center' justifyContent='flex-end'>
      {images.map((image) => (
        <Grid item key={image} className={classes.imageContainer}>
          <img
            src={image}
            alt={image}
            width='100%'
            height='100%'
            // style={{ borderRadius: radius.imageRadius }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
