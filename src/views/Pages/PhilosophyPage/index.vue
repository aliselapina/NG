<template>
  <div class="PhilosophyPage">
    <p class="PhilosophyPage__TextBox">Nordic Group ir ne tikai biznesa apmācību kompānija - mēs esam personību apvienība ar plašu interešu loku, uz attīstību vērsti un attīstību virzoši. Ar mūsu apmācībām mēs motivējam cilvēkus būt radošiem attīstībā, drosmīgiem pārmaiņās, atbildīgiem lēmumu pieņemšanā un cilvēciskiem komandā.  Mēs mācāmies, nodarbojamies ar terapiju, virzam labdarības projektus, kāpjam kalnos un dziedam. Mēs lasām, klausāmies un stāstam stāstus. Mēs gribam padarīt pasauli ap sevi plašāku, dziļāku un interesantāku. </p>
  <div class="PhilosophyPage__Stories columns is-multiline">
  <StoryItem v-for="(story, index) in data.stories"
            :key="index"
            :content="story"
            :showPartners="false"/>
  </div>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'
import data from '@/data'
export default {
  name: 'Philosophy',
  components: {
    StoryItem
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
  margin: 50px auto;
  position: relative;
  width: 80%;
}
</style>
