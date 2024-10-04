<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre-nos">Sobre Nós</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
        <li><router-link to="/login">Login</router-link></li> 
      </ul>
    </nav>
    <router-view></router-view>
    <footer>
      <p>© 2024 Etec JK</p>
    </footer>
  </div>
</template>
