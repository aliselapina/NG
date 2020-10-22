<template>
  <div class="ContactPage">
    <h2 class="Headline"> Kontakti</h2>
    <p>Tālrunis: +371 67316888</p>
    <p>E-pasts: birojs@nti.lv </p>
    <p> Adrese: Mārupes iela 16, Rīga</p>
    <div class="columns is-multiline">
      <h2>Starptautiskie kontakti</h2>
      <PartnerItem v-for="(partner, index) in data.partners"
                      :key="index"
                      :content="partner"
                      :showPartners="true"/>
    </div>
    <div class="columns is-multiline">
      <h2>Darbības virzieni</h2>
      <PartnerItem v-for="(partner, index) in data.contacts"
                      :key="index"
                      :content="partner"
                      :showPartners="true"/>
    </div>
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
  }
}
</script>
<style lang="scss" scoped>
.ContactPage{
  margin-top: 50px;
}
</style>
