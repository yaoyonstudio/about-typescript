<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Test extends Vue {
  msg: string = 'TEST'
  created () {
  }
  mounted () {

  }
}
</script>
