<template>
    <div>
      <h1>Contato</h1>
      <form @submit.prevent="enviarMensagem">
        <input v-model="email" type="email" placeholder="Seu E-mail" required />
        <select v-model="assunto" required>
          <option value="">Selecione um assunto</option>
          <option value="duvida">Dúvida</option>
          <option value="sugestao">Sugestão</option>
          <option value="reclamacao">Reclamação</option>
        </select>
        <textarea v-model="mensagem" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
  
      <div v-if="mensagemEnviada" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sucesso</h5>
              <button type="button" class="btn-close" @click="mensagemEnviada = false"></button>
            </div>
            <div class="modal-body">
              <p>Mensagem enviada com sucesso!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="mensagemEnviada = false">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contato',
    data() {
      return {
        email: '',
        assunto: '',
        mensagem: '',
        mensagemEnviada: false,
      };
    },
    methods: {
      enviarMensagem() {
        this.mensagemEnviada = true;
        
        this.email = '';
        this.assunto = '';
        this.mensagem = '';
      },
    },
  };
  </script>
  
  <style>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .modal-dialog {
    background: white;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
  }
  </style>
  