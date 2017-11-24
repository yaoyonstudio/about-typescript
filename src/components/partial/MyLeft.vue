<template>
  <div class="myLeft">
    <ul>
      <li v-for="(menu, index) in menus" :key="index" class="item">
        <h4 @click="hrefTo(menu)">{{menu.title}}</h4>
        <ul v-show="menu.showMore">
          <router-link v-for="(subMenu, i) in menu.items" :key="i" :to="subMenu.link" tag="li" class="subItem">{{subMenu.title}}</router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Menus from '../../menu'

export default {
  name: 'myLeft',
  data () {
    return {
      menus: []
    }
  },
  created () {
    this.menus = Menus.getMenus()
  },
  methods: {
    hrefTo (menu) {
      if (this.$route.path === menu.link) {
        menu.showMore = !menu.showMore
      } else {
        menu.showMore = true
      }
      this.$router.push({path: menu.link})
    }
  }
}
</script>

<style scoped lang="scss">
.myLeft {
  position: relative;
  .item {
    display: block;
    margin-bottom: .5rem;
    h4 {
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 600;
    }
    h4:hover {
      color: #0a8acd;
    }
    .subItem {
      display: block;
      padding-left: 2rem;
      height: 2.4rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      cursor: pointer;
    }
    .subItem:hover {
      color: #dd3333;
    }
  }
}
</style>
