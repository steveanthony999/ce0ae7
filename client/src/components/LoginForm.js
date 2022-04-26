import React from 'react';
import { FormControl, TextField, Grid } from '@material-ui/core';
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

const LoginForm = () => {
  const classes = useStyles();

  return (
    <>
      <Grid>
        <FormControl required>
          <TextField
            aria-label='username'
            label='Username'
            name='username'
            type='text'
            className={classes.input}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: '14px', color: '#B0B0B0' } }}
          />
        </FormControl>
      </Grid>
      <Grid>
        <FormControl required>
          <TextField
            label='password'
            aria-label='password'
            type='password'
            name='password'
            className={classes.input}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: '14px', color: '#B0B0B0' } }}
          />
        </FormControl>
      </Grid>
    </>
  );
};
export default LoginForm;
