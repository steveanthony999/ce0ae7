import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import HeroImage from './HeroImage';

const useStyles = makeStyles((theme) => ({
  form: {
    minHeight: '100vh',
    paddingBottom: '15%',
  },
  input: {
    width: '40vw',
    marginBottom: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  top: {
    width: '100%',
    paddingTop: '20px',
    paddingRight: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '10px',
      justifyContent: 'center',
    },
  },
  topText: {
    color: '#B0B0B0',
    fontSize: '14px',
  },
  button: {
    padding: '15px 40px ',
    marginLeft: '30px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 6px rgba(74, 106, 149, 0.2)',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 30px',
      marginLeft: '10px',
    },
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: '35px',
    marginTop: '120px',
  },
  submitButton: {
    width: '160px',
    height: '56px',
  },
}));

const Auth = ({ user, login, register, isLogin }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container>
      <HeroImage />
      <Grid
        container
        item
        sm={12}
        md={7}
        justifyContent='center'
        alignItems='flex-start'
        className={classes.form}>
        <Grid
          container
          item
          justifyContent='flex-end'
          alignItems='center'
          className={classes.top}>
          <Typography className={classes.topText}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Typography>
          <Button
            size='large'
            color='primary'
            className={classes.button}
            style={{ fontSize: '14px' }}
            onClick={() => history.push(isLogin ? '/register' : '/login')}>
            {isLogin ? 'Create account' : 'Login'}
          </Button>
        </Grid>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <Grid>
            <Typography component='h4' className={classes.headerText}>
              {isLogin ? 'Welcome back!' : 'Create an account'}
            </Typography>
            {isLogin ? (
              <LoginForm />
            ) : (
              <SignUpForm formErrorMessage={formErrorMessage} />
            )}
            <Grid container justifyContent='center'>
              <Button
                type='submit'
                variant='contained'
                size='large'
                color='primary'
                className={classes.submitButton}>
                {isLogin ? 'Login' : 'Create'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
export default Auth;
