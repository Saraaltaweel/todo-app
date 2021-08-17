import React, { useEffect, useState ,useContext} from 'react';
import useForm from '../../hooks/form.js';
import List from '../list';
import FormInfo from '../formInfo';
import { ListContext } from '../../context/ListContext.js';
import SettingsContext from '../../context/SettingContext.js';
import { v4 as uuid } from 'uuid';

function ToDo (props) {

  const listContext=useContext(ListContext)
  const [state, setState] = useState([]);

  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);
  // const { handleChange, handleSubmit } = useForm(addItem);


  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  useEffect(()=>{
    let localSetting=localStorage.getItem('settings')===true;
    if(localSetting){
      localSetting=JSON.parse(localStorage.getItem('settings'))
      SettingsContext.setSettings(localSetting.items,localSetting.view)
    }
 
  },[])

  return (
    <>
      <header>
        <h2>
          There are {listContext.list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>
        <div>
          <FormInfo/>
        </div>
        <div>
          <List list={state}/>
        </div>
    </>
  );
}
export default ToDo;
