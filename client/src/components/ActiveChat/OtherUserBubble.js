import React from 'react';
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
    marginBottom: 5,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

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
        {images && images.length > 1 ? (
          <>
            {text && <Text text={text} />}{' '}
            {<Images images={images} multiImageWithText={text && true} />}
          </>
        ) : (
          <>
            {images && <Images images={images} withText={text && true} />}
            {text && <Text text={text} withImage={images && true} />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
