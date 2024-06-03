import axios from '../utils/CustomizeApi';

const getUser = () => {
    return axios.get(`/api/users`);
}

const login = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const register = (email, password) => {
    return axios.post('/api/register', { email, password });
}

export { getUser, login, register };