<template>
  <div class="Modules">
    <h1>{{ msg }}</h1>
    <code id="editor"></code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Mixin from '../mixin'

import doFun from './materials/doFun'

@Component({
  mixins: [Mixin]
})
export default class Modules extends Vue {
  msg: string = 'Modules'
  initEditor: any
  created () {
    doFun()
  }
  mounted () {
    let content = `
// ./materials/doFun.ts
const doFun = (): void => {
  console.log('have fun')
}

export default doFun
// ------------------------------------

import doFun from './materials/doFun'

doFun()
`
    this.initEditor('editor', content)
  }
}
</script>

