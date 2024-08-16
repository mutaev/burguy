<template>

<ul class="politics">
   <li v-for="link in $options.politics"><a :href="link.href">{{ link.title }}</a></li>
</ul>

</template>

<script>

const politics = [
   {
      href: "#",
      title: "Правовая информация"
   },
   {
      href: "#",
      title: "Помощь"
   }
]

export default {
   politics
}

</script>

<style lang="scss">

.politics {
   display: flex;
   align-items: flex-start;

   & > *:not(:last-child) {
      margin-right: 40px;
   }
}

</style>