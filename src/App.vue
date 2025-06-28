<script setup>

import './styles/global.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
      <Header />
      <RouterView />
      <Footer />
</template>

<style scoped>
</style>
