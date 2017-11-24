<template>
  <div class="Classes">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Classes extends Vue {
  msg: string = 'Classes'
}
</script>

