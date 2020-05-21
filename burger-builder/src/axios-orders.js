import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-db-9766c.firebaseio.com/'
});

export default instance;