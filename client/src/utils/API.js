import axios from 'axios';

export default {
	signUp: function(userData) {
		return axios.post('/api/signup', userData);
	}
};