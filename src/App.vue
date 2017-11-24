<template>
  <div id="app">
    <my-header></my-header>
    <div class="container">
      <my-left class="myMenu" v-if="show"></my-left>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import MyHeader from './components/partial/MyHeader.vue'
import MyLeft from './components/partial/MyLeft.vue'

@Component({
  components: {
    MyHeader,
    MyLeft
  }
})
export default class App extends Vue {
  show: boolean = true
  toggle () {
    this.show = !this.show
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
}
.container {
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .myMenu {
    width: 268px;
    flex-basis: 268px;
    padding: 1rem;
    border-right: 1px solid #ccc;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main {
    flex: 1;
    padding: 1rem;
    overflow: auto;
  }
}
.toggleIcon {
  display: block;
  border: 1px solid #ddd;
  color: #aaa;
  width: 12px;
  height: 24px;
  position: absolute;
  left: 267px;
  top: 0;
  cursor: pointer;
}
</style>
