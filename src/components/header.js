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
            textAlign:'center', padding: '30px',backgroundColor:'gray',color:'#F4DADA',borderRadius:'10px',height:'25vh'
        }}>
          <h1>To Do</h1>
          <If condition = {AuthSettings.loggedIn}>
            <Then>
            <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: 'gray',
             backgroundColor: 'lightblue',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
             marginTop:'10px',
             marginLeft:'115px'
        }} onClick={AuthSettings.logout}>Logout</button>
              <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: 'gray',
             backgroundColor: 'lightblue',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
             marginTop:'10px',
             marginLeft:'115px'
        }} onClick = {routeChange} text="Home">Home</button>
              
            </Then>
            <Else>
              <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: 'gray',
             backgroundColor: '#FBE0C4',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
             marginTop:'10px',
            //  marginLeft:'115px'
        }} onClick = {routeChange} text="Home">Home</button>
              <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: 'gray',
             backgroundColor: '#D8F8B7',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
             marginTop:'10px',
             marginLeft:'115px'
        }} text="Login">Login</button>
            </Else>
          </If>
     
    </div>
  );
}

export default Header;