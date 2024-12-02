<template>
    <header class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <button class="nav-button" @click="navigateTo('home')">Accueil</button>
          </li>
          <li class="nav-item">
            <button class="nav-button" @click="navigateTo('about')">À propos</button>
          </li>
          <li class="nav-item">
            <button class="nav-button" @click="navigateTo('contact')">Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    methods: {
      navigateTo(section) {
        console.log(`Navigation vers la section : ${section}`);
        // Ajoutez votre logique de navigation ici
      },
    },
  };
  
  </script>
  
  <style scoped>
  .header {
    background-color: #f8f9fa;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 0 10px;
  }
  
  .nav-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .nav-button:hover {
    background-color: #0056b3;
  }
  </style>
  