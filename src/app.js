import React from 'react';

import ToDo from './components/todo/todo.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
// import ToDo from './components/todo/todo';
import SettingsForm from './components/settingForm';
import ListProvider from './context/ListContext';
import SettingsProvider from './context/SettingContext';
export default class App extends React.Component {
  render() {
    return (
      <>
      <Router>
          <Switch>
            <SettingsProvider>
              <ListProvider>
                <Route exact path='/'>
                  <ToDo />
                </Route>
                <Route exact path='/settings'>
                  <SettingsForm/>
                </Route>
              </ListProvider>
            </SettingsProvider>
          </Switch>
        </Router>
    </>
    );
  }
}
