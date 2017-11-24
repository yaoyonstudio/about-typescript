import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import BasicType from '@/components/BasicType'
import Interface from '@/components/Interface'
import Classes from '@/components/Classes'
import Functions from '@/components/Functions'
import Generics from '@/components/Generics'
import Modules from '@/components/Modules'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/type',
      name: 'BasicType',
      component: BasicType
    },
    {
      path: '/interface',
      name: 'Interface',
      component: Interface
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/functions',
      name: 'Functions',
      component: Functions
    },
    {
      path: '/generics',
      name: 'Generics',
      component: Generics
    },
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    },
  ]
})
