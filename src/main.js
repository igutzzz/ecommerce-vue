import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar, faCartShopping);


createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')

const pinia = createPinia();

App.use(pinia);