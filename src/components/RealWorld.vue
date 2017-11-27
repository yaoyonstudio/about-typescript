<template>
  <div class="RealWorld">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class RealWorld extends Vue {
  msg: string = 'RealWorld Example'
  created () {
  }
  mounted () {

  }
}
</script>
