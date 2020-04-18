import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userId: null,
	},
	plugins: [createPersistedState()],
	mutations: {
		setUserId: (state, userId) => {
			state.userId = userId;
		},
		clearUserId: (state) => {
			state.userId = null;
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.userId,
	},
	actions: {
		setUserId({ commit }, userId) {
			commit('setUserId', userId);
		},
		clearUserId({ commit }) {
			commit('clearUserId');
		},
	},
});
