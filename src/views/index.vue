<template>
  <div class="MainLayout">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'Main',
  components: {
    NavBar
  }
}
</script>
<style lang="scss" scoped>
.MainLayout{
  // background-image: url('../assets/header2.jpg');
  width: 100%;
}
</style>
