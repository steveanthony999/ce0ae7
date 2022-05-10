import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar } from '@material-ui/core';
import Message from './Message';

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
      <Message text={text} time={time} images={images} origin={otherUser} />
    </Box>
  );
};

export default OtherUserBubble;
