<template>
  <div class="tem">
    <h1>{{ msg }}</h1>
    <p>Typescript类型</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Type extends Vue {
  msg: string = 'Type'
}
</script>

