<template>
    <div class="trapezio">
      <h1>Cálculo da Área do Trapézio</h1>
      
      <div class="input-container">
        <label for="baseMaior">Base Maior (B):</label>
        <input type="number" v-model="baseMaior" id="baseMaior" />
      </div>
  
      <div class="input-container">
        <label for="baseMenor">Base Menor (b):</label>
        <input type="number" v-model="baseMenor" id="baseMenor" />
      </div>
  
      <div class="input-container">
        <label for="altura">Altura (h):</label>
        <input type="number" v-model="altura" id="altura" />
      </div>
      
      <button @click="calcularArea">Calcular Área</button>
      
      <div v-if="area !== null" class="resultado">
        <h2>Área do Trapézio: {{ area.toFixed(2) }} m²</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        baseMaior: null,
        baseMenor: null,
        altura: null,
        area: null,
      };
    },
    methods: {
      calcularArea() {
        if (this.baseMaior > 0 && this.baseMenor > 0 && this.altura > 0) {
          this.area = ((this.baseMaior + this.baseMenor) * this.altura) / 2;
        } else {
          this.area = null;
          alert("Por favor, insira valores positivos para as bases e a altura.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .trapezio {
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
  