import React, {useState, useEffect,createContext } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();

import dotenv from 'dotenv';
dotenv.config();


function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);

  }, []);

  const validateToken = (token) => {
    try {
      const user = jwt.verify(token);
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
    }
  };

  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setUser(user);
    setLoggedIn(loggedIn);
    setError(false);
  };

  const  login = async (username, password) => {

    const encoded = base64.encode(`${username}:${password}`);
    const result = await fetch(`${API}/signin`, {
        method: 'post',
        headers: {Authorization: `Basic ${encoded}`}
    });

    let data = await result.json();
    console.log(data);
    this.validateToken(data.token);

}

  const signup = async (username, email, password, role) => {
    try {
     
      const response = await superagent
        .post(`${API}/signup`, { username, email, password, role });
        validateToken(response.body.token);
    } catch (e) {
      console.error('Signup Error', error.message);
      setError(true);
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const state = { login, logout, signup, loggedIn, user, error, setError };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;