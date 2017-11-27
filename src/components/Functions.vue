<template>
  <div class="Functions">
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
export default class Functions extends Vue {
  msg: string = 'Functions'
  initEditor: any
  created () {
    function add1(x: number, y: number): number {
      return x + y
    }

    var add2 = function (x: number, y: number): number {
      return x + y
    }

    var add3 = (x: number, y: number): number => x + y

    console.log(add1(1, 2))
    console.log(add2(1, 2))
    console.log(add3(1, 2))

    console.log ('-------------------------')

    // 函数可选参数
    var add4 = (x: number, y: number, z?: number): number => z ? x + y + z : x + y
    console.log(add4(1, 2, 3))
    console.log(add4(1, 2))

    console.log ('-------------------------')

    // 函数默认参数
    var add5 = (x: number, y: number, z:number = 3) => x + y + z
    console.log(add5(1, 2, 10))
    console.log(add5(1, 2))

    console.log ('-------------------------')

    // 函数剩余参数
    var add6 = (...args: number[]) => args.reduce((sum, num) => sum + num, 0)
    console.log(add6(1, 2))
    console.log(add6(1, 2, 3))
    console.log(add6(1, 2, 3, 4, 5, 6, 7, 8, 9))
  }
  mounted () {
    let content = `
function add1(x: number, y: number): number {
  return x + y
}

var add2 = function (x: number, y: number): number {
  return x + y
}

var add3 = (x: number, y: number): number => x + y

console.log(add1(1, 2))
console.log(add2(1, 2))
console.log(add3(1, 2))

console.log ('-------------------------')

// 函数可选参数
var add4 = (x: number, y: number, z?: number): number => z ? x + y + z : x + y
console.log(add4(1, 2, 3))
console.log(add4(1, 2))

console.log ('-------------------------')

// 函数默认参数
var add5 = (x: number, y: number, z:number = 3) => x + y + z
console.log(add5(1, 2, 10))
console.log(add5(1, 2))

console.log ('-------------------------')

// 函数剩余参数
var add6 = (...args: number[]) => args.reduce((sum, num) => sum + num, 0)
console.log(add6(1, 2))
console.log(add6(1, 2, 3))
console.log(add6(1, 2, 3, 4, 5, 6, 7, 8, 9))
`
    this.initEditor('editor', content)
  }
}
</script>

