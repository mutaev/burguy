<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from '@/components/Header/HeaderLayout.vue'
import BasketAside from '@/components/Sections/BasketAside.vue'
import SectionMenu from '@/components/Sections/SectionMenu.vue'
import SectionFood from '@/components/Sections/SectionFood.vue'
import FooterLayout from '@/components/Footer/FooterLayout.vue'

const menu = [
  {
    id: 1,
    img: 'src/assets/images/menu/sandwich-01.png',
    name: 'Биффит',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
  {
    id: 2,
    img: 'src/assets/images/menu/sandwich-02.png',
    name: 'Биффит',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
  {
    id: 3,
    img: 'src/assets/images/menu/sandwich-03.png',
    name: 'Биффит',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
];

const menu2 = [
  {
    id: 1,
    img: 'src/assets/images/menu/burger-01.png',
    name: 'Бургер',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
  {
    id: 2,
    img: 'src/assets/images/menu/burger-02.png',
    name: 'Бургер',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
  {
    id: 3,
    img: 'src/assets/images/menu/burger-03.png',
    name: 'Бургер',
    text: ['Обжареный говяжий фарш, картофель фри, копчёный сыр, корейская капуста, всё заправлено соусом зажарено в своей лепёшке'],
    price: '390',
  },
];
</script>

<template>
  <HeaderLayout></HeaderLayout>

  <main>
    <SectionFood></SectionFood>

    <div class="layout">
      <div class="layout__inner container">
        <div class="layout__main">
          <SectionMenu title="Сендвичи" :menu="menu"></SectionMenu>
          <SectionMenu title="Бургеры" :menu="menu2"></SectionMenu>
        </div>
        <aside class="layout__aside">
          <BasketAside></BasketAside>
        </aside>
      </div>
    </div>

  </main>

  <FooterLayout></FooterLayout>

</template>

<style lang="scss">

</style>
