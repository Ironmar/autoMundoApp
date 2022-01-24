import axios from 'axios';
const axiosShop = axios.create({
  baseURL: 'https://auto-mundo.herokuapp.com',
});
export default axiosShop;
