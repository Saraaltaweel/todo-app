import React,{useState,useEffect,useContext} from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/auth'
export const ListContext = React.createContext();

export const SettingContext = React.createContext();

function SettingsContext(props) {
    const [numberOfItems,setNumberOfItems] = useState(4);
    const [view,setView] = useState(false);
    const [start,setStart] = useState(0);
    const [end,setEnd] = useState(numberOfItems-1);
    function setSettings(numb,val){
        if(numb){
            setNumberOfItems(numb)
        }
            setView(val);
    }
   function nextpage(){
       setStart(start+numberOfItems);
       setEnd(end+numberOfItems);
   }
   function previouspage(){
       setStart(start-numberOfItems);
       setEnd(end-numberOfItems);
   }
    return (
        <SettingContext.Provider value={{numberOfItems,view,setSettings,start,end,nextpage,previouspage}}>
            {props.children}
        </SettingContext.Provider>
    )
}
export default SettingsContext;