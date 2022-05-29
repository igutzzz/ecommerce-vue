import { defineStore } from 'pinia';

export const useProdutoStore = defineStore('ProdutoStore', {
    id: 'Produtos', 
    state: () => {
        return {
            produtos: [],
            carrinho: [],
            imagem: '',
            nome: '',
            preco: 0,
            quantidade: 0,
            id: 0,
        }
    },

    getters: {
        total: (state) => {
            let totalItems = 0 

            state.carrinho.forEach(produto => {
                let quantidade = produto.quantidade
                totalItems += quantidade;
            })

            return totalItems
        },

        precoTotal: (state) => {
            let totalPreco = 0

            state.carrinho.forEach (produto => {
                let preco = produto.preco * produto.quantidade
                totalPreco += preco
            })

            return totalPreco.toLocaleString('pt-BR')
        }
    },

    actions: {
        addItems(produto, qntd){
            let nome = produto.title;
            let preco =  produto.price;
            let quantidade = qntd;
            let id = produto.id;
            let imagem = produto.image

            if(this.carrinho.find(item => item.id === id)){
                this.carrinho.find(item => item.id === id).quantidade += quantidade;
            }else{
                this.carrinho.push({
                    id: id,
                    imagem: imagem,
                    nome: nome,
                    preco: preco,
                    quantidade: quantidade,
                })
            }

            this.quantidade = 1;
            console.log(this.carrinho);


            
        }
    }
})