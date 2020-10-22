<template>
  <div class="container">
    <h1 class="Headline">Vispieprasītākās spēles un apmācības</h1>
    <ToggleSwitcher :value="showGames"
                    :firstLabelValue="'Spēles & simulācijas'"
                    :secondLabelValue="'Apmācības'"
                    @input="changeValue" />
    <div class="columns is-multiline"
          v-if="!showGames">
      <GameItem v-for="(game, index) in data.games"
                :key="index"
                :content="game"
                :showGames="true"
                :showSeminars="false"
                :showStories="false"></GameItem>
      </div>
      <div class="columns is-multiline"
          v-if="showGames">
      <GameItem v-for="(seminar, index) in data.seminars"
                :key="index"
                :content="seminar"
                :showGames="true"
                :showSeminars="true"
                :showStories="false"></GameItem>
      </div>
      <!-- <a to="/Contacts" class="BottomButton">Plašākai informācijai par spēlēm un apmācībām, sazinies ar mums!</a> -->
  </div>
</template>

<script>
import GameItem from '@/components/GameItem'
import ToggleSwitcher from '@/components/ToggleSwitcher'
import data from '@/data'

export default {
  name: 'GamesAndSimulations',
  components: {
    GameItem,
    ToggleSwitcher
  },
  data () {
    return {
      data,
      showGames: false
    }
  },
  methods: {
    changeValue (value) {
      this.showGames = value
    }
  }
}
</script>
<style lang="scss" scoped>
.BottomButton {
  font-size: x-large;
  float: left;
  cursor: pointer;
  color: black;
  &:hover{
    text-decoration: none;
    color: darkgrey;
  }
}
</style>
