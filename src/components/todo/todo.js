import React, { useEffect, useState,useContext} from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import { v4 as uuid } from 'uuid';
import useForm from '../../hooks/form';
import FormInfo from '../formInfo';
import List from '../list';
import SettingsForm from './settingForm';
import superagent from 'superagent';
import cookie from 'react-cookies';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const API = 'https://api-js401.herokuapp.com/api/v1/todo';

  async function getData(){
    const response = await superagent.get(API);
    setList(response.body.results);
    console.log(response.body.results);
  }
  useEffect(() => {
    getData();
  },[]);

  async function deleteItem(id) {
      const token = cookie.load('auth');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let response = await superagent.delete(`${API}/${id}`, config);
      response = list.filter( item => item._id !== id );
      setList(response);
  } 

  async function addItem(item) {
    const data = {
      id: uuid(),
      text: item.text,
      assignee: item.assignee,
      difficulty: item.difficulty,
      complete: false,
    };
    const value = await superagent.post(API, data);
    setList([...list, value]);
  }

  async function toggleComplete(id) {
    let itemNeedUpdate;
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = !item.complete;
        itemNeedUpdate = item;
      }
      return item;
    });
    await superagent.put(`${API}/${id}`, itemNeedUpdate);
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