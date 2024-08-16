<template>

   <footer class="footer">
      <div class="footer__inner">
         <div class="footer__top container">
            <Logo></Logo>
            <FooterNav></FooterNav>
            <Socials class="footer__socials"></Socials>
            <Contacts class="footer__contacts"></Contacts>
         </div>

         <div class="footer__bottom">
            <div class="footer__bottom-inner container">
               <Politics class="footer__politics"></Politics>
               <span>|</span>
               <p>BURЖУЙ © 2020</p>
            </div>
         </div>
      </div>
   </footer>

</template>

<script>

import Logo from "@/components/Elements/Logo.vue";
import Socials from "@/components/Blocks/Socials.vue";
import Contacts from "@/components/Blocks/Contacts.vue";
import Politics from "@/components/Blocks/Politics.vue";
import FooterNav from "@/components/Footer/FooterNav.vue";

export default {
   components: {
      Logo,
      Socials,
      Contacts,
      Politics,
      FooterNav
   }
}

</script>

<style lang="scss">

.footer {
   background: #fff;

   &__top {
      padding-top: 32px;
      padding-bottom: 32px;
      display: flex;
      align-items: flex-start;
   }

   &__title {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
   }

   &__bottom {
      padding: 6px 0;
      background: rgba(0, 0, 0, 0.05);
      font-weight: 400;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.75);

      &-inner {
         display: flex;
         align-items: center;
         justify-content: center;

         & > *:not(:last-child) {
            margin-right: 40px;
         }
      }
   }

   &__socials {
      margin-right: 60px;
   }
}

</style>