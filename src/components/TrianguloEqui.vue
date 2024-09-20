<template>
    <div>
      <h1>Cálculo da Área do Triângulo com Lados A e B</h1>
      
      <div class="input-container">
        <label for="ladoA">Comprimento do Lado A:</label>
        <input type="number" v-model="ladoA" id="ladoA" />
      </div>
  
      <div class="input-container">
        <label for="ladoB">Comprimento do Lado B:</label>
        <input type="number" v-model="ladoB" id="ladoB" />
      </div>
  
      <div class="input-container">
        <label for="angulo">Ângulo (em graus):</label>
        <input type="number" v-model="angulo" id="angulo" />
      </div>
      
      <button @click="calcularArea">Calcular Área</button>
      
      <div v-if="area !== null">
        <h2>Área do Triângulo é: {{ area.toFixed(2) }} m²</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ladoA: null,
        ladoB: null,
        angulo: null,
        area: null,
      };
    },
    methods: {
      calcularArea() {
        if (this.ladoA > 0 && this.ladoB > 0 && this.angulo >= 0) {
          // Convertendo o ângulo de graus para radianos
          const radianos = (this.angulo * Math.PI) / 180;
          this.area = 0.5 * this.ladoA * this.ladoB * Math.sin(radianos);
        } else {
          this.area = null;
          alert("Por favor, insira valores positivos para os lados e um ângulo válido.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    margin: 20px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  .input-container {
    margin-bottom: 15px; 
  }
  
  label {
    margin-right: 10px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
  </style>
  