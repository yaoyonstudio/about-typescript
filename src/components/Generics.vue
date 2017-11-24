<template>
  <div class="Generics">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Generics extends Vue {
  msg: string = 'Generics'
}
</script>

