<template>
  <div class="NavBar">
    <img class="NavBar__Image" src="../assets/logo/nti.png" alt="logo"/>
    <router-link class="NavBar__Item" to="/">{{navItem.home[currentLocale]}}</router-link>
    <router-link class="NavBar__Item" to="GamesAndSimulations">{{navItem.games[currentLocale]}}</router-link>
    <router-link class="NavBar__Item" to="/AboutUs">{{navItem.aboutUs[currentLocale]}}</router-link>
    <router-link class="NavBar__Item" to="/Philosophy">{{navItem.philosophy[currentLocale]}}</router-link>
    <router-link class="NavBar__Item" to="/Contacts">{{navItem.contacts[currentLocale]}}</router-link>
    <a href="https://www.facebook.com/NordicTrainingInternational/"
      class="NavBar__Item">
      <span class="label">FB</span>
    </a>
    <a href="https://www.linkedin.com/company/nordic-training-international/"
      class="NavBar__Item">
      <span class="label">LI</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      currentLocale: 'lv',
      locales: [
        { id: 'en', name: 'EN' },
        { id: 'lv', name: 'LV' }
      ],
      navItem: {
        home: { en: 'HOME', lv: 'SĀKUMS' },
        games: { en: 'GAMES', lv: 'SPĒLES UN APMĀCĪBAS' },
        aboutUs: { en: 'ABOUT US', lv: 'MĒS' },
        philosophy: { en: 'PHILOSOPHY', lv: 'FILOZOFIJA' },
        contacts: { en: 'CONTACTS', lv: 'KONTAKTI' }
      }
    }
  }
}
</script>

<style lang="scss">
  .NavBar {
    padding: 30px;
    text-align: right;
    width: 100%;
    margin-bottom: 20px;
    background-color: #9fb2c4;
  }
  .NavBar__Item{
    margin: auto 10px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    &:hover{
      text-decoration: none;
      text-shadow: 0px 0px 3px #fff
    }
  }
  .NavBar__Image{
    width: 100px;
    float: left;
    margin-top: -20px;
    margin-left: 100px;
  }
  @media only screen and (max-width: 768px){
  .NavBar__Image{
    margin-left: 20px;
    margin-top: 20px
  }
  .NavBar__Item{
    font-size: 14px;
    margin: auto 4px;
    display: block;
  }
  .NavBar {
    padding: 10px;
  }
  }
</style>
