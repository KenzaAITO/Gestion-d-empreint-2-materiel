<template>
  <div class="auth-container">
    <h1>Connexion</h1>
    <form @submit.prevent="login-page" class="auth-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe:</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit" class="btn-full">Connexion</button>
      <div class="forgot-password">
        <a href="#" @click.prevent="forgotPassword">Mot de passe oublié ?</a>
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <p>
        Pas encore de compte ?
        <router-link to="/inscription">Créer un compte</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export default {
  name: 'login-page',
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = async () => {
      errorMessage.value = '';
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } catch (error) {
        errorMessage.value = error.message;
      }
    };

    const forgotPassword = () => {
      alert('Fonctionnalité "Mot de passe oublié" à implémenter.');
    };

    return {
      email,
      password,
      errorMessage,
      login,
      forgotPassword,
    };
  },
};
</script>

<style scoped>
/* Styles similaires à ceux dans votre fichier actuel */
</style>
