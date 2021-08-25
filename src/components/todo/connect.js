import React, { useEffect} from 'react';
import FormInfo from '../formInfo';
import List from '../list';


const ToDo = () => {
  const [list,_getTodoItems  , _toggleComplete , _addItem ,deleteItem,editor]= useAjax();
useEffect (_getTodoItems , [_getTodoItems]);
document.title = `ToDo : ${list.filter((item) => !item.complete).length}`;
  return (
     <>
    <header >
        <h2  style={{'font-size':'20px', 'maxWidth':'90%', 'margin-top':'10px',"background":"#353A40" , 'margin-right':'auto','margin-left':'auto','color':'white','hight':'300px','padding':'10px' }}>
        {`To Do List Manager ( ${list.filter(item => !item.complete).length} )  `} 
        </h2>
      </header>
      <section className="todo">
        <div>
          <FormInfo handleSubmit={_addItem} />
        </div>
        <div>
          <List
            list={list}
            handleComplete={_toggleComplete}
            deleteItem = {deleteItem}
            editor = {editor}
          />
        </div>
      </section>
    </>
  );
};
export default ToDo;