<template>
    <footer class="footer">
      <div class="footer__logo">ДариДобро</div>
      <nav class="footer__nav">
        <router-link to="/partner">Стать партнером</router-link>
        <router-link to="/delivery">Доставка</router-link>
        <router-link to="/about">О проекте</router-link>
      </nav>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f4f4f4;
    border-top: 1px solid #ddd;
    margin-top: auto; /* Чтобы футер всегда находился внизу */
  }
  
  .footer__logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .footer__nav {
    display: flex;
    gap: 1rem;
  }
  
  .footer__nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .footer__nav a:hover {
    color: #007bff;
  }
  </style>
  