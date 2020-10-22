<template>
  <div class="PhilosophyPage">
    <h1 class="Headline">Mēs neesam tikai biznesa apmācību kompānija, mēs arī -</h1>
  <div class="PhilosophyPage__Stories columns is-multiline">
  <GameItem v-for="(story, index) in data.stories"
            :key="index"
            :content="story"
            :showGames="true"
            :showSeminars="false"
            :showStories="true"/>
  </div>
  </div>
</template>

<script>
import GameItem from '@/components/GameItem'
import data from '@/data'
export default {
  name: 'Philosophy',
  components: {
    GameItem
  },
  data () {
    return {
      data
    }
  }
}
</script>
<style lang="scss" scoped>
.PhilosophyPage__TextBox{
  border: 1px solid gray;
  border-radius: 5px;
  width: 70%;
  position: relative;
  margin: 30px auto;
  padding: 20px;
}
.PhilosophyPage__Stories{
  margin: auto auto 50px auto;
  position: relative;
  width: 80%;
}
</style>
