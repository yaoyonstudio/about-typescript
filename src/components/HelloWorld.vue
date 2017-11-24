<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <test></test>
    <button @click="show()">点我</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Test from './Test.vue'

@Component({
  components: {
    Test
  }
})

export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
  created () {
    console.log('created')
  }
  mounted () {
    console.log('mounted')
  }
  show () {
    window.alert('你点我干嘛!')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
