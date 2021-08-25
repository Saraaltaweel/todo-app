import React, { useContext } from 'react';
import { If } from 'react-if';
import { AuthContext } from './authContext';

function Auth(props) {
  const AuthSettings = useContext(AuthContext);

  let okToRender = false;
  try {
    okToRender =
      AuthSettings.loggedIn &&
      (props.capability
        ? AuthSettings.user.capabilities.includes(props.capability)
        : true);
  } catch (error) {}

  return (
    <If condition={okToRender}>
      <div>{props.children}</div>
    </If>
  );
}

export default Auth;