import React, { useContext } from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import { AuthContext } from '../context/authContext'
import { useHistory } from 'react-router-dom';
import { If, Else, Then } from 'react-if';
// import createBrowserHistory from 'createBrowserHistory';
function Header() {
  const AuthSettings = useContext(AuthContext);
  const history = useHistory();

  const routeChange = () =>{
    let path = `/`;
    history.push(path);
  };

  return (
    <div style={{
            textAlign:'center', padding: 30,backgroundColor:'gray',color:'#F4DADA',borderRadius:'10px'
        }}>
          <h1>To Do</h1>
          <If condition = {AuthSettings.loggedIn}>
            <Then>
            <button onClick={AuthSettings.logout}>Logout</button>
              <button onClick = {routeChange} text="Home">Home</button>
              
            </Then>
            <Else>
              <button onClick = {routeChange} text="Home">Home</button>
              <button text="Login">Login</button>
            </Else>
          </If>
     
    </div>
  );
}

export default Header;