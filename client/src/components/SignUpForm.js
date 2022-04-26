import React from 'react';
import {
  FormControl,
  TextField,
  Grid,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '40vw',
    marginBottom: '38px',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
}));

const SignUpForm = ({ formErrorMessage }) => {
  const classes = useStyles();

  return (
    <>
      <Grid>
        <FormControl>
          <TextField
            aria-label='username'
            label='Username'
            name='username'
            type='text'
            className={classes.input}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14, color: '#B0B0B0' } }}
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
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14, color: '#B0B0B0' } }}
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
            inputProps={{ minLength: 6, style: { fontSize: 14 } }}
            name='password'
            className={classes.input}
            InputLabelProps={{ style: { fontSize: 14, color: '#B0B0B0' } }}
            required
          />
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid>
        <FormControl error={!!formErrorMessage.confirmPassword}>
          <TextField
            label='Confirm Password'
            aria-label='confirm password'
            type='password'
            inputProps={{ minLength: 6, style: { fontSize: 14 } }}
            name='confirmPassword'
            className={classes.input}
            InputLabelProps={{ style: { fontSize: 14, color: '#B0B0B0' } }}
            required
          />
        </FormControl>
      </Grid>
    </>
  );
};
export default SignUpForm;
