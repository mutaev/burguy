<template>

   <section class="section section--basket">
      <div class="section__wrapper">
         <div class="section__header">
            <h2 class="section__title">Корзина</h2>
         </div>
         <div class="section__content">
            <div class="basket">
               <div class="basket__empty" v-if="0">
                  <a class="basket__link" href="#"><img src="@/assets/images/icons/cart.svg" alt="корзина" width="24" height="24"></a>
                  <img src="@/assets/images/basket/fast-food.svg" alt="картинка" width="120" height="120">
                  <p class="basket__empty-text">Вы ещё не добавили <br> ни одного товара</p>
               </div>
               <div class="basket__main basket__main--full" v-else>
                  <div class="basket__manage">
                     <div class="basket__top">
                        <div class="basket__left">Товаров: <span class="basket__left-amount">2</span></div>
                        <a class="basket__link" href="#"><img src="@/assets/images/icons/cart.svg" alt="корзина" width="24" height="24"></a>
                     </div>
                     <div class="basket__menu">
                        <ul class="basket__menu-list">
                           <li class="basket__menu-item">
                              <div class="basket__menu-top">
                                 <div class="basket__menu-img">
                                    <img src="@/assets/images/menu/sandwich-02.png" alt="Биффит маленький">
                                 </div>
                                 <div class="basket__menu-info">
                                    <p class="basket__menu-name">Биффит маленький</p>
                                    <p class="basket__menu-products">Сыр, перец, соус 1000 островов, соус Мексиканский</p>
                                 </div>
                              </div>
                              <div class="basket__menu-bottom">
                                 <div class="basket__menu-buttons">
                                    <button class="basket__menu-button">-</button>
                                    <span class="basket__menu-count">2</span>
                                    <button class="basket__menu-button">+</button>
                                 </div>
                                 <p class="basket__menu-price">390 ₸</p>
                                 <button class="basket__menu-delete"><img src="@/assets/images/icons/close.svg" alt="удалить товар"></button>
                              </div>
                           </li>
                           <li class="basket__menu-item">
                              <div class="basket__menu-top">
                                 <div class="basket__menu-img">
                                    <img src="@/assets/images/menu/burger-03.png" alt="Бургер">
                                 </div>
                                 <div class="basket__menu-info">
                                    <p class="basket__menu-name">Бургер</p>
                                    <p class="basket__menu-products">Кетчуп, майонез</p>
                                 </div>
                              </div>
                              <div class="basket__menu-bottom">
                                 <div class="basket__menu-buttons">
                                    <button class="basket__menu-button">-</button>
                                    <span class="basket__menu-count">2</span>
                                    <button class="basket__menu-button">+</button>
                                 </div>
                                 <p class="basket__menu-price">390 ₸</p>
                                 <button class="basket__menu-delete"><img src="@/assets/images/icons/close.svg" alt="удалить товар"></button>
                              </div>
                           </li>
                        </ul>
                        <div class="basket__total">
                           <p class="basket__total-text">Итого:</p>
                           <p class="basket__total-price">780 ₸</p>
                        </div>
                     </div>
                     <div class="basket__footer">
                        <a href="#" class="btn">Заказать</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   </section>

</template>

<script>

export default {
   
}

</script>

<style lang="scss">

.basket {
   padding: 20px 20px 16px;
   width: 100%;
   max-width: 384px;
   background: #fff;

   &__top {
      margin-bottom: 8px;
      padding-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
   }

   &__left {
      font-weight: 400;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.45);

      &-amount {
         font-weight: 500;
         font-size: 20px;
         color: #DD2B1C;
      }
   }

   &__menu {
      margin-bottom: 24px;

      &-item {
         padding-bottom: 8px;
         margin-bottom: 8px;
         border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      }

      &-top {
         margin-bottom: 12px;
         display: flex;
         align-items: flex-start;
      }

      &-img {
         width: 64px;
         margin-right: 10px;
         flex-shrink: 0;
      }

      &-name {
         margin-bottom: 5px;
         font-weight: 500;
         font-size: 16px;
         color: rgba(0, 0, 0, 0.75);
      }

      &-products {
         font-weight: 400;
         font-size: 12px;
         color: rgba(0, 0, 0, 0.45);
      }

      &-bottom {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }

      &-buttons {
         display: flex;
         align-items: center;
      }

      &-button {
         display: inline-flex;
         justify-content: center;
         align-items: start;
         width: 20px;
         height: 20px;
         border-radius: 50%;
         border: 1px solid rgba(0, 0, 0, 0.15);
         color: #DD2B1C;
         font-weight: 500;
         font-size: 18px;
      }

      &-count {
         min-width: 40px;
         font-weight: 400;
         font-size: 16px;
         text-align: center;
         color: rgba(0, 0, 0, 0.75);
      }

      &-price {
         font-weight: 500;
         font-size: 20px;
         text-align: center;
         color: #DD2B1C;
      }

      &-delete {
         width: 12px;
         height: 12px;
         display: inline-flex;
         justify-content: center;
         align-items: center;
      }
   }

   &__total {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-text {
         font-weight: 400;
         font-size: 16px;
         color: rgba(0, 0, 0, 0.45);
      }

      &-price {
         font-weight: 500;
         font-size: 20px;
         text-align: right;
         color: #DD2B1C;
      }
   }

   &__footer {
      display: flex;
      justify-content: center;
   }

   &__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: rgba(0, 0, 0, 0.45);

      &-text {
         width: 100%;
         max-width: 272px;
      }
   }
}

</style>