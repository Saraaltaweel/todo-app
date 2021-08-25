import React,{useContext} from 'react';
import ToDo from './components/todo/todo';
import ListContext from './context/SettingContext';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/authContext';
import Login from './context/login';
import Header from './components/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const authSettings = useContext(AuthContext);

  return (
    <>
      <ListContext>
      <Header/>
        <If condition = {!authSettings.loggedIn}>
          <Then>
            <Login/>
          </Then>
          <Else>
            <Switch>
              <ListContext>
                <Route exact path = '/'>
                  <ToDo/>
                </Route>
              </ListContext>
            </Switch>
          </Else>
        </If>
      </ListContext>
    </>
  );
}

export default App;
