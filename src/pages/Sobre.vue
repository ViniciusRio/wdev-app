<script setup>
import api from '@/services/api.js';
import {onMounted, ref } from 'vue';
defineOptions({ name: 'Sobre' });

const sobre = ref('');

onMounted(() => {
    api.get('about.json')
        .then(response => {
            sobre.value = response.data.about; 
    })
});
 
</script>

<template>
    <main>
        <section class="container">
            <h1>Sobre</h1>

            <div class="about">
                <p v-html="sobre"></p>
            </div>
        </section>
    </main>
</template>

<style scoped>
main{
    align-items: center;
}

.about {
    color: var(--color-text-dark);
    margin-bottom: 20px;
}

</style>