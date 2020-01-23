import axios from 'axios';

export default {
	signUpSales: function(userData) {
		return axios.post('/sales/signup', userData);
	},
	loginSales: function(userData) {
		return axios.post('/sales/login', userData);
	},
	updateSalesAccount: function(data) {
		return axios.put('/sales/update', data);
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

	userInfo: function() {
		return axios.get('/api/user');
	},

	searchProducts: function(data) {
		return axios.get('/api/offerings');
	},
	postProduct: function(data) {
		return axios.post('/api/offerings', data);
	},
	getSales: function(data) {
		return axios.get('/api/sales', data);
	},
	postSale: function(data) {
		return axios.post('/api/sales', data);
	},
	getLeads: function(data) {
		return axios.get('/api/leads', data);
	},
	postLead: function(data) {
		return axios.post('/api/leads', data);
	},
	getModules: function(data) {
		return axios.get('/api/modules', data);
	},
	logOut: function(){
		return axios.get('/logout');
	}
};