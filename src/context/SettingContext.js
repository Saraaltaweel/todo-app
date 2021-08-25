import React, { useState,useEffect } from 'react';
export const ListContext = React.createContext();

function ListSettings(props) {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showComplete, setShowComplete] = useState(true);
  const [items, setItems] = useState((localStorage.key('savedItemsPerPage')? localStorage.getItem('savedItemsPerPage'): itemsPerPage));
  
  const handleItems = (e) => {
    e.preventDefault();
    setItemsPerPage(Number(e.target.items.value));
    localStorage.setItem('savedItemsPerPage', Number(e.target.items.value));
  };

  const handleItemsChange = (e) => {
    e.preventDefault();
    setItems(e.target.value);
  };

  useEffect(() => {
    const SavedItems = localStorage.getItem('savedItemsPerPage');
    if(SavedItems) setItemsPerPage(Number(SavedItems));
  }, []);

  const states = {
    itemsPerPage,
    showComplete,
    setItemsPerPage,
    setShowComplete,
    items,
    setItems,
    handleItems,
    handleItemsChange

  };

  return (
    <ListContext.Provider value = {states}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListSettings; 