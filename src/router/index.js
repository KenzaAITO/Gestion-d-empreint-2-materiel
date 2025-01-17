import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../router/firebase';
//import AuthExample from '../components/AuthExample.vue';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/pages/HomePage.vue';
import AddDevice from '../components/AddDevice.vue';
import Device from '../components/Device.vue';
import ProfilPage from '../components/pages/ProfilPage.vue';
import FAQPage from '../components/pages/FAQPage.vue'; // Import du composant FAQ
import SubscriptionPage from '../components/pages/SubscriptionPage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import HelpPage from '../components/pages/HelpPage.vue';

// Définition des routes
const routes = [
  { path: '/auth', name: 'auth', component: LoginPage, meta: { showFooter: true } },
  { path: '/', name: 'HomePage', component: HomePage, meta: { showFooter: true } },
  { path: '/faq', name: 'FAQPage', component: FAQPage, meta: { showFooter: true } },
  { path: '/about', name: 'AboutPage', component: AboutPage, meta: { showFooter: true } },
  { path: '/help', name: 'HelpPage', component: HelpPage, meta: { showFooter: true } },
  { path: '/add-device', name: 'AddDevice', component: AddDevice, meta: { showFooter: false } },
  { path: '/devices', name: 'Device', component: Device, meta: { showFooter: true } },
  { path: '/profil', name: 'Profil', component: ProfilPage, meta: { showFooter: false } },
  { path: '/subscription', name: 'SubscriptionPage', component: SubscriptionPage, meta: { showFooter: false } },
  { path: '/formulaire', name: 'Formulaire', component: SubscriptionPage }, // Formulaire d'inscription
  
];


// Création du routeur
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Redirection avant chaque navigation
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = auth.currentUser;

  if (requiresAuth && !user) {
    next('/'); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  } else {
    next(); // Continuer la navigation
  }
});

export default router;
