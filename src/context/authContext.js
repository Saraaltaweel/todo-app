import React, { useState, useEffect} from 'react';
import cookie from 'react-cookies';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();

function AuthSettings(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [capabilities, setCapabilities] = useState(null);

  useEffect(() => {
    const token = cookie.load('auth');
    const acl = cookie.load('acl');
    setCapabilities(acl);
    validToken(token);
  },[]);

  function setLoginState(loggedIn, token, user) {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setUser(user);
    setToken(token);
  };

  function validToken(token) {
    if(token !== 'null' && token !== undefined){
      const user = jwt.decode(token);
      console.log(token);
      setLoginState(true, token, user);
    } else if(token === 'null') {
      setLoginState(false, null, {});
    }
  };

  async function login(username, password) {
    try {
      const response = await superagent.post(`${API}/signin`)
        .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
      console.log(response.body);
      const acl = response.body.user.acl.capabilities;
      cookie.save('acl', acl);
      setCapabilities(acl);
      validToken(response.body.token);
    } catch (error) {
      console.error('Login Error', error.message);
    }
  };

  function logout() {
    setLoginState(false, null, {});
    cookie.remove('auth');
    cookie.remove('acl');
    setCapabilities(null);
  };
  async function signup(username, password, email, role){
    try {
      const user = {
        username,
        password,
        email,
        role
      };
      const response = await superagent.post(`${API}/signup`, user);
      validToken(response.body.user.token);
    } catch (error) {
      console.error('Singup Error', error.message);
    }
  }
  return (
    <AuthContext.Provider value = {{ loggedIn: loggedIn, user, login: login, logout: logout, signup: signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthSettings;