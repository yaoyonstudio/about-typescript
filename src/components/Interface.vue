<template>
  <div class="Interface">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Interface extends Vue {
  msg: string = 'Interface'
}
</script>

