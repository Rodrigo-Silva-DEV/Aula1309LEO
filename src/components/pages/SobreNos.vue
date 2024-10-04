<template>
    <div>
      <h1>Sobre Nós</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div class="row">
        <div class="col" v-for="integrante in integrantes" :key="integrante.nome">
          <div class="card">
            <img :src="integrante.imagem" class="card-img-top" alt="Imagem do Integrante">
            <div class="card-body">
              <h5 class="card-title">{{ integrante.nome }}</h5>
              <p class="card-text">Idade: {{ integrante.idade }}</p>
              <p class="card-text">Frase preferida: "{{ integrante.frase }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SobreNos',
    data() {
      return {
        integrantes: [
          { nome: 'Alice', idade: 20, frase: 'Lorem ipsum!', imagem: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { nome: 'Bob', idade: 22, frase: 'Lorem ipsum!', imagem: 'https://images.pexels.com/photos/27364881/pexels-photo-27364881/free-photo-of-retratos-de-um-jovem-dancarino-e-influenciador.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { nome: 'Charlie', idade: 21, frase: 'Lorem ipsum!', imagem: 'https://images.pexels.com/photos/28029772/pexels-photo-28029772/free-photo-of-homem-modelo-jovem-novo.jpeg?auto=compress&cs=tinysrgb&w=600' }
        ]
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  