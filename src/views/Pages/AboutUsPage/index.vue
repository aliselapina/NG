<template>
  <div class="container">
     <h1 class="Headline">Mūsu komanda</h1>
  <div class="AboutUs__Banner columns is-multiline">
    <button class="AboutUs__BannerItem column is-one-third">
      <div class="text"> Mēs radām biznesa  spēles un interaktīvus apmācību instrumentus</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mēs ticam pieredzē balstītām apmācībām</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mūsu vairāk kā 20 gadu pieredze dažādās valstīs apliecina, ka spēle ir labākais un ātrākais apmācību veids</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mums ir svarīgi: ticēt tam, ko darām, uzticēties un būt uzticamiem, būt inovatīviem un darīt no sirds</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mēs eksportējam savus produktus uz ASV, Kanādu, Lietuvu, Krieviju, Ukrainu, Poliju, Baltkrieviju , Rumāniju un Indonēziju</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mēs radām instrumentus apmācībām uzņēmumu iekšienē</div></button>
</div>
    <div class="columns is-multiline">
      <GameItem v-for="(person, index) in data.persons"
                :key="index"
                :content="person"
                :showGames="true"
                :showPersons="true"></GameItem>
      </div>
  </div>
</template>

<script>
import GameItem from '@/components/GameItem'
import data from '@/data'

export default {
  name: 'GamesAndSimulations',
  components: {
    GameItem
  },
  data () {
    return {
      data
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
.AboutUs__Banner{
min-width: 100%;
margin: auto;
padding: auto;
background-image: url('../../../assets/mes.jpg');
background-repeat: no-repeat;
background-size: cover;
}
.AboutUs__BannerItem{
  display: inline-block;
  background: rgb(255,255,255, 0);
  width: 33%;
  height: 300px;
  overflow: hidden;
  transition: .4s;
  text-align: center;
  font-weight: bold;
  border:none;
  &:hover{
    background: rgb(255,255,255, 0.8);
    color: rgb(8,55,70);
  }
}
.text {
  color:rgb(255,255,255, 0);
  font-size: 1.2em;
}
.AboutUs__BannerItem:hover .text{
   color: black;
}
</style>
<style lang="scss">
.Headline {
  border-radius: 5px;
  border: 2px solid gray;
  width: fit-content;
  padding: 0 32px;
  margin: auto auto 20px auto;
}

@media only screen and (max-width: 768px) {
  .AboutUs__Banner{
    height: 250px;
  }
  .AboutUs__BannerItem{
    visibility: hidden;
  }
  .Headline {
    font-size: 20px !important;
  }
}
</style>
