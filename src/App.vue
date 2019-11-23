<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" v-model="input" class='input'>
    <button type="button" @click="change" class="button">转大写</button>
    <div class='result'>{{result}}</div>
    <ul>
      <li v-for="(item,index) in list" :key="index">

        {{item}}
      </li>
    </ul>
    <button type="button" @click="add">add</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {changeUpperCase} from '@/common/utils.js'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data(){
    return {
      input:'',
      result:'',
      list:[0],
    }
  },
  created(){

  },
  methods: {
    change(){
     this.result= changeUpperCase(this.input)
    },
    add(){
      // let self = this;
      setTimeout(()=>{
        this.list.push(this.list.length)
        this.list.push(this.list.length)
        // self.list=self.list.concat([self.list.length,self.list.length+1])
          // self.list.splice(self.length,0,self.list.length,self.list.length+1)
      },1000)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
