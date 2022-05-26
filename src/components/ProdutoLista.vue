<template>
    <main class="lista">
        <div v-for="produto in produtos" :key=produto.id class="produto">
            <div id="info">
                <img :src=produto.image :alt=produto.title>
                <p id="titulo">{{ produto.title }}</p>
                <p id="categoria">{{ produto.category }}</p>
                <p><font-awesome-icon icon="star" />{{ produto.rating.rate }} ({{ produto.rating.count }})</p>
                <p id="preço">R$ {{ produto.price }}</p>
            </div>
            <div id="comprar">
                <input type="number" name="Quantidade" id="qnt">
                <button>Comprar</button>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: 'ProdutoCard',
    data() {
        return {
            produtos: [],
        }
    },

    mounted() {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then (data=> this.produtos = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>

.lista {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    margin: 0 2rem;
}


.produto {
    width: 20rem;
    border-radius: 5px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
}

#titulo {
    font-size: 1.3rem;
    font-weight: 500;
}

#categoria {
    font-size: 1rem;
    font-weight: 300;
    color: var(--text-color-light);
}

#preço {
    margin: .5rem 0 1rem;
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--text-color);
}

.produto img {
    width: 100%;
    height: 10rem;
    object-fit: contain;
    border-radius: 10px;
    margin: 1rem 0;
}

input[type=number] {
    text-align: center;
    width: 5rem;
    height: 3rem;
    padding: 1.8rem 1rem;
    font-family: var(--font);
    font-weight: 800;
    font-size:  1.3rem;
    background-color: var(--bg-color);
    border: none;
    border-radius: 10px;
}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;

  }

#comprar button {
    border: none;
    background-color: var(--main-color);
    padding: 1rem;
    border-radius: 10px;
    font-family: var(--font);
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
}

#comprar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}
</style>