import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'https://ill-tan-kangaroo-cape.cyclic.app'
});

export default instance;