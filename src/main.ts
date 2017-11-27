// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import window from './IWindow'

import '../static/css/style.scss'

import '../node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// declare module 'vue/types/vue' {
//   interface VueConstructor {
//     $myGlobal: string,
//   }
// }

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     myOption?: string
//   }
// }

Vue.mixin({
  data() {
    return {
      initEditor: (el: string, content: string) => {
        const editor = window.ace.edit(el)
        editor.$blockScrolling = Infinity
        editor.setValue(content, 1)
        editor.setTheme('ace/theme/monokai')
        editor.getSession().setMode('ace/mode/typescript')
      },
    }
  },
})

/* eslint-disable no-new */
/* tslint-disable:no-unused-expression */
const myApp = new Vue({
  components: { App },
  el: '#app',
  router,
  template: '<App/>'
})
