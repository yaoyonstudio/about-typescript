import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

import AsyncAwait from '@/components/AsyncAwait.vue'
import BasicType from '@/components/BasicType.vue'
import Classes from '@/components/Classes.vue'
import Functions from '@/components/Functions.vue'
import Generics from '@/components/Generics.vue'
import Interface from '@/components/Interface.vue'
import Mixins from '@/components/Mixins.vue'
import Modules from '@/components/Modules.vue'

import Slider from '@/components/real-world/Slider.vue'
import RealWorld from '@/components/RealWorld.vue'

import Test from '@/components/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      component: HelloWorld,
      name: 'HelloWorld',
      path: '/'
    },
    {
      component: BasicType,
      name: 'BasicType',
      path: '/type'
    },
    {
      component: Interface,
      name: 'Interface',
      path: '/interface'
    },
    {
      component: Classes,
      name: 'Classes',
      path: '/classes'
    },
    {
      component: Functions,
      name: 'Functions',
      path: '/functions'
    },
    {
      component: Generics,
      name: 'Generics',
      path: '/generics'
    },
    {
      component: Modules,
      name: 'Modules',
      path: '/modules'
    },
    {
      component: Mixins,
      name: 'Mixins',
      path: '/mixins'
    },
    {
      component: AsyncAwait,
      name: 'AsyncAwait',
      path: '/async_await'
    },
    {
      component: RealWorld,
      name: 'RealWorld',
      path: '/real-world'
    },
    {
      component: Slider,
      name: 'Slider',
      path: '/real-world/slider'
    },
    {
      component: Test,
      name: 'Test',
      path: '/test'
    },
  ]
})
