import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import SobreNos from '../components/pages/SobreNos.vue';
import Contato from '../components/pages/Contato.vue';
import Login from '../components/pages/Login.vue'; // Importando o Login

const routes = [
  { path: '/', component: Home },
  { path: '/sobre-nos', component: SobreNos },
  { path: '/contato', component: Contato },
  { path: '/login', component: Login } // Adicionando a rota de Login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
