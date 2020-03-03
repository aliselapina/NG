<template>
    <div class="StoryItem column is-half">
        <img class="StoryItem__Image" :src="require('../../../assets/'+content.image)" />
        <p class="StoryItem__Title"> {{ content.name }} </p>
    </div>
</template>
<script>
export default {
  name: 'StoryItem',
  props: {
    content: { type: Object }
  }
}
</script>
<style lang="scss" scoped>
.StoryItem{
    font-style: italic;
    width: 40%;
    height: 350px;
    background-color: whitesmoke;
    display: inline-block;
    margin: 5px;
    &__Image{
        display: inline-block;
        margin: 10px;
        height: 300px;
    }
    &__Title{
        display: inline-block;
        font-size: large;
    }
}
</style>
