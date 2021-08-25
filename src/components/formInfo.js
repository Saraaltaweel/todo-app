import '@blueprintjs/core/lib/css/blueprint.css';
import { Card, Button, H5 ,Tooltip} from "@blueprintjs/core";
import useForm from '../hooks/form';
import Auth from '../context/auth'
function FormInfo(props){
 
    return(


    <form onSubmit={props.handleSubmit}>

        <h2>Add To Do Item</h2>

        <label style={{
            textAlign:'center',borderRadius:'10px'
        }}>
          <span>To Do Item</span>
          <input style={{
            textAlign:'center',borderRadius:'7px',width:'180px',height:'35px'
        }} onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input style={{
            textAlign:'center',borderRadius:'7px',width:'180px',height:'35px'
        }} onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input style={{
            textAlign:'center',borderRadius:'7px',width:'180px',height:'20px'
        }}  onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>
        
        <label>
          <button style={{
             display: 'inline-block',
             padding: '15px 15px',
             fontSize: '20px',
             cursor: 'pointer',
             textAlign: 'center',
             textDecoration: 'none',
             outline: 'none',
             color: '#fff',
             backgroundColor: '#CFD186',
             border: 'none',
             borderRadius: '15px',
             boxShadow: '0 5px #999',
        }} type="submit">Add Item</button>
        </label>
        
        
      </form>
      
    )
}
export default FormInfo;