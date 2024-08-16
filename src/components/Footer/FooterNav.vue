<template>

<nav class="footer__nav">
   <ul class="footer__nav-list">
      <li v-for="link in $options.footerNav"><a :href="link.href">{{ link.title }}</a></li>
   </ul>
</nav>

</template>

<script>

const footerNav = [
   {
      href: "#",
      title: "О нас"
   },{
      href: "#",
      title: "Поставщикам"
   },{
      href: "#",
      title: "Франшиза"
   },{
      href: "#",
      title: "Вакансии"
   },{
      href: "#",
      title: "Предложить место"
   },
]

export default {
   footerNav
}

</script>

<style lang="scss">

.footer {
   &__nav {
      margin: 0 auto;
      font-weight: 400;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.75);

      &-list {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 12px 50px;
      }
   }
}

</style>