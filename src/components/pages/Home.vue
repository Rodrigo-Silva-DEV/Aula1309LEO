<template>
  <div class="home container">
    <h1>Bem-vindo à Home</h1>
    <p>Esta é a página inicial do nosso projeto.</p>
    
    <div class="carousel-container">
      <div class="carousel" :style="carouselStyle">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Imagem do carrossel" />
      </div>
      <button @click="prevImage" class="nav-button left">❮</button>
      <button @click="nextImage" class="nav-button right">❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://images.unsplash.com/photo-1727961673785-689cad093cc7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://media.istockphoto.com/id/505625400/pt/foto/tucano-na-ramifica%C3%A7%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=YZsbzSofAzmmdu6O4wioJ307EgTP3mDfhZVbgsUZNqA=',
        'https://plus.unsplash.com/premium_photo-1670897797602-ce90c0e441e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
      ],
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    autoSlide() {
      setInterval(this.nextImage, 3000);
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
/* Estilos específicos do Home.vue */
.home {
  text-align: center;
  width: 100%; /* Ocupa a largura total */
  padding: 20px; /* Espaçamento interno */
}

nav {
  background-color: #333;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%; /* Largura total da navegação */
}

nav ul {
  list-style-type: none;
  padding: 3px;
  text-align: center; /* Centraliza a navegação */
}

nav li {
  display: inline;
  margin-right: 15px; /* ajuste conforme necessário */
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ffdd57;
}

.carousel-container {
  position: relative;
  width: 100%; /* Ocupa a largura total */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.carousel img {
  width: 100%; /* A imagem ocupa a largura total do contêiner */
  min-width: 100%;
  border-radius: 10px; /* Arredonda os cantos */
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 1);
}
</style>
