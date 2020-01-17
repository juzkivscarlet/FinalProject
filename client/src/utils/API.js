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
		return axios.get('/api/sales/user_data');
	},
	loggedInBusiness: function(data) {
		return axios.get('/api/business/user_data');
	},

	searchProducts: function(data) {
		return axios.get('/api/offerings');
	},
	postProduct: function(data) {
		return axios.post('/api/offerings', data);
	},
	getSales: function(data) {
		return axios.get('/api/sales');
	},
	postSale: function(data) {
		return axios.post('/api/sales', data);
	},
	getLeads: function(data) {
		return axios.get('/api/leads');
	},
	postLead: function(data) {
		return axios.post('/api/leads', data);
	}
};