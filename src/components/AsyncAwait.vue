<template>
  <div class="test">
    <h1>{{ msg }}</h1>

    <ul class="list" v-if="list.length">
      <li v-for="item in list" :key="item.id">
        <a :href="item.html_url" target="_blank">{{item.id}} - {{item.name}}</a>
      </li>
    </ul>
    <p class="loading" v-if="loading">正在加载中...</p>
    <p class="nomore" v-if="!hasmore">没有更多数据</p>
    <button class="btn" :class="{'disable': !hasmore}" @click="getRepos()">加载仓库列表</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface IRepos {
  id: number,
  name: string,
  url: string
}

@Component
export default class Test extends Vue {
  msg: string = 'Async/Await'
  list: IRepos[] = []
  loading: boolean = false
  hasmore: boolean = true
  config: any = {
    url: 'https://api.github.com/users/yaoyonstudio/repos',
    page: 1,
    per_page: 10,
    method: 'GET'
  }
  async fetch (config: any): Promise<Response> {
    let page = config.page ? config.page : 1
    let per_page = config.per_page ? config.per_page : 10
    let url: string = config.url + '?page=' + config.page + '&per_page=' + per_page
    let options: any = {
      method: config.method
    }
    try {
      return await fetch(url, options)
    } catch (err) {
      console.log(err)
      return err
    }
  }
  getRepos () {
    if (!this.hasmore) return
    this.loading = true
    this.fetch(this.config).then(response => response.json()).then(res => {
      console.log(res)
      if (res) {
        if (res.length) {
          res.map(item => {
            this.list.push(item)
          })
          this.loading = false
          if (res.length >= this.config.per_page) {
            this.hasmore = true
            this.config.page++
          } else {
            this.hasmore = false
            this.loading = false
          }
        } else {
          this.hasmore = false
          this.loading = false
        }
      }
    })
  }
  created () {
    console.log('page load')
  }
  mounted () {
  }
}
</script>

<style lang="scss">
.list {
  width: 500px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  li {
    display: block;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px dashed #ddd;
    padding-left: 10px;
  }
}
.disable {
  background-color: #ccc;
}
</style>
