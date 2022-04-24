import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    minHeight: '100vh',
    backgroundImage: 'url("/assets/bg-img.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  overlay: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(#3A8DFF, #86B9FF)',
    opacity: 0.85,
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingBottom: '30%',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '10%',
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
    },
  },
}));

const HeroImage = () => {
  const classes = useStyles();

  return (
    <Grid item xs={5} className={classes.image}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        className={classes.overlay}>
        <Grid>
          <img src='/assets/bubble.svg' alt='chat bubble' width='90px' />
        </Grid>
        <Typography align='center' className={classes.heading}>
          Converse with anyone with any language
        </Typography>
      </Grid>
    </Grid>
  );
};
export default HeroImage;
