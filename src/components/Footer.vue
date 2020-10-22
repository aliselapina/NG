<template>
  <div class="Footer">
    <router-link class="Footer__Item" to="/">{{navItem.home[currentLocale]}}</router-link>
    <router-link class="Footer__Item" to="GamesAndSimulations">{{navItem.games[currentLocale]}}</router-link>
    <router-link class="Footer__Item" to="/AboutUs">{{navItem.aboutUs[currentLocale]}}</router-link>
    <router-link class="Footer__Item" to="/Philosophy">{{navItem.philosophy[currentLocale]}}</router-link>
    <router-link class="Footer__Item" to="/Contacts">{{navItem.contacts[currentLocale]}}</router-link>
    <a href="https://www.facebook.com/NordicTrainingInternational/"
      class="Footer__Item">
      <span class="label">FB</span>
    </a>
    <a href="https://www.linkedin.com/company/nordic-training-international/"
      class="Footer__Item">
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

<style lang="scss" scoped>
  .Footer {
    padding: 30px;
    text-align: center;
    width: 100%;
    /*background-image: url('../assets/header2.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;*/
    background-color: #9fb2c4;
  }
  .Footer__Item{
    margin: auto 10px;
    color: #fff;
    text-decoration: none;
    font-weight: initial ;
    &:hover{
      text-decoration: none;
      text-shadow: 0px 0px 3px #fff
    }
  }
</style>
