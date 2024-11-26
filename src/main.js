import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'


createApp(App).use(router).use(VuePageTransition).mount('#app');



/**import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


 * 
 import { createApp } from 'vue'; // Cambia la importación de Vue
import App from './App.vue';
import router from './router';

const app = createApp(App); // Crea la aplicación usando createApp
app.use(router); // Usa el enrutador
app.mount('#app'); // Monta la aplicación
 * 
 */