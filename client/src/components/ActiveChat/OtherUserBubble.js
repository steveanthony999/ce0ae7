import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar, Grid } from '@material-ui/core';

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
  bubble: {
    maxWidth: '185px',
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  imageContainer: {
    width: '200px',
    height: '160px',
  },
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

  const [radius, setRadius] = useState({
    bubbleRadius: '0 10px 10px 10px',
    imageRadius: '0 10px 10px 10px',
  });

  useEffect(() => {
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

export default OtherUserBubble;
