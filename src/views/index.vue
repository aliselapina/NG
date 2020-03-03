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
  width: 100%;
}
</style>
