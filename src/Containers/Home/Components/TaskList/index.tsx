import React from 'react';
import withFilter from 'Hoc/withFilter';
import ITask from 'Models/tasks';
import Task from 'Components/Task';
import TaskForm from '../TaskForm';
import IUser from 'Models/users';

function TaskList({ tasks, users }: IProps) {
  return (
    <section className="taskListCmpt">
      <TaskForm users={users}/>

      {tasks.map(item => (
        <Task {...item} />
      ))}
    </section>
  );
}

interface IProps {
  tasks: ITask[],
  users:IUser[]
}

function filterCriteria(value: string) {
  return (item: ITask) => {
    if(!value) {
      return true;
    }
    return (item.title && item.title.includes(value)) ||
      (item.description && item.description.includes(value));
  }
}

export default withFilter(TaskList, { keyCollection: 'tasks', criteria: filterCriteria });