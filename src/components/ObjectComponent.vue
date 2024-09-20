<template>
<form @submit.prevent.="addPerson">
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <input type="text" v-model="document">

    <button type="button" @click="addPerson">Adicionar</button>
</form>

<div v-for="(person, index) in personList" :key="index">
    <p>ID:{{ index + 1 }}</p>
    <p>Nome:{{ person.name }}</p>
    <p>Idade:{{ person.age }}</p>
    <p>Documento:{{ person.document }}</p>
    <hr>
</div>

</template>

<script>
export default{
    data() {
        return{
            personList:[],
            name:'',
            age:'',
            document:''
        }
    },
methods:{
    addPerson(){
        let person = {
            name: this.name,
            age: this.age,
            document: this.documen,t
        }
        this.personList.push
    }
}
}
</script>