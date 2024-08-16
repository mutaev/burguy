<template>

<section class="food">
   <div class="food__bg">
      <img src="@/assets/images/food/food.jpg" alt="food">
   </div>
   <div class="food__inner container">
      <ul class="food__list">
         <li v-for="food in $options.foodList"><a :href="food.href">{{ food.title }}</a></li>
      </ul>
   </div>
</section>

</template>

<script>

const foodList = [
   {
      href: "#",
      title: "СЕНДВИЧИ"
   },{
      href: "#",
      title: "БУРГЕРЫ"
   },{
      href: "#",
      title: "ХОТ-ДОГИ"
   },{
      href: "#",
      title: "ДОНЕРЫ"
   },{
      href: "#",
      title: "КАРТОФЕЛЬ ФРИ"
   },{
      href: "#",
      title: "БЛИНЫ"
   }
]

export default {
   foodList
}

</script>

<style lang="scss">

.food {
   position: relative;
   overflow: hidden;

   &__bg {
      position: absolute;
      inset: 0;

      img {
         width: 100%;
         height: 100%;
         position: absolute;
         inset: 0;
         object-fit: cover;
         object-position: center;
      }
   }

   &__inner {
      min-height: 400px;
      position: relative;
   }

   &__list {
      position: absolute;
      bottom: 16px;
      left: 15px;
      right: 15px;
      z-index: 5;
      display: flex;
      background: #DD2B1C;
      border-radius: 100px;

      li {
         flex-grow: 1;
      }

      a {
         padding: 13px;
         display: block;
         font-weight: 500;
         font-size: 16px;
         text-align: center;
         color: #fff;
      }
   }
}

</style>
