<script setup>
import api from '@/services/api.js';
import {onMounted, ref } from 'vue';
defineOptions({ name: 'Contato' });

const contatos = ref(null);

onMounted(() => {
    api.get('contacts.json')
        .then(response => {
            contatos.value = response.data;
            console.log(contatos.value); 
    })
});
 
</script>

<template>
    <main>
        <section class="container">
            <h1>Contatos</h1>

            <section class="contacts">
                <div class="contact" v-for="(contato, index) in contatos" :key="index">
                    <div class="contact-title">
                        <h2>{{ contato.title }}</h2>
                    </div>
                    <a :href="contato.link" target="_blank">
                        {{ contato.label }}
                    </a>
            </div>

            </section>
            
        </section>
    </main>
</template>

<style scoped>
main{
    align-items: center;
}

.contacts {
    margin-bottom: 20px;
    color: var(--color-text-dark);
}

.contact-title {
    font-weigh:600;
    font-size: 18px;
}

.contact a {
    color: var(--color-text-dark);
}

.contact {
    margin-bottom: 10px;
}

</style>