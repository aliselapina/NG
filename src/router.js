import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Pages/HomePage'
import GamesAndSimulations from './views/Pages/GamesAndSimulationsPage'
import AboutUs from './views/Pages/AboutUsPage'
import Philosophy from './views/Pages/PhilosophyPage'
import Contacts from './views/Pages/ContactsPage'
// import App from './App.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/GamesAndSimulations',
      name: 'GamesAndSimulations',
      component: GamesAndSimulations,
      props: true
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
      props: true
    },
    {
      path: '/Philosophy',
      name: 'Philosophy',
      component: Philosophy,
      props: true
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
      props: true
    }
  ]
})
