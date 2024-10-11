<template>
  <div class="sobre-nos container">
    <h2>Sobre Nós</h2>
    <div class="row">
      <div class="col" v-for="(member, index) in teamMembers" :key="index">
        <div class="card">
          <img :src="member.photo" class="card-img-top" alt="Foto do membro" />
          <div class="card-body">
            <h5>{{ member.name }}</h5>
            <p>{{ member.role }}</p>
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
      teamMembers: [
        {
          name: 'João',
          role: 'Desenvolvedor',
          photo: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Maria',
          role: 'Designer',
          photo: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          name: 'Ana',
          role: 'Gerente de Projetos',
          photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos específicos do SobreNos.vue */
.sobre-nos {
  padding: 20px;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permite que os itens se empilhem */
}

.col {
  margin: 10px;
  flex: 1 1 200px; /* Tamanho flexível */
}

.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%; /* Largura total */
  height: auto; /* Altura automática */
}

.card-body {
  padding: 15px;
}
</style>
