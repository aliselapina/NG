<template>
    <a class="PartnerItem column is-one-third"
        @click="goToUrl">
        <img class="PartnerItem__Image" :src="require('../assets/'+content.image)" />
        <p class="PartnerItem__Title"> {{ content.name }} </p>
    </a>
</template>
<script>
export default {
  name: 'PartnerItem',
  props: {
    content: { type: Object },
    showPartners: { type: Boolean }
  },
  methods: {
    goToUrl () {
      let url = '//' + this.content.link
      console.log(url)
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.PartnerItem{
    color: #fff;
    font-weight: bold;
    width: 250px;
    height: 170px;
    background-color: rgb(10,75,95, 0.8);
    display: inline-block;
    margin: 30px;
    cursor: pointer;
    &__Image{
        display: inline-block;
        margin: 10px;
        height: 95px;
    }
    &__Title{
        display: block;
        font-size: large;
    }
}
</style>
