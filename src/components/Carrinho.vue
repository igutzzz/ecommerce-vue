<template>
    <main class="carrinho">
        <h1>Carrinho <font-awesome-icon icon="xmark" /></h1>
        <ul v-for="produto in carrinho" :key="produto.id" id="produto">
           <li>
            <img :src=produto.imagem :alt=produto.nome>
                <div id="nome">
                    <h3>{{produto.nome}}</h3>
                    <h2>R${{produto.preco}}</h2>
                </div>
                <div>
                    <input type="number" v-model=produto.quantidade>
                </div>
            </li>
        </ul>
        <div class="total">
            <p>Total</p>
            <p>R${{precoTotal}}</p>
        </div>
    </main>
</template>

<script>
    import { useProdutoStore } from '@/stores/ProdutoStore'
    import { mapWritableState } from 'pinia'

    export default {
        name: 'CarrinhoCard',

        computed: {
            ...mapWritableState(useProdutoStore, ['carrinho', 'total', 'precoTotal'])
        }
    }
</script>

<style>
    .carrinho {
        background-color: var(--text-color-light);
        position: relative;
        color: #ffff;
        height: 100vh;
        width: 35vw;
        position: absolute;
        z-index: 999;
        top: 0;
        right: 0;
        padding: 1rem;
    }

    .carrinho h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #produto {
        margin: .5rem 0;
    }

    #produto img {
        width: 4rem;
        object-fit: contain;
    }

    #produto li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .total {
        position: absolute;
        bottom: 1rem;
    }
</style>