const menus = [
  {
    id: 1,
    title: 'Type System',
    name: 'type',
    link: '/type',
    showMore: true,
    items: []
  },
  {
    id: 2,
    title: 'Interface',
    link: '/interface',
    showMore: true,
    items: []
  },
  {
    id: 3,
    title: 'Classes',
    link: '/classes',
    showMore: true,
    items: []
  },
  {
    id: 3,
    title: 'Functions',
    link: '/functions',
    showMore: true,
    items: []
  },
  {
    id: 3,
    title: 'Generics',
    link: '/generics',
    showMore: true,
    items: []
  },
  {
    id: 3,
    title: 'Modules',
    link: '/modules',
    showMore: true,
    items: []
  },
]

module.exports = {
  getMenus: function () {
    return menus
  }
}
