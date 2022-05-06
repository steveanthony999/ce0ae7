import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: '200px',
    height: '160px',
  },
}));

const Images = ({ images, origin, withText, multiImageWithText }) => {
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
            style={{
              borderRadius:
                origin === 'sender'
                  ? withText
                    ? '10px 10px 0 0'
                    : '10px 10px 0 10px'
                  : withText
                  ? '0 10px 0 0'
                  : '0 10px 10px 10px',
              marginTop:
                images.length > 1 ? (multiImageWithText ? '10px' : 0) : 0,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
