<template>
  <div id="app">
    <Header />
    <main>
      <h1>Bienvenue sur ma page web</h1>
      <p>Contenu principal ici...</p>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
/* Ajoutez des styles globaux si nécessaire */
</style>
