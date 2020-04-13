import Vue from 'vue';
import Router from 'vue-router';

import Dance from '@/components/Dance.vue';
import SelectVideo from '@/components/SelectVideo.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: SelectVideo
		},
		{
			path: '/dance',
			name: 'dance',
			component: Dance
		}
	]
});

export default router;
