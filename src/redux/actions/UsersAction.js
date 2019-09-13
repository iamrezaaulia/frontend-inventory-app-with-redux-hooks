import axios from 'axios';

export const login = data => {
	return {
		type: 'LOGIN',
		payload: axios.post('/user/login', data)
	}
}

export const register = data => {
	return {
		type: 'REGISTER',
		payload: axios.post('/user/register', data)
	}
}