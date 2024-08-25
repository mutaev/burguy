<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderLayout from '@/components/Header/HeaderLayout.vue'
import FooterLayout from '@/components/Footer/FooterLayout.vue'
</script>

<template>
  <HeaderLayout></HeaderLayout>

  <main>
    <router-view></router-view>
  </main>

  <FooterLayout></FooterLayout>
</template>

<style lang="scss"></style>
