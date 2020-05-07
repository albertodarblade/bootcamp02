import React, { useState } from 'react';
import Form from 'Components/Form';
import { TextField, Button, Popover } from '@material-ui/core';
import AddressBook from '../AddressBook';
import IUser from 'Models/users';
import ResumedUsers from 'Components/ResumedUsers';
import './styles.css';
function TaskForm({users}:IProps) {
  const [form, setForm] = useState({ title: '', description: '', owners:[] as IUser[] });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  function handleSave() {

  }

  function handleCancel() {

  }
  
  function handleClickUser(user:IUser) {
    let newOwners = [...form.owners];
    const index = newOwners.findIndex(element => element.email === user.email);

   if(index >= 0) {
     newOwners = newOwners.slice(0, index);
   } else {
    newOwners.push(user);
   }
   setForm({...form, owners: newOwners })

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
    <section className="taskFormCmpt">
    <Form actions={actions} isValid={true}>
      <TextField
        onChange={event => setForm({...form, title: event.target.value })}
        placeholder="Write a title..."
        value={form.title}/>
      
      <TextField
        onChange={event => setForm({...form, description: event.target.value })}
        placeholder="write a description..."
        value={form.description}/>
      
      <Button aria-describedby={id} color="primary" onClick={(event:any) => setAnchorEl(event.currentTarget)}>
        Add members
      </Button>

      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
       <AddressBook 
          showForm={false}
          changeStateForm={()=>{}}
          selectedUsers={form.owners.map(owner => owner.email)}
          error={''}
          postUser={()=>{}}
          users={users}
          onClickUser={handleClickUser} 
          readOnly={true}/>
      </Popover>
      <ResumedUsers users={form.owners} limit={3} />
    </Form>
    
    </section>
  )
}

interface IProps{
  users:IUser[]
}


export default TaskForm;