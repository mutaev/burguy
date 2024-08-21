<script setup lang="ts">
import { ref } from 'vue';
import { getMenu } from '@/api/rest/menu.ts';

const items = ref([]);

const loadMenu = async () => {
  try {
    const res = await getMenu();
    items.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

loadMenu();
</script>

<template>
  <li class="menu__item" v-for="item in items">
    <div class="menu__img"><img :src="item.img" :alt="item.name" /></div>
    <div class="menu__info">
      <h3 class="menu__name">{{ item.name }}</h3>
      <div class="menu__text">
        <p>{{ item.text }}</p>
      </div>
      <div class="menu__bottom">
        <p class="menu__price">
          от <span>{{ item.price }} ₸</span>
        </p>
        <a class="menu__btn btn" href="#" @click="addProduct">Выбрать</a>
      </div>
    </div>
  </li>
</template>

<style lang="scss">
.menu__info {
  display: flex;
  flex-direction: column;
}

.menu__name {
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 20px;
}

.menu__text {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.45);
}

.menu__bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu__price {
  font-size: 24px;
}

.menu__item {
  padding: 16px;
  background: #fff;
}

.menu__img {
  margin-bottom: 12px;
  position: relative;
  padding-bottom: 66.5%;
}
</style>
