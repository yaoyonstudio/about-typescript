<template>
  <div class="Classes">
    <h1>{{ msg }}</h1>
    <code id="editor"></code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Mixin from '../mixin'

/* eslint-disable */

@Component({
  mixins: [Mixin]
})
export default class Classes extends Vue {
  msg: string = 'Classes'
  initEditor: any
  created() {
    // 定义
    class Person {
      name: string                    // 公有属性
      private age: number             // 私有属性
      private hobby?: Array<string>   // 可选私有

      constructor (name: string, age: number, hobby?: Array<string>) {
        this.name = name
        this.age = age
        this.hobby = hobby
      }
      getAge () {
        return this.age
      }
      getHobby () {
        if (this.hobby && this.hobby.length) {
          return this.hobby
        } else {
          return []
        }
      }
      addOne () {
        Person.num++
      }
      // 静态成员
      static num = 0
      // 静态方法
      static walk () {
        console.log('walking...')
      }
    }

    Person.walk()
    console.log(Person.num)

    console.log('----------------------')

    const ken = new Person('ken', 18, ['computer'])
    console.log(ken.name)
    console.log(ken.getAge())
    console.log(ken.getHobby())

    console.log('----------------------')

    const kenny = new Person('kenny', 18)
    console.log(kenny.name)
    console.log(kenny.getAge())
    console.log(kenny.getHobby())

    console.log('----------------------')

    ken.addOne()
    kenny.addOne()
    console.log(Person.num)

    console.log('----------------------')

    // 继承
    class Student extends Person {
      grade: number
      constructor (name: string, age: number, grade: number, hobby?: Array<string>) {
        super(name, age, hobby)
        this.grade = grade
      }
      study () {
        console.log(`${this.name} is studying...`)
      }
    }
    const yaoyon = new Student('yaoyon', 9, 3, ['play', 'study'])
    console.log(yaoyon.name)
    console.log(yaoyon.grade)
    console.log(yaoyon.getAge())
    console.log(yaoyon.getHobby())
  }
  mounted () {
    let content = `
// 定义
class Person {
  name: string                    // 公有属性
  private age: number             // 私有属性
  private hobby?: Array<string>   // 可选私有

  constructor (name: string, age: number, hobby?: Array<string>) {
    this.name = name
    this.age = age
    this.hobby = hobby
  }
  getAge () {
    return this.age
  }
  getHobby () {
    if (this.hobby && this.hobby.length) {
      return this.hobby
    } else {
      return []
    }
  }
}

const ken = new Person('ken', 18, ['computer'])
console.log(ken.name)
console.log(ken.getAge())
console.log(ken.getHobby())

console.log('----------------------')

const kenny = new Person('kenny', 18)
console.log(kenny.name)
console.log(kenny.getAge())
console.log(kenny.getHobby())

console.log('----------------------')

// 继承
class Student extends Person {
  grade: number
  constructor (name: string, age: number, grade: number, hobby?: Array<string>) {
    super(name, age, hobby)
    this.grade = grade
  }
  study () {
    console.log(\`\${this.name} is studying...\`)
  }
}
const yaoyon = new Student('yaoyon', 9, 3, ['play', 'study'])
console.log(yaoyon.name)
console.log(yaoyon.grade)
console.log(yaoyon.getAge())
console.log(yaoyon.getHobby())
`
    this.initEditor('editor', content)
  }
}
</script>

