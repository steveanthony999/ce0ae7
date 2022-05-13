import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: '200px',
    height: '160px',
  },
  imageStyles: {
    borderRadius: (props) =>
      props.origin === 'sender'
        ? props.withText
          ? '10px 10px 0 0'
          : '10px 10px 0 10px'
        : props.withText
        ? '0 10px 0 0'
        : '0 10px 10px 10px',
    marginTop: (props) =>
      props.images.length > 1 ? (props.multiImageWithText ? '10px' : 0) : 0,
  },
}));

const Images = (props) => {
  const { images } = props;
  const classes = useStyles(props);

  return (
    <Grid container spacing={2} alignItems='center' justifyContent='flex-end'>
      {images.map((image) => (
        <Grid item key={image} className={classes.imageContainer}>
          <img
            src={image}
            alt={image}
            width='100%'
            height='100%'
            className={classes.imageStyles}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
