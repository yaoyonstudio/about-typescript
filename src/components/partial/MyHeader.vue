<template>
  <div class="main myHeader">
    <router-link to="/"><img class="logo" src="/static/img/ts.png" /></router-link>
    <h2>About Typescript</h2>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style scoped lang="scss">
.myHeader {
  width: 100%;
  height: 6rem;
  background-color: #353130;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  h2 {
    color: #ffffff;
    line-height: 8rem;
    text-align: center;
    font-size: 1.8rem;
    font-family: 'Arial';
    font-weight: 500;
  }
  .logo {
    height: 4rem;
    cursor: pointer;
  }
}
</style>
