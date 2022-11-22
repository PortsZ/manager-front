import {create_axios} from '@/mixins/services/AxiosDefaultCryptechAPI';

const api = create_axios('entries');

export default {
	AllEntries() {
		return api.get('');
	},
	GetEntry(id) {
		return api.get('/' + id);
	},
	DeleteEntry(id) {
		return api.delete('/' + id);
	},
	UpdateEntry(id, data) {
		return api.patch('/' + id, data);
	},
	CreateEntry(data) {
		return api.post('/', data);
	},
};