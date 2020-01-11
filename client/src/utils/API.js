import axios from 'axios';

export default {
	signUpSales: function(userData) {
		return axios.post('/sales/signup', userData);
	},
	signUpBusiness: function(data) {
		return axios.post('/business/signup', data);
	}
};