<template>
  <div class="tem">
    <h1>{{ msg }}</h1>
    <code id="editor"></code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Mixin from '../mixin'

@Component({
  mixins: [Mixin]
})
export default class Tem extends Vue {
  msg: string = 'Tem'
  initEditor: any
  created () {

  }
  mounted () {
    let content = `

`
    this.initEditor('editor', content)
  }
}
</script>

