<template>
  <div class="shoppingCart__panel">
    <div class="shoppingCart__title">購物籃</div>
    <div class="shoppingCart__product__list">
      <div class="product__item d-flex" id="0">
        <div class="product__img">
          <img src="https://i.imgur.com/WvPuB00.jpg" alt="#">
        </div>
        <div class="product__info d-flex flex-column align-items-end">
          <div class="product__info--name">破壞補丁修身牛仔褲</div>
          <div class="product__info--quantity d-flex">
            <div class="quantity__minus cursor-pointer">-</div>
            <div class="quantity__num">1</div>
            <div class="quantity__plus cursor-pointer">+</div>
          </div>
          <div class="product__info--price" id="product--1">$3999</div>
        </div>
      </div>
      <div class="product__item d-flex" id="1">
        <div class="product__img">
          <img src="https://i.imgur.com/eTHHiK4.jpg" alt="#">
        </div>
        <div class="product__info d-flex flex-column align-items-end">
          <div class="product__info--name">刷色直筒牛仔褲</div>
          <div class="product__info--quantity d-flex">
            <div class="quantity__minus cursor-pointer">-</div>
            <div class="quantity__num">1</div>
            <div class="quantity__plus cursor-pointer">+</div>
          </div>
          <div class="product__info--price" id="product--2">$1299</div>
        </div>
      </div>
    </div>
    <div class="shoppingCart__sum__list">
      <div class="sum__item d-flex justify-content-between">
        <div class="sum--total cursor-default">運費</div>
        <div class="sum--money" id="delivery-price">免運</div>
      </div>
      <div class="sum__item d-flex justify-content-between">
        <div class="sum--total ">小計</div>
        <div class="sum--money" id="total-price">$5298</div>
      </div>
    </div>
  </div>
</template>

