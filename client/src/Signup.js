import React from 'react';
import Auth from './components/Auth';

const Signup = ({ user, register }) => {
  return <Auth user={user} register={register} />;
};

export default Signup;
