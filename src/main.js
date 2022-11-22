import {createApp} from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store';
import router from './router/routes';
import VueAgile from 'vue-agile'



library.add(fas);

const app = createApp(App);
app.use(VueSweetalert2);
app.use(VueAgile);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
