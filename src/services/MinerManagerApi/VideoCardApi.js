import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5000/api/VideoCard'
});

export default {
	AllVideoCards() {
		return api.get('');
	},
	GetVideoCard(id){
		return api.get('/'+id);
	},
	DeleteVideoCard(id) {
		return api.delete('/' + id);
	},
	UpdateVideoCard(id, data) {
		return api.put('/' + id, data);
	},
	CreateVideoCard(data){
		return api.post('/', data);
	},
};