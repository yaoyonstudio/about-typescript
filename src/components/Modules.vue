<template>
  <div class="Modules">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import doFun from './materials/doFun'

@Component
export default class Modules extends Vue {
  msg: string = 'Modules'
  created () {
    doFun()
  }
}
</script>

