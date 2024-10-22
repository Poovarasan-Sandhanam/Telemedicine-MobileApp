import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mytelemedicineapp.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
