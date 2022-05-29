<template>
  <NavBar />
  <CarrinhoCard />
  <ProdutoCard />
</template>

<script>

import ProdutoCard from './components/ProdutoLista.vue'
import NavBar from './components/Navbar.vue'
import CarrinhoCard from './components/Carrinho.vue'

export default {
  name: 'App',
  components: {
    ProdutoCard,
    NavBar,
    CarrinhoCard,

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
