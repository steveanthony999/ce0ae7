import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from './components/HeroImage';

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
  button: {
    width: '140px',
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
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: '35px',
    marginTop: '120px',
  },
  submitButton: {
    width: '160px',
    height: '56px',
  },
}));

const Login = ({ user, login }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
          <Typography color='textSecondary'>Need to register?</Typography>
          <Button
            size='large'
            color='primary'
            className={classes.button}
            onClick={() => history.push('/register')}>
            Register
          </Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Typography component='h4' className={classes.headerText}>
              Welcome back!
            </Typography>
            <Grid>
              <FormControl margin='normal' required>
                <TextField
                  aria-label='username'
                  label='Username'
                  name='username'
                  type='text'
                  className={classes.input}
                  inputProps={{ style: { fontSize: 18 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                />
              </FormControl>
            </Grid>
            <FormControl margin='normal' required>
              <TextField
                label='password'
                aria-label='password'
                type='password'
                name='password'
                className={classes.input}
                inputProps={{ style: { fontSize: 18 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </FormControl>
            <Grid container justifyContent='center'>
              <Button
                type='submit'
                variant='contained'
                size='large'
                color='primary'
                className={classes.submitButton}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
