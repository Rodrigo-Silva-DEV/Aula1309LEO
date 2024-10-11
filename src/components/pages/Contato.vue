<template>
  <div class="contato container">
    <h2>Contato</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Seu Nome" required />
      <input type="email" v-model="email" placeholder="Seu Email" required />
      <textarea v-model="message" placeholder="Sua Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contato',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // Lógica de envio do formulário
      alert(`Nome: ${this.name} - Email: ${this.email} - Mensagem: ${this.message}`);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos do Contato.vue */
.contato {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os inputs */
}

form input,
form textarea {
  margin: 10px 0;
  padding: 10px;
  width: 80%; /* Largura relativa */
  max-width: 400px; /* Largura máxima */
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #555;
}
</style>
