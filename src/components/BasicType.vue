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
export default class BasicType extends Vue implements Mixin {
  msg: string = 'Basic Type'
  myMixinData: string
  initEditor: any
  created () {
    // 1、声明基本类型变量
    // ":"表示继承的意思，继承一个数据类型
    let num: number = 1
    let flag: boolean = true
    let name: string = 'ken'
    let desc: string = `My name is ${name}`

    console.log(num)
    console.log(flag)
    console.log(name)
    console.log(desc)

    console.log('---------------')

    // 2、声明数组
    // 两种方式：一是在数据类型之后加上'[]'；另一种方式是使用泛型声明，如
    let numArr1: number[] = [1, 2, 3, 4, 5]
    let numArr2:Array<number> = [1, 2, 3, 4, 5]
    console.log(numArr1)
    console.log(numArr2)

    console.log('---------------')

    // 3、枚举类型Enum
    //Enum类型值是元素的索引，可以自定义Enum值
    /* eslint-disable quote-props: ["error", "as-needed"] */
    // enum Frameworks1 { Angular, Vue, React }
    // enum Frameworks2 { Angular=10, Vue=21, React }
    // let ng1: Frameworks1 =Frameworks1.Angular
    // let ng2: Frameworks2 = Frameworks2.Angular
    // let v2: Frameworks2 = Frameworks2.Vue
    // console.log(ng1)
    // console.log(ng2)
    // console.log(v2)

    console.log('---------------')

    // 4、元组类型Tuple
    let someone: [string, number]
    someone = ['ken', 18]
    console.log(someone[0])
    console.log(someone[1])

    console.log('---------------')

    // 5、Any
    let noneType: any = 'something'
    noneType = 1
    noneType = false
    console.log(noneType)

    console.log('---------------')

    // 6、Void
    function log (msg: string): void {
      console.log(msg)
    }
    log('something...')
    /* eslint-disable no-undef-init */
    let void_var = undefined

    console.log('---------------')

    // 7、Null/Undefined
    /* eslint-disable no-unused-vars */
    let u: undefined = undefined
    let n: null = null

    // 8、Never类型
    // Never类型表示所声明值永远不会发生，如可以定义错误处理函数

    // 除了上面的类型，其他复合定义可以使用类、interface或行内类型注释定义
    // 行内类型注释
    let newsItem: {
      id: number,
      title: string,
      isshow: boolean,
      created: number
    }
    let newsItem1 = {
      id: 1,
      title: '这是新闻标题',
      isshow: true,
      created: 14435242341
    }
  }
  mounted () {
    // console.log(this.myMixinData)
    let content = `
// 1、声明基本类型变量
// ":"表示继承的意思，继承一个数据类型
let num: number = 1
let flag: boolean = true
let name: string = 'ken'
let desc: string = \`My name is ${name}\`

console.log(num)
console.log(flag)
console.log(name)
console.log(desc)

console.log('---------------')

// 2、声明数组
// 两种方式：一是在数据类型之后加上'[]'；另一种方式是使用泛型声明，如
let numArr1: number[] = [1, 2, 3, 4, 5]
let numArr2:Array<number> = [1, 2, 3, 4, 5]
console.log(numArr1)
console.log(numArr2)

console.log('---------------')

// 3、枚举类型Enum
//Enum类型值是元素的索引，可以自定义Enum值
enum Frameworks1 { Angular, Vue, React }
enum Frameworks2 { Angular=10, Vue=21, React }
let ng1: Frameworks1 =Frameworks1.Angular
let ng2: Frameworks2 = Frameworks2.Angular
let v2: Frameworks2 = Frameworks2.Vue
console.log(ng1)
console.log(ng2)
console.log(v2)

console.log('---------------')

// 4、元组类型Tuple
let someone: [string, number]
someone = ['ken', 18]
console.log(someone[0])
console.log(someone[1])

console.log('---------------')

// 5、Any
let noneType: any = 'something'
noneType = 1
noneType = false
console.log(noneType)

console.log('---------------')

// 6、Void
function log (msg: string): void {
  console.log(msg)
}
log('something...')
/* eslint-disable no-undef-init */
let void_var = undefined

console.log('---------------')

// 7、Null/Undefined
/* eslint-disable no-unused-vars */
let u: undefined = undefined
let n: null = null

// 8、Never类型
// Never类型表示所声明值永远不会发生，如可以定义错误处理函数

// 除了上面的类型，其他复合定义可以使用类、interface或行内类型注释定义
// 行内类型注释
let newsItem: {
  id: number,
  title: string,
  isshow: boolean,
  created: number
}
let newsItem1 = {
  id: 1,
  title: '这是新闻标题',
  isshow: true,
  created: 14435242341
}
`
    this.initEditor('editor', content)
  }
}
</script>

