<template>
  <div class="Generics">
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
export default class Generics extends Vue {
  msg: string = 'Generics'
  initEditor: any
  created () {
    // 泛型函数
    function getRandom<T> (list: T[]): T {
      return list[Math.floor(Math.random() * list.length)]
    }

    let nums: number[] = [1, 2, 3, 4, 5]
    let frameworks: string[] = ['angular', 'react', 'vue', 'ember']
    console.log(getRandom(nums))
    console.log(getRandom(frameworks))

    console.log('---------------')

    // 泛型函数与接口
    interface INewsItem {
      id: number,
      title: string,
      date: string,
      publish: boolean,
      tags?: Array<string>,         // 可选属性
      [extra: string]: any,         // 索引特征属性，各个新闻条目可以有自己独特的属性
      "readonly isown"?: boolean      // 只读属性
    }

    let newsList: INewsItem[] = [
      {
        id: 1,
        title: '新闻标题1',
        date: '2016/01/01',
        publish: true,
        comments: ['comment1', 'comment2'],
        isown: true
      },
      {
        id: 2,
        title: '新闻标题2',
        date: '2017/01/01',
        publish: true,
        tags: ['tag1', 'tag2']
      },
      {
        id: 3,
        title: '新闻标题3',
        date: '2017/03/01',
        publish: true,
        tags: ['tag1']
      }
    ]
    console.log(getRandom(newsList))
  }
  mounted () {
    let content = `
// 泛型函数
function getRandom<T> (list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}

let nums: number[] = [1, 2, 3, 4, 5]
let frameworks: string[] = ['angular', 'react', 'vue', 'ember']
console.log(getRandom(nums))
console.log(getRandom(frameworks))

console.log('---------------')

interface INewsItem {
  id: number,
  title: string,
  date: string,
  publish: boolean,
  tags?: Array<string>,         // 可选属性
  [extra: string]: any,         // 索引特征属性，各个新闻条目可以有自己独特的属性
  "readonly isown"?: boolean      // 只读属性
}

let newsList: INewsItem[] = [
  {
    id: 1,
    title: '新闻标题1',
    date: '2016/01/01',
    publish: true,
    comments: ['comment1', 'comment2'],
    isown: true
  },
  {
    id: 2,
    title: '新闻标题2',
    date: '2017/01/01',
    publish: true,
    tags: ['tag1', 'tag2']
  },
  {
    id: 3,
    title: '新闻标题3',
    date: '2017/03/01',
    publish: true,
    tags: ['tag1']
  }
]
console.log(getRandom(newsList))
`
    this.initEditor('editor', content)
  }
}
</script>

