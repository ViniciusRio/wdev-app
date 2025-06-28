<script setup>
import api from '@/services/api.js';
import { onMounted, ref } from 'vue';

defineOptions({ name: 'Footer' });

const socialLinks = ref(null);

onMounted(() => {
    api.get('/social-links.json')
        .then(response => {
            socialLinks.value = response.data;
    });
});

</script>

<template>
    <footer>
        <a v-for="(socialLink, index) in socialLinks" :key="index" class="socialLink" :href="socialLink.link" target="_blank">
            <img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label" />
        </a>
    </footer>
</template>
<style scopoed>

    footer {
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .socialLink {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--color-text-light);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px
       }

    .socialLink img {
        width: 20px;
    }
</style>