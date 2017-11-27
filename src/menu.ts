const menus = [
  {
    id: 1,
    items: [],
    link: '/type',
    name: 'type',
    showMore: true,
    title: 'Type System'
  },
  {
    id: 2,
    items: [],
    link: '/interface',
    showMore: true,
    title: 'Interface'
  },
  {
    id: 3,
    items: [],
    link: '/classes',
    showMore: true,
    title: 'Classes'
  },
  {
    id: 3,
    items: [],
    link: '/functions',
    showMore: true,
    title: 'Functions'
  },
  {
    id: 3,
    items: [],
    link: '/generics',
    showMore: true,
    title: 'Generics'
  },
  {
    id: 3,
    items: [],
    link: '/modules',
    showMore: true,
    title: 'Modules',
  },
  {
    id: 3,
    items: [],
    link: '/mixins',
    showMore: true,
    title: 'Mixins',
  },
  {
    id: 3,
    items: [],
    link: '/async_await',
    showMore: true,
    title: 'Async/Await',
  },
  {
    id: 3,
    items: [
      {id: 1, link: '/real-world/slider', title: 'Slider'}
    ],
    link: '/real-world',
    showMore: true,
    title: 'RealWorld',
  },
  {
    id: 3,
    items: [],
    link: '/test',
    showMore: true,
    title: 'Test',
  },
]

module.exports = {
  getMenus: () => {
    return menus
  }
}
