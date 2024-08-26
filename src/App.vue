<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderLayout from '@/components/Header/HeaderLayout.vue'
import FooterLayout from '@/components/Footer/FooterLayout.vue'
</script>

<template>
  <div class="wrapper">
    <HeaderLayout></HeaderLayout>

    <main>
      <router-view></router-view>
    </main>

    <FooterLayout></FooterLayout>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
