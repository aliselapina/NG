<template>
  <div class="ContactPage">
    <h2 class="Headline"> Kontakti</h2>
    <p>Tālrunis: +371 67316888</p>
    <p>E-pasts: birojs@nti.lv </p>
    <p> Adrese: Mārupes iela 16, Rīga</p>
    <div class="ContactPage__TopJumb">
      <b-jumbotron class="Jumbotron Jumbotron__Middle">
        <h2>Starptautiskie kontakti</h2>
        <PartnerItem v-for="(partner, index) in data.partners"
                      :key="index"
                      :content="partner"
                      :showPartners="false"/>
        </b-jumbotron>
    </div>
    <b-jumbotron class="Jumbotron Jumbotron__Middle">
    <div class="columns is-multiline">
      <h2>Darbības virzieni</h2>
      <PartnerItem v-for="(partner, index) in data.contacts"
                      :key="index"
                      :content="partner"
                      :showPartners="true"/>
    </div>
     </b-jumbotron>
  </div>
</template>

<script>
import PartnerItem from '@/components/PartnerItem'
import data from '@/data'
export default {
  name: 'Contacts',
  components: {
    PartnerItem
  },
  data () {
    return {
      data,
      showGames: false
    }
  },
  methods: {
    goToUrl (partner) {
      let url = partner
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.ContactPage{
  margin-top: 50px;
  &__TopJumb{
    margin-top: 50px
  }
}
.HomePage__Column {
  cursor: pointer;
}
.Jumbotron {
  padding: 25px
}
.Headline {
  padding: 0 170px
}
@media only screen and (max-width: 768px) {
  .Headline {
  padding: 0 50px
}
}
</style>
