<template>
  <b-button class="GameItem column is-one-fourth">
    <img v-if="showGames" class="GameItem__Image" alt="game" :src="require('../assets/'+content.image)">
    <p class="GameItem__Title"> {{ content.name }}</p>
    <b-dropdown v-if="!showPersons" class="">
      <b-dropdown-item v-for="(item, index) in content.about"
                      :key="index">{{ item }}</b-dropdown-item>
    </b-dropdown>
    <b-dropdown v-if="showPersons">
      <img class="GameItem__Image" alt="person" :src="require('../assets/'+content.about)">
    </b-dropdown>
  </b-button>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    content: { type: Object },
    showGames: { type: Boolean },
    showPersons: { type: Boolean }
  }
}
</script>
<style lang="scss" scoped>
.GameItem{
  background-color:rgb(10,75,95, 0.8);
  color: #fff;
  font-weight: bold;
  width: 250px;
  height: 250px;
  margin: 30px;
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background: rgb(8,55,70);
    &__Title{
color: #fff;
  }
  }
}
.GameItem__Image{
  width: 200px;
  margin: 5px;
}
.btn-secondary{
  background-color: rgb(10,75,95, 0.8);
  border: none;
  visibility: none;
}
</style>
