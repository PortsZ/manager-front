import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5000/api/EnergyPrice'
});

export default {
	AllEnergyPrices() {
		return api.get('');
	},
	GetEnergyPrice(id){
		return api.get('/'+id);
	},
	DeleteEnergyPrice(id) {
		return api.delete('/' + id);
	},
	UpdateEnergyPrice(id, data) {
		return api.put('/' + id, data);
	},
	CreateEnergyPrice(data){
		return api.post('/', data);
	},
};