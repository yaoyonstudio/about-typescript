<template>
  <div class="Interface">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Interface extends Vue {
  msg: string = 'Interface'
  created () {
    // 声明一个新闻条目接口
    interface NewsItem {
      id: number,
      title: string,
      date: string,
      publish: boolean,
      tags?: Array<string>,         // 可选属性
      [extra: string]: any,         // 索引特征属性，各个新闻条目可以有自己独特的属性
      "readonly isown"?: boolean      // 只读属性
    }

    let newsList: NewsItem[] = [
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
      }
    ]

    function printNews(news: NewsItem): void {
      console.log(`News: ${news.id}|${news.title}|${news.date}${news.comments ? '|' + news.comments : ''}${news.tags ? '|' + news.tags : ''}`)
    }
    newsList.map(item => printNews(item))
  }
}
</script>

