<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
     <!--<div class="container">
      <pp-menu></pp-menu>
    </div>-->

     <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>

//src/assets/components/Header.vue

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import Home from './components/Home.vue'
//import Menu from './components/Menu.vue'
//import Admin from './components/Admin.vue'
export default {
components:{
  ppHeader: Header,
  //ppHome:Home,
  //ppMenu:Menu,
  ppFooter:Footer,
  } 
}
</script>

<style>

#home{

  background:url('../src/assets/sushi.jpg');
  height: 500px;
  padding: 10%;
}

.background{
  background-color: #eee;
  opacity: 0.8;
  max-width: 60%;
  margin:0 auto;
  padding:20px 0;
}

h3 {
  font-size: 17px;
  font-family: 'Black Han Sans', sans-serif;
  color:#c12f2f;
 
 
}


</style>