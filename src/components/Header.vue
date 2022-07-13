<template>
  <header>
  <nav class="nav__container container">
    <input type="checkbox" class="nav__toggle" id="nav__toggle">
    <label for="nav__toggle" class="nav__toggle--label">
      <span class="nav__hamburgur"></span>
    </label>
    <div class="nav__brand">
    </div>

    <div class="nav__menu">
      <div class="nav__list">
        <div class="nav__item">
          <a href="#" class="nav__item--link">男款</a>
        </div>
        <div class="nav__item">
          <a href="#" class="nav__item--link">女款</a>
        </div>
        <div class="nav__item">
          <a href="#" class="nav__item--link">最新消息</a>
        </div>
        <div class="nav__item">
          <a href="#" class="nav__item--link">客製商品</a>
        </div>
        <div class="nav__item">
          <a href="#" class="nav__item--link">聯絡我們</a>
        </div>
      </div>
      <div class="nav__brand--logo">
      </div>
      <div class="nav__icons">
        <div class="nav__icon" id="search__icon"></div>
        <div class="nav__icon" id="cart__icon"></div>
        <div class="nav__icon" id="dark__icon">
          <!--           <img src="https://imgur.com/BSlRwfP.jpg" alt=""></a> -->
          <label for="darkMode__toggle" class="nav__icon nav__darkMode__label" id="dark__icon"><input type="checkbox" class="darkMode__input" id="darkMode__toggle"></label>

        </div>
      </div>
    </div>

  </nav>
</header>
</template>



