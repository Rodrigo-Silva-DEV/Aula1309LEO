import './assets/main.css'; // Estilos principais
import './assets/test.css'; // Teste de estilo
import './assets/styles.css'; // Estilos adicionais
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
