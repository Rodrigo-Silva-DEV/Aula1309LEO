<template>
<div>
    <form @submit.prevent="addItem">
        <input type="text" v-model="inputValue">
        <button @click="addItem">Adicionar</button>
    </form>
<hr>
    <table style="border:1px solid black;">
        <tr>
            <td>Index</td>
            <td>Key</td>
        </tr>
        
        <tr v-for="(item,index) in itens" :key="index">
          <td> {{ index }}</td>
          <td> {{ item }}</td>
        </tr>

    </table>
</div>
</template>

<script>
export default {
    data(){
        return {
            inputValue:'',
            itens: []
        }
    },
    methods: {
        addItem(){
            if (this.inputValue){
                this.itens.push(this.inputValue)
                this.inputValue = ''
             }
         }
    }
}

</script>

<style>
table, td,tr {
    border: ipx solid black;
}
</style>