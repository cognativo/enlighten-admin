import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProcessosPage from './views/lists/ProcessosPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [     
        {
          path: '/processos',
          name: 'processos',
          component: ProcessosPage
        }
      ]
    }
  ]
})
