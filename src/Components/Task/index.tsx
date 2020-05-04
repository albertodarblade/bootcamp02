import React from 'react';
import ITask from 'Models/tasks';
import ResumedUsers from 'Components/ResumedUsers';
import './styles.css';
function Task({id, title, description, owners }: ITask) {
  return (
    <section className="taskCmpt">
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>

      <ResumedUsers users={owners} limit={3} />

    </section>
  )
}

export default Task;