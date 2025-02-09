<template>
  <header class="main-header">
    <!-- Logo à gauche -->
    <div class="logo-container">
      <img :src="require('@/assets/images/logoDessin1.png')" alt="Logo" class="logo" />
    </div>

    <!-- Menu de navigation -->
    <nav class="nav-center">
      <!-- Liens pour les non-connectés -->
      <router-link v-if="!user" to="/">Accueil</router-link>
      <router-link v-if="!user" to="/faq">FAQ</router-link>
      <router-link v-if="!user" to="/about">À propos</router-link>

      <!-- Liens pour les utilisateurs connectés -->
      <router-link v-if="user" to="/profile" class="navbar-item">Profil</router-link>
      <router-link v-if="user" to="/my-reservations" class="navbar-item">Mes Réservations</router-link>
      <router-link v-if="user && userRole === 'admin' " to="/add-device" class="navbar-item">Ajouter un Appareil</router-link>
      <router-link v-if="user && userRole === 'admin'" to="/manage-users" class="navbar-item">Gestion des utilisateurs</router-link>
      <router-link v-if="user" to="/devices" class="navbar-item">Appareils Disponibles</router-link>
      <router-link v-if="user && userRole === 'admin'"  to="/all-reservations" class="navbar-item">Toutes les Réservations</router-link>
    </nav>

    <!-- Boutons de connexion ou déconnexion -->
    <div class="right-container">
      <!-- Déconnexion -->
      <button v-if="user" class="button is-danger" @click="logout">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
        <span>Déconnexion</span>
      </button>

      <!-- Connexion -->
      <router-link v-if="!user" to="/auth" class="button is-primary">
        Connexion
      </router-link>
    </div>
  </header>
</template>

<script>
import { auth } from '@/router/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/router/firebase'; // Assurez-vous que Firebase est bien configuré

export default {
  name: 'MainHeader',
  data() {
    return {
      user: null,
      userRole: '', // Rôle de l'utilisateur
    };
  },
  mounted() {
    // Mettre à jour l'état de l'utilisateur en temps réel
    auth.onAuthStateChanged(async (currentUser) => {
  this.user = currentUser;
  
  if (this.user) {
    console.log("UID de l'utilisateur connecté :", this.user.uid);

    const userDocRef = doc(db, "users", this.user.uid);
    try {
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        console.log("Données de l'utilisateur :", userDoc.data()); // Vérifie ce qui est récupéré
        this.userRole = userDoc.data().role; // Récupérer le rôle
        console.log("Rôle de l'utilisateur :", this.userRole);
      } else {
        console.error("Erreur : Utilisateur non trouvé dans Firestore !");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur :", error);
    }
  } else {
    console.log("Aucun utilisateur connecté.");
    this.userRole = ''; 
  }
});

  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push('/'); // Rediriger vers la page d'accueil après déconnexion
      });
    },
  },
};
</script>

<style scoped>
.main-header {
  background-color: #f8f9fa;
  color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;
}

.logo-container {
  flex: 1;
}

.logo {
  width: 50px;
  height: auto;
}

.nav-center {
  display: flex;
  gap: 20px;
}

.navbar-item {
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar-item:hover {
  color: #0056b3;
}

.right-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.button {
  font-weight: bold;
  transition: background-color 0.3s;
}

.button.is-primary:hover {
  background-color: #0056b3;
}

.button.is-danger:hover {
  background-color: #d9534f;
}

button .icon {
  margin-right: 5px;
}
</style>
