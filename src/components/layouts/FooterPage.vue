<template>
    <footer class="main-footer">
      <div class="footer-container">
        <!-- Section logo et copyright -->
        <div class="footer-logo">
          <img src="@/assets/images/logoDessin1.png" alt="Logo" class="logo" />
          <p>© 2024 LOCAMAT. Tous droits réservés.</p>
        </div>
        <!-- Section des réseaux sociaux -->
        <div class="footer-socials">
          <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Facebook">
            <img src="@/assets/images/instagram-icon.jpeg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter">
            <img src="@/assets/images/twitter-icon.jpeg" alt="Twitter" />
          </a>
          <a href="https:/tiktok.com" target="_blank" class="social-link" aria-label="LinkedIn">
            <img src="@/assets/images/tiktok-icon.jpeg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import logoDessin from "@/assets/images/logoDessin1.png";
  import facebookIcon from "@/assets/images/instagram-icon.png";
  import twitterIcon from "@/assets/images/twitter-icon.png";
  import tiktokIcon from "@/assets/images/tiktok-icon.png";
  
  export default {
    name: "FooterPage",
    data() {
      return {
        logoDessin,
        facebookIcon,
        twitterIcon,
        tiktokIcon
      };
    }
  };
  </script>
  
  
  <style scoped>
  .main-footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
  }
  
  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .logo {
    width: 50px;
    height: auto;
    margin-bottom: 10px;
  }


  .footer-nav {
    display: flex;
    gap: 15px;
  }
  
  .footer-link {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #3498db;
  }
  
  .footer-socials {
    display: flex;
    gap: 10px;
  }
  
  .social-link img {
    width: 25px;
    height: 25px;
    transition: transform 0.3s;
  }
  
  .social-link img:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-nav {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .footer-socials {
    justify-content: center;
  }
}

  </style>
  