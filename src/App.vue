<template>
<NavPage></NavPage>
<ContentPage></ContentPage>
<FooterPage></FooterPage>
<LoopComponent></LoopComponent>
<ObjectComponent></ObjectComponent>
<TrianguloEqui></TrianguloEqui>
<Circulo></Circulo>
<Trapezio></Trapezio>
</template>

<script>
import NavPage from './components/default/NavPage.vue';
import ContentPage from './components/default/ContentPage.vue';
import FooterPage from './components/default/FooterPage.vue';
import LoopComponent from './components/LoopComponent.vue';
import ObjectComponent from './components/ObjectComponent.vue';
import TrianguloEqui from './components/TrianguloEqui.vue';
import Circulo from './components/Circulo.vue';
import Trapezio from './components/Trapezio.vue';

export default {
  name: 'App',
  components:{
    NavPage, ContentPage, FooterPage, LoopComponent, ObjectComponent, TrianguloEqui, Circulo, Trapezio
  }
}
</script>

<style>

</style>


