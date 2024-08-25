<script lang="ts">
import { defineComponent } from 'vue';
import MapComponent from '@/components/Sections/MapComponent.vue';

export default defineComponent({
  name: 'MapView',
  components: {
    MapComponent
  }
});
</script>

<template>
  <div class="map-page">
    <div class="map-page__inner container">
      <MapComponent />
      <div class="map-page__list">
        <h2 class="map-page__title section__title">Заголовок</h2>
        <div class="map-page__text">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
          осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
          домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст
          более привлекательным и живым для визуально-слухового восприятия.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.map-page {

  // .map-page__inner
  &__inner {
    padding-top: 48px;
  }

  // .map-page__list
  &__list {
    padding-top: 48px;
  }

  // .map-page__text
  &__text {
    padding-top: 12px;
  }
}

/* Удаление иконок на карте */
[class*="copyrights-pane"] {
  display: none !important;
}
</style>