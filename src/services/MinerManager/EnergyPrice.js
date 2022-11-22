import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000/api/v1/energy-price',
	withCredentials: true,
});

export default {
	AllEnergyPrices() {
		return api.get('');
	},
	GetEnergyPrice(id) {
		return api.get('/' + id);
	},
	DeleteEnergyPrice(id) {
		return api.delete('/' + id);
	},
	UpdateEnergyPrice(id, data) {
		return api.patch('/' + id, data);
	},
	CreateEnergyPrice(data) {
		return api.post('/', data);
	},
};