<template>
  <div class="Mixins">
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
export default class Mixins extends Vue {
  msg: string = 'Mixins'
  initEditor: any
  created () {
    type Constructor<T = {}> = new (...args: any[]) => T

    function Common<TBase extends Constructor>(Base: TBase) {
      return class extends Base {
        created: number
        updated: number

        constructor(...args: any[]) {
          super(...args)
          this.created = Date.now()
          this.updated = Date.now()
        }

        doFun () {
          console.log('do something fun...')
        }
      }
    }

    class Product {
      name: string
      price: number

      constructor (name: string, price: number) {
        this.name = name
        this.price = price
      }
    }

    class User {
      name: string
      age: number

      constructor(name: string, age: number) {
        this.name = name
        this.age = age
      }
    }

    const Mobile = Common(Product)
    const Computer = Common(Product)
    const Member = Common(User)
    const Customer = Common(User)

    const iphone = new Mobile('iphone X', 7988.00)
    const macbook = new Computer('Macbook Pro', 11888.00)
    const administrator = new Member('ken', 18)
    const someone = new Customer('yaoyon', 20)

    console.log(iphone)
    console.log(iphone.name)
    console.log(iphone.created)
    iphone.doFun()

    console.log('-----------------')

    console.log(macbook)
    console.log(macbook.name)
    console.log(macbook.created)
    macbook.doFun()

    console.log('-----------------')

    console.log(administrator.name)
    console.log(administrator.age)
    console.log(administrator.created)
    administrator.doFun()

    console.log('-----------------')

    console.log(someone.name)
    console.log(someone.age)
    console.log(someone.created)
    someone.doFun()
  }
  mounted () {
    let content = `
type Constructor<T = {}> = new (...args: any[]) => T

function Common<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    created: number
    updated: number

    constructor(...args: any[]) {
      super(...args)
      this.created = Date.now()
      this.updated = Date.now()
    }

    doFun () {
      console.log('do something fun...')
    }
  }
}

class Product {
  name: string
  price: number

  constructor (name: string, price: number) {
    this.name = name
    this.price = price
  }
}

class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const Mobile = Common(Product)
const Computer = Common(Product)
const Member = Common(User)
const Customer = Common(User)

const iphone = new Mobile('iphone X', 7988.00)
const macbook = new Computer('Macbook Pro', 11888.00)
const administrator = new Member('ken', 18)
const someone = new Customer('yaoyon', 20)

console.log(iphone)
console.log(iphone.name)
console.log(iphone.created)
iphone.doFun()

console.log('-----------------')

console.log(macbook)
console.log(macbook.name)
console.log(macbook.created)
macbook.doFun()

console.log('-----------------')

console.log(administrator.name)
console.log(administrator.age)
console.log(administrator.created)
administrator.doFun()

console.log('-----------------')

console.log(someone.name)
console.log(someone.age)
console.log(someone.created)
someone.doFun()
`
    this.initEditor('editor', content)
  }
}
</script>

