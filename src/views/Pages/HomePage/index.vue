<template>
  <div class="HomePage">
    <b-jumbotron class="HomePage__firstJumb">
      <div class="HomePage__firstJumbWhite">
        <h1 class="display-4">NORDIC GROUP</h1>
        <router-link class="HomePage__RouterLink"
                    to="GamesAndSimulations">
          <span> Mēs esam vadošais lietišķo spēļu un biznesa simulāciju izstrādātājs Baltijā.</span> <br>
          <span> Uz doto brīdi izstrādātas 77 spēles un simulācijas.
          </span>
        </router-link>
      </div>
    </b-jumbotron>

        <b-jumbotron>
            <img src="../../../assets/banner11.jpg" style="width:70%"/>
        </b-jumbotron>

         <b-jumbotron>
            <div class="colomns is-multiline">
              <router-link class="HomePage__Column column is-one-third"
                          to="GamesAndSimulations">
                Lietišķās spēles un simulācijas
                <p>Piedāvājam lietišķo spēļu un biznesa simulāciju izpēles, apmācības un licenses.</p>
                </router-link>
              <router-link class="HomePage__Column column is-one-third"
                          to="GamesAndSimulations">
                Biznesa apmācības
                <p>Organizējam seminārus un biznesa apmācības ar pielāgotu programmu katra uzņēmuma individuālām vajadzībām.</p>
              </router-link>
              <router-link class="HomePage__Column column is-one-third"
                          to="GamesAndSimulations">
                Vēl
                <p>Iztradājam lietišķās spēles un biznesa simulācijas dažādu nozaru uzņēmumiem, kā arī eksportējam mūsu radītās spēles ārzemju klientiem.</p></router-link>
              </div>
        </b-jumbotron>

         <b-jumbotron>
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
    margin: 20px auto;
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
  background-image: url('../../../assets/parrunupavelnieks.jpg');
  background-size: 50% 400px;
  padding: 0;
  height: 400px;
  &White{
    background-color: rgb(255,255,255,0.6);
    width: 50%;
    float: left;
    height: 400px;
    padding: 40px;
  }
}
</style>
