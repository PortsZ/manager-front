import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
	plugins: [createPersistedState()],
	state: {
		userAuth: false,
	},
	mutations: {
		SET_AUTH (state, bool) {
			state.userAuth = bool;
		}
	},
	actions: {
	},
	modules: {
	}
});
