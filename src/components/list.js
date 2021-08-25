import React, { useState, useEffect, useContext } from 'react';
import { Button } from '@blueprintjs/core';
import { ListContext } from '../context/SettingContext';
import {v4 as uuid} from 'uuid'
import Auth from '../context/auth'
function List(props) {
  const settings = useContext(ListContext);
  const [activePage, setActivePage] = useState(1);
  const [activeList, setActiveList] = useState(props.list.slice(0, settings.itemsPerPage));
  const [numOfPages, setNumOfPages] = useState(Number(Math.ceil(props.list.length / settings.itemsPerPage)));
  const [filterCompleted, setFilterCompleted] = useState([]);

  useEffect(() => {
    setActiveList(props.list.slice(0, settings.itemsPerPage));
    setNumOfPages(Number(Math.ceil(props.list.length / settings.itemsPerPage)));
  }, [props.list, settings.itemsPerPage]);

  const PagesList = () => {
    const pages = [];
    if(activePage > 1) pages.push(<Button key={uuid()} className = 'usual bp3-intent-primary' onClick = {() => changePage(activePage -1)}>Previous</Button>);
    for(let i = 1; i <= numOfPages; i++){
      pages.push(<Button className = 'usual' onClick = {() => changePage(i)} key = {i}>{i}</Button>);
    }
    if(activePage < numOfPages) pages.push(<Button key={uuid()} className = 'usual bp3-intent-primary' onClick = {() => changePage(activePage +1)}>Next</Button>);
    return pages;
  };

  const changePage = (pageNumber) => {
    if(pageNumber === activePage){
      return;
    }
    setActivePage(pageNumber);
  };

  useEffect(() => {
    const start = (activePage -1) * settings.itemsPerPage;
    const end = start + settings.itemsPerPage;
    setActiveList(props.list.slice(start, end));
  }, [activePage, props.list, settings.itemsPerPage]);

  function showIncomplete() {
    if (filterCompleted === props.list)
      setFilterCompleted(() => filterCompleted.filter((item) => item.complete !== true));
    else setFilterCompleted(props.list);
  }

  useEffect(() => {
    setFilterCompleted(props.list);
  },[props.list]);

  return (
    <div>
      <>
       
        {activeList.map((item) => (
          <div key={item.id}>
            <p>{item.text}To Do Item</p>
            <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <p>
            <Auth capability = 'update'>
              <Button  onClick={() => props.toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </Button>
              </Auth>
            </p>
            <hr />
          </div>
        ))}
        <PagesList/>
      </>
    </div>
  );
}

export default List;
