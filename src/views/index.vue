<template>
  <div class="MainLayout">
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  name: 'Main',
  components: {
    NavBar,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.MainLayout{
  width: 100%;
}
</style>
