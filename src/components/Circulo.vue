<template>
    <div class="circulo">
      <h1>Cálculo da Área do Círculo</h1>
      
      <div class="input-container">
        <label for="raio">Raio (r):</label>
        <input type="number" v-model="raio" id="raio" />
      </div>
      
      <button @click="calcularArea">Calcular Área</button>
      
      <div v-if="area !== null" class="resultado">
        <h2>Área do Círculo: {{ area.toFixed(2) }} m²</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        raio: null,
        area: null,
      };
    },
    methods: {
      calcularArea() {
        if (this.raio > 0) {
          this.area = Math.PI * Math.pow(this.raio, 2);
        } else {
          this.area = null;
          alert("Por favor, insira um valor positivo para o raio.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .circulo {
    margin: 20px;
    text-align: right; /* Alinha o conteúdo à direita */
  }
  
  .input-container {
    margin-bottom: 15px;
  }
  
  .resultado {
    text-align: right; /* Alinha o resultado à direita */
  }
  </style>
  