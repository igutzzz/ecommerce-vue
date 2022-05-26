<template>
  <NavBar />
  <ProdutoCard />
</template>

<script>

import ProdutoCard from './components/ProdutoLista.vue'
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    ProdutoCard,
    NavBar,
},

  data() {
    return{
      produtos: [],
    }
  },

}
</script>

<style>
 /*global styles */
 @import './assets/styles/global.css';

#app {
  background-color: var(--bg-color);
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
</style>
