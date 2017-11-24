<template>
  <div class="Modules">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Modules extends Vue {
  msg: string = 'Modules'
}
</script>

