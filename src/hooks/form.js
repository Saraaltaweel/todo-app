import { useState } from 'react';

const useForm = (props) => {

  const [values, setValues] = useState({});

  const handleInputChange = e => {
    setValues({ ...values,  [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    values.difficulty?values.difficulty=values.difficulty:values.difficulty=e.target.difficulty.value
    props.handleSubmit(values);
    const addItem = {};
    setValues(addItem);
};
return [handleInputChange, handleSubmit ,values]
}

export default useForm;
