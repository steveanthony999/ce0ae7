import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
}));

const SenderBubble = ({ time, text, images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Message time={time} text={text} images={images} origin='sender' />
    </Box>
  );
};

export default SenderBubble;
