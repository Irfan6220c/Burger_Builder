import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-54c5d-default-rtdb.firebaseio.com/'
  });


export default instance;  