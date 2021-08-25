import React, { useContext } from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import { ListContext } from '../../context/SettingContext';
import Auth from '../../context/auth'
function SettingsForm(props) {
  const settings = useContext(ListContext);
  return (
    <div style={{
        textAlign:'center', padding: 30,backgroundColor:'black',color:'#F4DADA',borderRadius:'10px'
    }}>
      <form onSubmit = {settings.handleItems}>
        <label>
          <p>Items per page</p>
          <InputGroup style={{
        textAlign:'center'}} onChange = {settings.handleItemsChange} type="text" value = {settings.items} name = 'items'/>
        </label>
        <Auth capability = 'delete'>
        <Button type = 'submit'>Change</Button>
        </Auth>
      </form>
    </div>
  );
}
export default SettingsForm;