<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderLayout from '@/components/Header/HeaderLayout.vue';
import BasketAside from '@/components/Sections/BasketAside.vue';
import SectionMenu from '@/components/Sections/SectionMenu.vue';
import SectionFood from '@/components/Sections/SectionFood.vue';
import FooterLayout from '@/components/Footer/FooterLayout.vue';
</script>

<template>
  <HeaderLayout></HeaderLayout>

  <main>
    <SectionFood></SectionFood>

    <div class="layout">
      <div class="layout__inner container">
        <div class="layout__main">
          <SectionMenu></SectionMenu>
        </div>
        <aside class="layout__aside">
          <BasketAside></BasketAside>
        </aside>
      </div>
    </div>
  </main>

  <FooterLayout></FooterLayout>
</template>

<style lang="scss"></style>
