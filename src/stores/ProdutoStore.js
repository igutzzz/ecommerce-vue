import { defineStore } from 'pinia';

export const useProdutoStore = defineStore('ProdutoStore', {
    state: () => {
        return {
            produtos: [],
            nome: '',
            preco: 0,
            quantidade: 0,
            id: 0,
            name: "Igor de Almeida"
        }
    },

    getters: {
    }
})