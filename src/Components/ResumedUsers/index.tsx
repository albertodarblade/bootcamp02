import React from 'react';
import IUser from 'Models/users';
import Avatar from 'Components/Avatar';
import './styles.css';

function ResumedUsers({ users, limit }: IProps) {

  function getResumedUsers(users: IUser[], limit: number) : [IUser[], number] {
    if (users.length <= limit) {
      return [users, 0];
    } else {
      const newUsers: IUser[] = users.slice(0, limit);
      const resumedCount = users.length - limit;
      return [newUsers, resumedCount];
    }
  }

  const [resumedUsers, resumendCount] = getResumedUsers(users, limit); 

  return (
    <section className="resumedUsersCpmt">
      {resumedUsers.map(user => <Avatar {...user} />)}
      <div className="counter">
        {Boolean(resumendCount) && <span>+ {resumendCount} </span>}
      </div>
    </section>
  )
}

interface IProps {
  users: IUser[],
  limit: number
}

ResumedUsers.defaultProps = {
  users: []
}

export default ResumedUsers;