<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="fazerLogin">
        <input v-model="email" type="email" placeholder="Seu E-mail" required />
        <input v-model="senha" type="password" placeholder="Sua Senha" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        senha: ''
      }
    },
    methods: {
      fazerLogin() {
        alert('Login realizado com sucesso!');
        
      }
    }
  }
  </script>
  
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  