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

// 声明内部模块NewsModule
module NewsModule {
  // 只在News模块里起作用
  let nums = 10

  // newsCate intervace
  export interface INewsCate {
    id: number
    title: string
    created: number
    isshow: boolean
  }

  // newsComment interface
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

module TestModule {
  // 导入内部模块NewsModule
  import NewsItem = NewsModule.INewsItem

  const newsList: NewsItem[] = [
    {
      id: 1,
      title: '新闻标题1',
      author: 'ken',
      created: 146832374242,
      content: '新闻内容1',
      isTop: false,
      isshow: true,
      cate: 1,
      comments: [
        {
          id: 1,
          author: 'kenny',
          created: 1454423482943,
          isshow: true,
          content: '这是一个好消息'
        }
      ]
    }
  ]
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

