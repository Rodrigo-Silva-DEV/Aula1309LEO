<template>
  <div class="login-container container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="Usuário" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Lógica de autenticação aqui
      alert(`Usuário: ${this.username} - Senha: ${this.password}`);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos do Login.vue */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.login-container input {
  margin: 10px 0;
  padding: 10px;
  width: 80%; /* Largura relativa */
  max-width: 400px; /* Largura máxima */
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-container button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #555;
}
</style>
