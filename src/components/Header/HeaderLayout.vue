<template>
  <header class="header">
    <div class="header__inner container">
      <LogoElement class="header__logo"></LogoElement>
      <div class="header__location location">
        <a class="location__current" href="#">Павлодар</a>
      </div>
      <HeaderNav></HeaderNav>
      <div class="header__manage">
        <Phone class="header__phone"></Phone>
        <a class="header__login" href="#"><span class="header__login-text">Войти</span> <span
            class="header__login-icon"><img src="@/assets/images/icons/login.svg" alt="иконка" width="24"
              height="24"></span></a>
        <a class="header__basket" href="#">
          <img src="@/assets/images/icons/cart.svg" alt="корзина" width="24" height="24">
          <span class="header__basket-count">2</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import LogoElement from "@/components/Elements/LogoElement.vue";
import Phone from "@/components/Elements/Phone.vue";
import HeaderNav from "@/components/Header/HeaderNav.vue";

export default {
  components: {
    LogoElement,
    Phone,
    HeaderNav,
  },
}

</script>

<style lang="scss">
.header {
  padding: 19px 0;
  background: #fff;

  &__inner {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 40px;
  }

  &__nav {
    margin: 0 auto;
  }

  &__manage {
    margin-left: auto;
    display: flex;
    align-items: center;

    &>* {
      margin-left: 24px;
    }
  }

  &__login {
    border-radius: 100px;
    min-height: 38px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #DD2B1C;
    color: #fff;

    &-text {
      padding: 0 17px;
    }

    &-icon {
      width: 38px;
      min-width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #BC2518;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__basket {
    position: relative;

    &-count {
      position: absolute;
      right: -4px;
      top: -2px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      color: #fff;
      background: #BC2518;
      font-weight: 500;
      font-size: 8px;
    }
  }
}
</style>
