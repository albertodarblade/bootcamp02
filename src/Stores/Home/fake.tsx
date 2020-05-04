import ITask from 'Models/tasks';
import IUser from 'Models/users'

const tasks: ITask[] = [{
  id: '1',
  title: 'make the laundry',
  description: 'drive away',
  owners: [{ email: 'Juan.perez@gmail.com' }, { email: 'alberto.blacutt@jalasoft.com'}, {email: 'jgonzales@gmai.es'}, { email: 'alexandeBugron@gmail.es'}] as IUser[]
},
{
  id: '2',
  title: 'make the launch',
  description: 'nice day',
  owners: [] as IUser[]
},
{
  id: '3',
  title: 'make the home work',
  description: 'next week',
  owners: [] as IUser[]
}];
export default tasks;