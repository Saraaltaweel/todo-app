import React, { useEffect, useState} from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import { v4 as uuid } from 'uuid';
import useForm from '../../hooks/form';
import FormInfo from '../formInfo';
import List from '../list';
import SettingsForm from './settingForm';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    const data = {
      id: uuid(),
      text: item.text,
      assignee: item.assignee,
      difficulty: item.difficulty,
      complete: false,
    };
    setList([...list, data]);
  }

  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete, list]);

  return (
    <>
      <header style={{
            textAlign:'center', padding: 30,backgroundColor:'gray',color:'#F4DADA',borderRadius:'10px'
        }}>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <SettingsForm />
      <FormInfo className = 'split' handleChange = {handleChange} handleSubmit = {handleSubmit} />
      <List className = 'split' toggleComplete = {toggleComplete} list = {list}/>
    </>
  );
};

export default ToDo;