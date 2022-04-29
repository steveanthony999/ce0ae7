import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  bubble: {
    maxWidth: '185px',
    marginLeft: 'auto',
    background: '#F4F6FA',
  },
  imageContainer: {
    width: '200px',
    height: '160px',
  },
}));

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();

  const [radius, setRadius] = useState({
    bubbleRadius: '10px 10px 0 10px',
    imageRadius: '10px 10px 0 10px',
  });

  useEffect(() => {
    images.map((image) =>
      image
        ? text &&
          setRadius({
            ...radius,
            bubbleRadius: '0 0 0 10px',
            imageRadius: '10px 10px 0 0',
          })
        : setRadius({
            ...radius,
            bubbleRadius: '10px 10px 0 10px',
            imageRadius: '10px 10px 0 10px',
          })
    );
    // shut off 'radius' missing dependency as adding radius creates an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, text]);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.date}>{time}</Typography>
        {images && (
          <Grid
            container
            spacing={2}
            alignItems='center'
            justifyContent='flex-end'>
            {images.map((image) => (
              <Grid item key={image} className={classes.imageContainer}>
                <img
                  src={image}
                  alt={image}
                  width='100%'
                  height='100%'
                  style={{ borderRadius: radius.imageRadius }}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {text && (
          <Box
            className={classes.bubble}
            style={{ borderRadius: radius.bubbleRadius }}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SenderBubble;
