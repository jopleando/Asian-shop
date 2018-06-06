import Vue from 'vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'
//import { routes } from './routes.js'
import App from './App.vue'


Vue.use(VueRouter);

const routes = [

{path:'/', component : Home, name:'homeLink'},
{path:'/menu', component : Menu, name:'menuLink'},
{path:'/about', component : About, name:'aboutLink'},
{path:'*', redirect : '/'} // por poner esto, con cualquier direccion que ponga el usuario, te lleva a Home. Tambien con el history,.

]

const router = new VueRouter({
	routes,
	mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



//import About from './components/About.vue'
//import Contact from './components/Contact.vue'
//import Delivery from './components/Delivery.vue'
//import History from './components/History.vue'
//import OrderingGuide from './components/OrderingGuide.vue'
//import Admin from './components/Admin.vue'


