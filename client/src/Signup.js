import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import HeroImage from './components/HeroImage';
import { makeStyles } from '@material-ui/core/styles';

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
    padding: '15px 40px',
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

const Signup = ({ user, register }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

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
          <Typography color='textSecondary'>
            Already have an account?
          </Typography>
          <Button
            size='large'
            color='primary'
            className={classes.button}
            onClick={() => history.push('/login')}>
            Login
          </Button>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid>
            <Typography component='h4' className={classes.headerText}>
              Create an account.
            </Typography>
            <Grid>
              <FormControl>
                <TextField
                  aria-label='username'
                  label='Username'
                  name='username'
                  type='text'
                  className={classes.input}
                  inputProps={{ style: { fontSize: 18 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <TextField
                  label='E-mail address'
                  aria-label='e-mail address'
                  type='email'
                  name='email'
                  className={classes.input}
                  inputProps={{ style: { fontSize: 18 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label='password'
                  label='Password'
                  type='password'
                  inputProps={{ minLength: 6, style: { fontSize: 18 } }}
                  name='password'
                  className={classes.input}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label='Confirm Password'
                  aria-label='confirm password'
                  type='password'
                  inputProps={{ minLength: 6, style: { fontSize: 18 } }}
                  name='confirmPassword'
                  className={classes.input}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid container justifyContent='center'>
              <Button
                type='submit'
                variant='contained'
                size='large'
                color='primary'
                className={classes.submitButton}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
