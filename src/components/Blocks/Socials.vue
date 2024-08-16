<template>

<div class="socials">
   <p class="footer__title">Мы в соцсетях</p>
   <ul class="socials__list">
      <li v-for="social in $options.socials"><a :href="social.href"><img :src="social.icon" :alt="social.title" width="24" height="24" :aria-label="social.title"></a></li>
   </ul>
</div>

</template>

<script>

const socials = [
   {
      title: "vk",
      icon: "src/assets/images/socials/vk.svg",
      href: "#"
   },
   {
      title: "instagram",
      icon: "src/assets/images/socials/ig.svg",
      href: "#"
   }
]

export default {
   socials
}

</script>


<style lang="scss">

.socials {
   &__list {
      display: flex;
      align-items: center;

      & > *:not(:last-child) {
         margin-right: 20px;
      }
   }
}

</style>