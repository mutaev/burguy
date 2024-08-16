<template>

   <nav class="header__nav nav">
      <ul class="nav__list">
         <li class="nav__item" v-for="item in $options.navList">
            <a class="nav__link" :href="item.href">{{ item.title }}</a>
         </li>
      </ul>
   </nav>

</template>

<script>

const navList = [
   {
      title: "Выбрать еду",
      href: "444"
   },{
      title: "Доставка и оплата",
      href: "#"
   },{
      title: "О нас",
      href: "#"
   },{
      title: "Франшиза",
      href: "#"
   }
]

export default {
   navList
}

</script>

<style>

.nav__list {
   display: flex;
}

.nav__list > *:not(:last-child) {
   margin-right: 48px;
}

.nav__link {
   font-weight: 500;
   font-size: 16px;
   text-align: center;
}

</style>