import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import Images from './Images';
import Text from './Text';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: 20,
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 20,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

  const [radius, setRadius] = useState({
    bubbleRadius: '0 10px 10px 10px',
    imageRadius: '0 10px 10px 10px',
  });

  useEffect(() => {
    images &&
      images.map((image) =>
        image
          ? text &&
            setRadius({
              ...radius,
              bubbleRadius: '0 0 10px 10px',
              imageRadius: '0 10px 0 0',
            })
          : setRadius({
              ...radius,
              bubbleRadius: '0 10px 10px 10px',
              imageRadius: '0 10px 10px 10px',
            })
      );
    // shut off 'radius' missing dependency as adding radius creates an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, text]);

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {images && <Images images={images} />}
        {text && <Text text={text} />}
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
