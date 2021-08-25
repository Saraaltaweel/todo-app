import React,{useContext} from 'react';
import ToDo from './components/todo/todo';
import ListContext from './context/SettingContext';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/authContext';
import Login from './context/login';
import Header from './components/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './context/signup'


function App() {
  const authSettings = useContext(AuthContext);

  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <If condition = {!authSettings.loggedIn}>
          <Then>
          <Route exact path = '/'>
            <Login/>
            </Route>
            <Route exact path = '/signup'>
              <Signup/>
              </Route>
          </Then>
          <Else>
              <ListContext>
                <Route exact path = '/'>
                  <ToDo/>
                </Route>
                </ListContext>
          </Else>
        </If>
        </Switch>
        </Router>
    </>
  );
}

export default App;
