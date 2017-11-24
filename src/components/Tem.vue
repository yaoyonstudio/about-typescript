<template>
  <div class="tem">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Tem extends Vue {
  msg: string = 'Tem'
}
</script>

