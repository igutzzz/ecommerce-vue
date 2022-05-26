<template>
    <div class="navbar">
        <h1>Loja</h1>
        <ul id="nav_menu">
            <li>Categorias</li>
            <li>Login</li>
            <li><font-awesome-icon icon="cart-shopping" /></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    #nav_menu {
        display: flex;
        align-items: center;
    }

    #nav_menu li {
        list-style-type: none;
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--text-color-light);
    }
</style>