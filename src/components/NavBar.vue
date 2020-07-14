<template>
  <div class="NavBar">
    <img class="NavBar__Image" src="../assets/NTI_logo1.png" alt="logo"/>
    <router-link class="NavBar__Item" to="/Home">{{navItem.home[currentLocale]}}</router-link>
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

<style lang="scss" >
  .NavBar {
    padding: 30px;
    text-align: right;
    width: 100%;
    margin-bottom: 20px;
    background-image: url('../assets/header2.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .NavBar__Item{
    margin: auto 10px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }
  .NavBar__Image{
    width: 100px;
    float: left;
    margin-top: -20px;
    margin-left: 100px;
  }
</style>
