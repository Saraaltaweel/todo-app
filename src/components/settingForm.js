import React, {useEffect,useState,useContext } from 'react';
import { SettingContext } from '../context/SettingContext';

function SettingsForm() {
    const [settings,setSettings] = useState({items:0,view:false});
    const settingContext = useContext(SettingContext);
    useEffect(()=>{

    },[settingContext.numberOfItems,settingContext.view])
    function handlesubmit(e){
        e.preventDefault();
        let strSettings = JSON.stringify(settings);
        localStorage.setItem('settings',strSettings);
    }

    function handleItemNumber(e){
        setSettings({...settings,[e.target.name]:e.target.value})
    }
    function handleView(e){
        if(e.target.checked){
            setSettings({...settings,[e.target.name]:e.target.checked})
        }else{
            setSettings({...settings,[e.target.name]:e.target.checked})
        }
    }

    return (
        <form onSubmit={handlesubmit}>
            <label>Maximum number of items per screen</label>
            <input name='items' type='number' placeholder={1} min={1} onChange={handleItemNumber}></input>
            <label>Hide or show completed items in the list</label>
            <input name='view' type='checkbox'  onChange={handleView}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SettingsForm