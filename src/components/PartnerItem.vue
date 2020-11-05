<template>
    <div class="PartnerItem column is-one-third">
        <img v-if="showPartners" @click="goToUrl" class="PartnerItem__Image" :src="require('../assets/'+content.image)" />
        <p class="PartnerItem__Title" @click="goToUrl"> {{ content.name }} </p>
        <p v-if="!showPartners" @click="goToUrl">{{ content.link }}</p>
        <p>{{ content.email }}</p>
        <p>{{ content.number }}</p>
    </div>
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
      let url = this.content.link
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.PartnerItem{
    width: 250px;
    height: 170px;
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
        font-weight: bold;
    }
}
@media only screen and (max-width: 768px) {
  .PartnerItem {
    margin: 5px
  }
}
</style>
