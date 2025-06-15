<script setup>
import { ref } from 'vue'
defineOptions({ name: 'Header' })

const menuActive = ref(true)
</script>
<template>
    <header>
        <nav class="container">
            <a href="/">
                <img id="logo" alt="" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg">
            </a>

            <img id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Menu mobile"/>
        
            <div id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class="{ active: menuActive }">
                <img id="menu-logo" alt="" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg">

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Vídeos</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
}

nav {
    display: flex;
    justify-content: space-between;

}

#logo {
    width: 130px;
}
#menu-button {
    width: 30px;
}
#menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
}

#menu-items {
    display: none;
    flex-direction: column;
    align-items: center;
    position:fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
}
#menu-items.active {
    display: flex;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.8;
}

ul {
    list-style: none;
    text-align: center;
}
ul li {
    margin: 20px 0px
}
ul li a {
    color: var(--color-text-light);
}
</style>