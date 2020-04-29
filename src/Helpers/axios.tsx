import config from 'config';
import axios from 'axios';

export default class Axios {
  baseUrl: string
  token: string
  
  constructor(path: string) {
    this.baseUrl = config.BASE_URL + '/' + path;
    this.token = '';
  }

  create() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: this.token
      }
    })
  }
}