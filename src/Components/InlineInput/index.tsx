import React from 'react';
import TextField from '@material-ui/core/TextField';

function InlineInput(props: any) {
  // debounce.
  let timer: any;
  function handleChange(event: any) {
    clearTimeout(timer);
    const value = event.target.value;
    timer = setTimeout(() => {
      props.onChange(value);
    }, 1000);
  }
  if(props.readOnly) {
    return <p> {props.value} </p>;
  }
  return (
    <TextField {...props} onChange={handleChange} /> 
  )
}

export default InlineInput;