import React, { useState } from 'react';
export const ListContext = React.createContext();

function ListSettings(props) {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showComplete, setShowComplete] = useState(true);

  const states = {
    itemsPerPage,
    showComplete,
    setItemsPerPage,
    setShowComplete,
  };

  return (
    <ListContext.Provider value = {states}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListSettings; 