<template>
  <section class="section section--menu">
    <div class="section__wrapper">
      <div class="section__header">
        <h2 class="section__title">Бургеры</h2>
      </div>
      <div class="section__content">
        <div class="menu">
          <div class="menu__inner">
            <ul class="menu__list">
              <MenuItem />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue';
</script>

<style>
.menu__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}

.menu__img img {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
}

.menu__price span {
  font-weight: 700;
  color: var(--accent);
}
</style>
