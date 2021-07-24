import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:"http://www.omdbapi.com/"
});

export default clienteAxios;