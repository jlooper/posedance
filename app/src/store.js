import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userId: null,
		sessionId: null,
		ready: true,
	},
	plugins: [createPersistedState()],
	mutations: {
		setUserId: (state, userId) => {
			state.userId = userId;
		},
		clearUserId: (state) => {
			state.userId = null;
		},
		setSessionId: (state, sessionId) => {
			state.sessionId = sessionId;
		},
		clearSessionId: (state) => {
			state.sessionId = null;
		},
		showReady: (state, ready) => {
			state.ready = ready;
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.userId,
	},
	actions: {
		setUserId({ commit }, userId) {
			commit('setUserId', userId);
		},
		setSessionId({ commit }, sessionId) {
			commit('setSessionId', sessionId);
		},
		clearUserId({ commit }) {
			commit('clearUserId');
		},
		clearSessionId({ commit }) {
			commit('clearSessionId');
		},
		showReady({ commit }, ready) {
			commit('showReady', ready);
		},
	},
});
