import {create_axios} from '@/mixins/services/AxiosDefaultCryptechAPI';

const api = create_axios('auth');

export default {
	SingIn(credentials) {
		return api.post('/singin', credentials);
	},

	SingUp(credentials) {
		return api.post('/singup', credentials);
	},
};