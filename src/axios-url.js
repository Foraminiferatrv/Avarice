import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://avarice-28025.firebaseio.com/'
})

export default instance;