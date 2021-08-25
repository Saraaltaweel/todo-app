import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './authContext';
import '@blueprintjs/core/lib/css/blueprint.css';
import {Navbar, Button, Alignment} from '@blueprintjs/core';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const authSettings = useContext(AuthContext);
  const history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authSettings.signup(username, password, email, role);
    const path = `/`;
    history.push(path);
    console.log(username, password, email, role);
  };

  return (
    <div>
      <form style={{
            padding: '200px', paddingTop: '16px', margin:'20px',marginLeft:'270px',borderRadius:'15px',width:'50vw',backgroundColor:'#F0D9FF'
        }} onSubmit = {handleSubmit}>
      <b>Username  </b><input style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px', margin:'10px'}} name = {username} onChange = {handleUsername} type="text" placeholder = 'Enter Username' /><br/> 


      <b>Password  </b><input style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px', margin:'10px'}} name = {password} onChange = {handlePassword} type="text" placeholder = 'Enter Password' /><br/>

      <b>Email  </b><input style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px', margin:'10px'}} name = {email} onChange = {handleEmail} type="text" placeholder = 'Enter Email' /><br/>

      <b>select role  </b><select style={{
                textAlign:'center',borderRadius:'7px',width:'180px',height:'35px', margin:'10px'}} onChange = {handleRole}><br/>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select><br/>

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
        }}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;