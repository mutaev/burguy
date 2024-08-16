<template>

   <section class="section section--menu">
      <div class="section__wrapper">
         <div class="section__header">
            <h2 class="section__title">{{ title }}</h2>
         </div>
         <div class="section__content">
            <div class="menu">
               <div class="menu__inner">
                  <ul class="menu__list">
                     <li class="menu__item" v-for="item in menu">
                        <div class="menu__img"><img :src="item.img" :alt="item.name"></div>
                        <div class="menu__info">
                           <h3 class="menu__name">{{ item.name }}</h3>
                           <div class="menu__text">
                              <p v-for="text in item.text">{{ text }}</p>
                           </div>
                           <div class="menu__bottom">
                              <p class="menu__price">от <span>{{ item.price }} ₸</span></p>
                              <a class="menu__btn btn" href="#" @click="addProduct">Выбрать</a>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>

</template>

<script>

export default {
   props: {
      title: {
         type: String,
         default: 'Наше меню',
         required: false
      },
      menu: {
         type: Array,
         required: true
      }
   },
   data() {
      return {
         basketMenu: [
            {
               name: '',
               img: '',
               price: '',
               products: ''
            }
         ]
      }
   },
   methods: {
      addProduct(e) {
         e.preventDefault();
         console.log(item.name);
      }
   }
}

</script>

<style>

.menu__list {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 32px;
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

.menu__img img {
   width: 100%;
   height: 100%;
   position: absolute;
   inset: 0;
   object-fit: cover;
   object-position: center;
}

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

.menu__price span {
   font-weight: 700;
   color: var(--accent);
}

</style>