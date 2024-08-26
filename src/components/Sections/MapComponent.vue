<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import customIcon from '@/assets/images/icons/mark.svg';

declare global {
  interface Window {
    ymaps: any;
  }

  const ymaps: any;
}

export default defineComponent({
  name: 'MapComponent',
  setup() {
    const mapContainer = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (!mapContainer.value) return;

      const loadMap = () => {
        ymaps.ready(() => {
          const map = new ymaps.Map(mapContainer.value!, {
            center: [52.27280212109234, 76.95370762481826],
            zoom: 14,
            controls: []
          });

          const addPlacemark = (coords: number[]) => {
            const placemark = new ymaps.Placemark(coords, {}, {
              iconLayout: 'default#image',
              iconImageHref: customIcon,
              iconImageSize: [30, 42],
              iconImageOffset: [0, 0]
            });
            map.geoObjects.add(placemark);
          };

          const coordinates = [
            [52.270314217997075, 76.97009860410822],
            [52.27532670653949, 76.94440069701092],
            [52.27713466582127, 76.9885762917895]
          ];

          coordinates.forEach(addPlacemark);
        });
      };

      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          if (window.ymaps) {
            loadMap();
          } else {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?apikey=aae1982a-3cb3-4916-b761-f2a9c2608346&lang=ru_RU';
            script.async = true;
            script.onload = loadMap;
            document.head.appendChild(script);
          }
          observer.disconnect();
        }
      });

      observer.observe(mapContainer.value);
    });

    return { mapContainer };
  }
});
</script>

<template>
  <div id="map" class="map" ref="mapContainer"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 480px;
}
</style>