<template>
  <div class="Modules">
    <h1>{{ msg }}</h1>
    <h2>Internal Modules</h2>
    <code id="editor1"></code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Mixin from '../mixin'

import doFun from './materials/doFun'

module News {
  // newsCate intervace
  export interface INewsCate {
    id: number
    title: string
    created: number
    isshow: boolean
  }

  export interface INewsComment {
    id: number
    author: string
    created: number
    isshow: boolean
    content: string
  }

  // newsItem interface
  export interface INewsItem {
    id: number
    title: string
    author: string
    created: number
    content: string
    isTop: boolean
    isshow: boolean
    cate: number
    comments: INewsComment[]
  }
}

@Component({
  mixins: [Mixin]
})
export default class Modules extends Vue {
  msg: string = 'Modules'
  initEditor: any
  created () {
    console.log('-----------------------')

    doFun()
  }
  mounted () {
    let content1 = `
// ./materials/doFun.ts
const doFun = (): void => {
  console.log('have fun')
}

export default doFun
// ------------------------------------

import doFun from './materials/doFun'

doFun()
`
    this.initEditor('editor1', content1)
  }
}
</script>

