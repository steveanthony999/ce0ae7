import React from 'react';
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
    marginBottom: 5,
    textAlign: 'right',
  },
}));

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.date}>{time}</Typography>
        {images && images.length > 1 ? (
          <>
            {text && <Text text={text} origin='sender' />}
            {
              <Images
                images={images}
                origin='sender'
                multiImageWithText={text && true}
              />
            }
          </>
        ) : (
          <>
            {images && (
              <Images images={images} origin='sender' withText={text && true} />
            )}
            {text && (
              <Text text={text} origin='sender' withImage={images && true} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default SenderBubble;
