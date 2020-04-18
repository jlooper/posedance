import Vue from 'vue';
import Router from 'vue-router';

import Dance from '@/views/Dance.vue';
import SelectVideo from '@/views/SelectVideo.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: SelectVideo,
		},
		{
			path: '/dance/:id',
			name: 'Dance',
			component: Dance,
		},
	],
});

export default router;
