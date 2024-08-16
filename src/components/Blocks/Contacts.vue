<template>

<div class="contacts">
   <p class="footer__title">Заказать по телефону</p>
   <p><a class="contacts__phone" href="tel:87780030353">8 778 003-03-53</a></p>
   <p><a class="contacts__email" href="info@domain.com">info@domain.com</a></p>
</div>

</template>

<script>

export default {

}

</script>

<style lang="scss">

.contacts {
   &__phone {
      font-weight: 700;
      font-size: 24px;
      color: #000;
   }

   &__email {
      font-weight: 400;
      font-size: 16px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: #DD2B1C;
   }
}

</style>