import axios from 'axios';

const url = 'http://localhost:5000/college';

export const fetchColleges = () => axios.get(url);