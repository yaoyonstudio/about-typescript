// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../static/css/style.scss'

Vue.config.productionTip = false

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}

Vue.mixin({
  data () {
    return {
      testNum: 1,
      initEditor: function (window: any = Window, el: string, content: string) {
        var editor = window.ace.edit(el)
        editor.setValue(content, 1)
        editor.setTheme('ace/theme/monokai')
        editor.getSession().setMode('ace/mode/javascript')
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
