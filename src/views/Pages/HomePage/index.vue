<template>
  <div class="HomePage">
    <b-jumbotron class="HomePage__firstJumb">
      <div class="HomePage__firstJumbWhite">
        <h1 class="display-4">NORDIC GROUP</h1>
        <router-link class="HomePage__RouterLink"
                    to="GamesAndSimulations">
          <span> Mēs esam vadošais lietišķo spēļu un biznesa simulāciju izstrādātājs Baltijā</span> <br><br>
          <span> Uz šo brīdi izstrādātas</span> <br>
          <span class="GamesCount">82</span> <br>
          <span>spēles un simulācijas </span>
        </router-link>
      </div>
    </b-jumbotron>
         <b-jumbotron class="Jumbotron Jumbotron__Middle">
            <div class="colomns is-multiline">
              <router-link class="HomePage__Column column is-one-third align-top"
                          to="GamesAndSimulations">
                Lietišķās spēles un simulācijas
                <p>Piedāvājam lietišķo spēļu un biznesa simulāciju izpēles, apmācības un licenses.</p>
                </router-link>
              <router-link class="HomePage__Column column is-one-third align-top"
                          to="GamesAndSimulations">
                Biznesa apmācības
                <p>Organizējam seminārus un biznesa apmācības ar pielāgotu programmu katra uzņēmuma individuālām vajadzībām.</p>
              </router-link>
              <router-link class="HomePage__Column column is-one-third align-top"
                          to="GamesAndSimulations">
                Vēl
                <p>Izstradājam lietišķās spēles un biznesa simulācijas dažādu nozaru uzņēmumiem, kā arī eksportējam mūsu radītās spēles ārzemju klientiem.</p></router-link>
              </div>
        </b-jumbotron>

         <b-jumbotron class="Jumbotron Jumbotron__Bottom">
            <p class="HomePage__list">Pieredzē balstīta mācīšanās <br> Prasmju spēks <br> Atšķirīga pieeja <br> Apmācību veikšanai nepieciešamā analīze <br> Pielāgošanās un elastība <br> Atklātie un korporatīvie semināri</p>
        </b-jumbotron>
        </div>
  </template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.HomePage {
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.HomePage__RouterLink{
  font-size: 20px;
  color: black;
  &:hover{
    text-decoration: none;
    color: darkslategray;
  }
  & span {
    margin: -20px;
  }
}
.HomePage__Column{
  width: 300px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: darkslategray;
  margin: auto 40px;
  &:hover{
    text-decoration: none;
    color: darkslategray;
  }
  & p{
    color: darkslategray;
    font-size: 17px;
    font-weight: lighter;
    margin: 10px;
  }
}
.HomePage__firstJumb {
  background-image: url('../../../assets/games/parrunupavelnieks.jpg');
  background-size: 50% 450px;
  padding: 0;
  height: 450px;
  &White{
    background-color: rgb(255,255,255,0.6);
    width: 50%;
    float: left;
    height: 450px;
    padding: 40px;
  }
}
.GamesCount {
  font-size: 100px;
  margin: -20px;
}
.Jumbotron {
  padding: 20px;
}
</style>
