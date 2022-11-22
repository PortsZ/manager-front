import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5000/api/AlgorithmsToMine'
});

export default {
	AllAlgorithmsToMine() {
		return api.get('');
	},
	GetAlgorithmsToMine(id){
		return api.get('/'+id);
	},
	DeleteAlgorithmsToMine(id) {
		return api.delete('/' + id);
	},
	UpdateAlgorithmsToMine(id, data) {
		return api.put('/' + id, data);
	},
	CreateAlgorithmsToMine(data){
		return api.post('/', data);
	},
};