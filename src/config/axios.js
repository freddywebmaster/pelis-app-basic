import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:"https://www.omdbapi.com/"
});

export default clienteAxios;