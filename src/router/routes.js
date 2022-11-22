import {createRouter, createWebHistory} from 'vue-router';

import store from '@/store/index.js';

//SingIn
import Auth from '@/pages/Auth/Auth';
import SingIn from '@/pages/Auth/SingIn';
import SingUp from '@/pages/Auth/SingUp';

//DashBoard
import DashBoard from '@/pages/DashBoard/DashBoard';

//EnergyCost
import EnergyCosts from '@/pages/EnergyCosts/EnergyCosts';

//EnergyPrice
import EnergyPrices from '@/pages/EnergyPrices/EnergyPrices';
import CreateEnergyPrice from '@/pages/EnergyPrices/CreateEnergyPrice';
import ShowEnergyPrices from '@/pages/EnergyPrices/ShowEnergyPrices';
import EditEnergyPrice from '@/pages/EnergyPrices/EditEnergyPrice';

//Entries
import Entries from '@/pages/Entries/Entries';
import ShowEntries from '@/pages/Entries/ShowEntries';
import CreateEntries from '@/pages/Entries/CreateEntries';
import EditEntries from '@/pages/Entries/EditEntries';


//VideoCard
import VideoCards from '@/pages/VideoCards/VideoCards';
import ShowVideoCards from '@/pages/VideoCards/ShowVideoCards';
import CreateVideoCard from '@/pages/VideoCards/CreateVideoCard';
import EditVideoCard from '@/pages/VideoCards/EditVideoCard';
import DefaultLayout from '@/components/Layout/DefaultLayout';

//Users
import Users from '@/pages/Users/Users';
import ShowUsers from '@/pages/Users/ShowUsers';


const routes = [
	{
		path: '/Auth',
		name: 'Auth',
		component: Auth,
		children: [
			{
				path: '',
				component: SingIn,
			},
			{
				path: 'SingUp',
				name: 'SingUp',
				meta: { userType: 'guest' },
				component: SingUp,
			}
		]
	},
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '',
				component: DashBoard,
			},
			{
				path: '/EnergyCosts',
				component: EnergyCosts,
				props: {pageName: 'Energy Cost'}
			},
			{
				path: '/Users',
				component: Users,
				props: {pageName: 'Users'},
				children: [
					{
						path: '',
						component: ShowUsers,
						props: {pageName: 'Users'}
					},
					// {
					// 	path: 'CreateUser',
					// 	component: CreateUser,
					// 	props: {pageName: 'Create User'}
					// },
					// {
					// 	path: 'EditUser/:id',
					// 	component: EditUser,
					// 	props: {pageName: 'Edit User'}
					// }
				]
			},
			{
				path: '/EnergyPrices',
				component: EnergyPrices,
				children: [
					{
						path: '',
						component: ShowEnergyPrices,
						props: {pageName: 'Energy Prices'}
					},
					{
						path: 'create',
						component: CreateEnergyPrice,
						props: {pageName: 'Energy Prices'}
					},
					{
						path: 'edit/:id',
						name: 'EditEnergyCost',
						component: EditEnergyPrice,
						props: {pageName: 'Energy Prices'}
					}
				]
			},
			{
				path: '/VideoCards',
				component: VideoCards,
				children: [
					{
						path: '',
						component: ShowVideoCards,
						props: {pageName: 'Video Cards'},
					},
					{
						path: 'create',
						component: CreateVideoCard,
						props: {pageName: 'Video Cards'},
					},
					{
						path: 'edit/:id',
						name: 'EditVideoCard',
						component: EditVideoCard,
						props: {pageName: 'Video Cards'},
					}
				]
			},
			{
				path: '/Entries',
				component: Entries,
				children: [
					{
						path: '',
						component: ShowEntries,
						props: {pageName: 'Entries'}
					},
					{
						path: 'create',
						component: CreateEntries,
						props: {pageName: 'Entries'}
					},
					{
						path: 'edit/:id',
						name: 'EditEntries',
						component: EditEntries,
						props: {pageName: 'Entries'}
					}
				]
			},
		]
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.path !== '/Auth' && store.state.userAuth === false ) {
		if(to.meta.userType === 'guest'){
			next();
		} else {
			next('/Auth');
		}
	} else {
		document.body.classList.remove('login');
		document.body.classList.add('default');
		next();
	}
});

export default router;
