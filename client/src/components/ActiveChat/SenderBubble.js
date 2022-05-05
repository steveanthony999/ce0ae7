import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Images from './Images';
import Text from './Text';

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
}));

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();

  const [radius, setRadius] = useState({
    bubbleRadius: '10px 10px 0 10px',
    imageRadius: '10px 10px 0 10px',
  });

  useEffect(() => {
    images &&
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
        {images && <Images images={images} origin='sender' />}
        {text && <Text text={text} origin='sender' />}
      </Box>
    </Box>
  );
};

export default SenderBubble;
