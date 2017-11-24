<template>
  <div class="Functions">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Functions extends Vue {
  msg: string = 'Functions'
}
</script>

