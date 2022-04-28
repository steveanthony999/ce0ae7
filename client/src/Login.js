import React from 'react';
import Auth from './components/Auth';

const Login = ({ user, login }) => {
  return <Auth user={user} login={login} isLogin />;
};

export default Login;
