import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 14,
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    maxWidth: '185px',
  },
}));

const Text = ({ text, origin, withImage }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.bubble}
      style={{
        borderRadius:
          origin === 'sender'
            ? withImage
              ? '0 0 0 10px'
              : '10px 10px 0 10px'
            : withImage
            ? '0 0 10px 10px'
            : '0 10px 10px 10px',
        background:
          origin === 'sender'
            ? '#F4F6FA'
            : 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
        marginLeft: origin === 'sender' && 'auto',
      }}>
      <Typography
        className={classes.text}
        style={{
          color: origin === 'sender' ? '#91A3C0' : '#FFFFFF',
          textAlign: origin === 'sender' && 'right',
        }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Text;
