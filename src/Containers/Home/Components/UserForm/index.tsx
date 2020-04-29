import React, { MouseEvent, useState } from 'react';
import Form from 'Components/Form';
import TextField from '@material-ui/core/TextField';
import './styles.css';
import IUser from 'Models/users';

const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function UserForm({ onInvite, onCancel } :IProps) {

  const [form, setForm] = useState({ email: '' });
  function handleInvite(event: MouseEvent<HTMLButtonElement>) {
    onInvite(form);
  }

  function handleCancel(event: MouseEvent<HTMLButtonElement>) {
    onCancel();
  }

  const actions = [
    {
      onClick: handleCancel,
      text: 'Cancel',
      primary: false
    },
    {
    onClick: handleInvite,
    text: 'Invite',
    primary: true
  }];

  function validity() {
    return EMAIL_REG.test(form.email);
  }

  return (
    <section className="userFormCmpt">
      <Form actions={actions} isValid={validity()}>
        <TextField
          onChange={event => setForm({...form, email: event.target.value })}
          type="email"
          placeholder="write a email..."
          value={form.email}/>
      </Form>
    </section>
  )
}

interface IProps {
  onInvite: (user: IUser) => void,
  onCancel: () => void
}

export default UserForm;