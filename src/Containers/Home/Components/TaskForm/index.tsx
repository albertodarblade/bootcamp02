import React, { useState } from 'react';
import Form from 'Components/Form';
import { TextField } from '@material-ui/core';

function TaskForm() {
  const [form, setForm] = useState({ title: '', description: '' });


  function handleSave() {

  }

  function handleCancel() {

  }

  const actions = [
    {
      onClick: handleCancel,
      text: 'Cancel',
      primary: false
    },
    {
    onClick: handleSave,
    text: 'Save',
    primary: true
  }];
 
  return (
    <Form actions={actions} isValid={true}>
      <TextField
        onChange={event => setForm({...form, title: form.title })}
        placeholder="Write a title..."
        value={form.title}/>

      <TextField
        onChange={event => setForm({...form, description: form.description })}
        placeholder="write a description..."
        value={form.description}/>

      <div>How invite owners?</div>
    </Form>
  )
}

export default TaskForm;