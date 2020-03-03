<template>
  <div class="container">
  <div class="AboutUs__Banner columns is-multiline">
    <button class="AboutUs__BannerItem column is-one-third">
      <div class="text"> Mēs radām biznesa  spēles un interaktīvus apmācību instrumentus, kas ļauj mūsu klientiem Latvijā, Lietuvā, Krievijā, Ukrainā, Polijā, Baltkrievijā, Rumānijā, Indonēzijā, ASV un Kanādā apgūt zināšanas un trenēt iemaņas  interesantā, iesaistošā un efektīvā veidā</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mēs ticam pieredzē balstītām apmācībām</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mūsu vairāk kā 20 gadu pieredze dažādās valstīs apliecina, ka spēle ir labākais un ātrākais apmācību veids. Esam izstrādājuši vairāk kā 70 dažādas simulācijas un apmācību galda spēles, kas ļauj apgūt vadības, pārdošanas, plānošanas un sadarbības prasmes aizraujošā un dinamiskā veidā</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mums ir svarīgi: ticēt tam, ko darām, uzticēties un būt uzticamiem, būt inovatīviem un darīt no</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Mēs veidojam un vadām uzņēmuma specifikai pielāgotas ilgtermiņa apmācību programmas, izmantojot mūsu radītos apmācību instrumentus, kā arī palīdzam izveidot uzņēmumu iekšējās apmācības sistēmas un sagatavojam trenerus, kuri prot lietot spēļu apmācību instrumentus</div></button>
    <button class="AboutUs__BannerItem column is-one-third"><div class="text">Izstrādājot mūsu spēles, mēs vēlamies apmācības padarīt  iesaistošākas un efektīvākas. Mēs visu darām praktiski, jo ticam, ka darot mēs apgūstam prasmes vislabāk</div></button>
</div>
    <h1>Mūsu komanda</h1>

    <div class="columns is-multiline">
      <GameItem v-for="(person, index) in data.persons"
                :key="index"
                :content="person"
                :showGames="true"
                :showPersons="true"></GameItem>
      </div>
      <a to="/Contacts" class="BottomButton">Plašākai informācijai par spēlēm un apmācībām, sazinies ar mums!</a>
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
