<template>
  <div class="home">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre-nos">Sobre Nós</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>
    <h1>Bem-vindo à Home</h1>
    <p>Esta é a página inicial do nosso projeto.</p>
    
    <div class="carousel-container">
      <div class="carousel" :style="carouselStyle">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Imagem do carrossel" />
      </div>
      <button @click="prevImage" class="nav-button left">❮</button>
      <button @click="nextImage" class="nav-button right">❯</button>
    </div>

    <footer>
      <p>© 2024 Etec JK</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://images.pexels.com/photos/19709928/pexels-photo-19709928/free-photo-of-cidade-meio-urbano-festa-comemoracao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5499998/pexels-photo-5499998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        'https://images.pexels.com/photos/20267149/pexels-photo-20267149/free-photo-of-panorama-vista-paisagem-noite.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
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

<style>

.home {
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
  color: #333;
  padding: 5px;
  text-align: center;
}

nav {
  background-color: #333; 
  padding: 5px; 
  border-radius: 5px; 
}

nav ul {
  list-style-type: none; 
  padding: 0; 
}

nav li {
  display: inline; 
  margin-right: 5px; 
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

h1 {
  font-size: 2.5em; 
  margin: 20px 0; 
}

p {
  font-size: 1.2em; 
  margin-bottom: 40px; 
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px; 
  margin: 0 auto; 
  overflow: hidden;
  border-radius: 10px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
}

.carousel {
  display: flex;
  width: 100%;
}

.carousel img {
  width: 100%; 
  min-width: 100%; 
  height: auto; 
  border-radius: 10px; 
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 24px;
  border-radius: 5px; 
  padding: 10px; 
  transition: background 0.3s; 
}

.nav-button:hover {
  background: rgba(255, 255, 255, 1); 
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

footer {
  margin-top: 20px; 
  text-align: center; 
  font-size: 0.9em; 
  color: #777; 
}
</style>
