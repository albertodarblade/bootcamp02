import React from 'react';
import IUser from 'Models/users';
import './styles.css';

function Avatar({ name, email, avatar, active }: IUser) {

  function shortName(fullname: string) {
    const [name, lastName] = fullname.split(' ');
    if(!lastName) {
      return name && name.length >= 1 ? name[0] + name[1]: '';
    }
    const firstLetter = name && name.length ? name[0] : '';
    const secondLetter = lastName && lastName.length ? lastName[0] : '';
    return firstLetter + secondLetter;
  }

  function renderImage() {
    if(avatar) {
      return <img src={avatar} alt="User" className="avatarImg" />
    }
    return <span>{name ? shortName(name) : shortName(email)}</span>;
  }
  return (
    <section className="avatarCmpt">
      {renderImage()}
    </section>
  )
}

Avatar.defaultProps = {
  email: ''
}



export default Avatar;