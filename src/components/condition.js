export function If(props) {
    if(props.condition){
      return props.children;
    } else {
      return null;
    }
  }
  
  export function Else(props){
    if(props.condition){
      return null;
    } else {
      return props.children;
    }
  }