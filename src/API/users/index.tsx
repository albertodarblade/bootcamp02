import Axios from 'Helpers/axios';
import IUser from 'Models/users';

export default {
  getUsers: async function () : Promise<IUser[]> {
    const axios = new Axios('users');
    const request = axios.create();
    const response = await request.get('');
    console.log(response);
    return response.data.data;
  },
  postUser: async function (payload: IUser) {
    const axios = new Axios('users');
    const request = axios.create();
    const response = await request.post('', payload);
    return response.data;
  }
}