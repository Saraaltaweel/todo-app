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

  useEffect(() => {
    const token = cookie.load('auth');
    validToken(token);
  },[]);

  function setLoginState(loggedIn, token, user) {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setUser(user);
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
      validToken(response.body.token);
    } catch (error) {
      console.error('Login Error', error.message);
    }
  };

  function logout() {
    setLoginState(false, null, {});
  };

  return (
    <AuthContext.Provider value = {{ loggedIn: loggedIn, user, login: login, logout: logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthSettings;