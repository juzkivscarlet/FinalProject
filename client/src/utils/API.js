import axios from 'axios';

export default {
	signUpSales: function(userData) {
		return axios.post('/sales/signup', userData);
	},
	loginSales: function(userData) {
		return axios.post('/sales/login', userData);
	},
	signUpBusiness: function(data) {
		return axios.post('/business/signup', data);
	},
	loginBusiness: function(data) {
		return axios.post('/business/login', data);
	},
	loggedInSales: function(data) {
		return axios.get('/api/sales/user_data', data);
	},
	loggedInBusiness: function(data) {
		return axios.get('/api/business/user_data', data);
	},
};