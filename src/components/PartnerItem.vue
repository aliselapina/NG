<template>
    <div class="PartnerItem column is-one-fourth">
        <img class="PartnerItem__Image" :src="require('../assets/'+content.image)" />
        <p class="PartnerItem__Title"> {{ content.name }} </p>
    </div>
</template>
<script>
export default {
  name: 'PartnerItem',
  props: {
    content: { type: Object },
    showPartners: { type: Boolean }
  }
}
</script>
<style lang="scss" scoped>
.PartnerItem{
    font-style: italic;
    width: 250px;
    height: 170px;
    background-color: whitesmoke;
    display: inline-block;
    margin: 30px;
    &__Image{
        display: inline-block;
        margin: 10px;
        height: 120px;
    }
    &__Title{
        display: block;
        font-size: large;
    }
}
</style>
