import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Images from './Images';
import Text from './Text';

const useStyles = makeStyles(() => ({
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}));

const Message = ({ time, text, images, origin }) => {
  const classes = useStyles();

  return (
    <Box>
      {origin === 'sender' ? (
        <Typography
          className={classes.date}
          style={{ textAlign: origin === 'sender' && 'right' }}>
          {time}
        </Typography>
      ) : (
        <Typography className={classes.date}>
          {origin.username} {time}
        </Typography>
      )}
      {images && images.length > 1 ? (
        <>
          {text && <Text text={text} origin={origin} />}
          {
            <Images
              images={images}
              origin={origin}
              multiImageWithText={text && true}
            />
          }
        </>
      ) : (
        <>
          {images && (
            <Images images={images} origin={origin} withText={text && true} />
          )}
          {text && (
            <Text text={text} origin={origin} withImage={images && true} />
          )}
        </>
      )}
    </Box>
  );
};
export default Message;
