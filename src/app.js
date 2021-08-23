import React from 'react';
import ToDo from './components/todo/todo';
import ListContext from './context/SettingContext';


function App() {
  return (
    <>
      <ListContext>
        <ToDo/>
      </ListContext>
    </>
  );
}

export default App;
