<template>
  <div class="Generics">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Generics extends Vue {
  msg: string = 'Generics'
  created () {
    // 泛型函数
    // 复用函数
    function getRandom<T> (list: T[]): T {
      return list[Math.floor(Math.random() * list.length)]
    }

    let nums: number[] = [1, 2, 3, 4, 5]
    let frameworks: string[] = ['angular', 'react', 'vue', 'ember']
    console.log(getRandom(nums))
    console.log(getRandom(frameworks))

    console.log('---------------')
  }
}
</script>

