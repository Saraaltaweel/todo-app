import React, { useState, useContext } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './authContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const AuthSettings = useContext(AuthContext);


  function handleUsername(event){
    setUsername(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthSettings.login(username, password);
  };

  return (
    <If condition={AuthSettings.loggedIn}>
      <Then>
        <button onClick={AuthSettings.logout}>Logout</button>
      </Then>
      <Else>
        <form style={{
            padding: '200px', paddingTop: '16px', margin:'20px',marginLeft:'270px',borderRadius:'15px',width:'50vw',backgroundColor:'#F0D9FF'
        }} onSubmit={handleSubmit}>
        <br/><b>Username  </b><input 
            type="text"
            name="username"
            placeholder="Enter Username" style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px', margin:'10px'}}
            onChange={handleUsername}
          /><br/><b>Password   </b>
          <input
            type="text"
            name="password"
            placeholder="Enter Password" style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px',margin:'10px'}}
            onChange={handlePassword}
          /><br/>
          <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: 'gray',
             backgroundColor: 'lightgreen',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
             marginTop:'10px',
             marginLeft:'100px'
        }}>Login</button>
        <a style={{
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
             marginLeft:'10px'
        }} href="/signup">signup</a>
        </form>
      </Else>
    </If>
  );
}

export default Login;