<template>
  <footer id="footer" class="d-none">
    <div class="footer__brand d-flex">
      <img src="https://i.imgur.com/in96d7T.jpg" alt="" />
    </div>
    <div class="footer__service d-flex flex-column">
      <div class="service__title title">
        <h3>客戶服務</h3>
      </div>
      <div class="service__wrapper wrapper">
        <div class="service__direction"><a href="#">運送說明</a></div>
        <div class="service__return"><a href="#">退換貨相關</a></div>
        <div class="service__payment"><a href="#">付款資訊</a></div>
        <div class="service__FAQ"><a href="#">FAQ</a></div>
      </div>
    </div>
    <div class="footer__about d-flex flex-column">
      <div class="about__title title">
        <h3>關於我們</h3>
      </div>
      <div class="about__wrapper wrapper">
        <div class="about__story"><a href="#">品牌故事</a></div>
        <div class="about__media"><a href="#">媒體聯繫</a></div>
        <div class="about__pressKit"><a href="Press Kit"></a></div>
      </div>
    </div>
    <div class="footer__info d-flex flex-column">
      <div class="info__title title">
        <h3>資訊</h3>
      </div>
      <div class="info__wrapper wrapper">
        <div class="info__privacyPolicy"><a href="#">隱私權政策</a></div>
        <div class="info__cookie"><a href="#">Cookie</a></div>
        <div class="info__gdpr"><a href="#">GDPR</a></div>
      </div>
    </div>
    <div class="footer__socialMedia d-flex flex-column">
      <div class="socialMedia__title title">
        <h3>追蹤 ALPHA Shop</h3>
      </div>
      <div class="socialMedia__wrapper wrapper">
        <div class="socialMedia__phone"><span>+886 02123-45678</span></div>
        <div class="socialMedia__icons d-flex justify-content-between w-50">
          <div class="media__icon">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          <div class="media__icon">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="media__icon">
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./../styles/sumCss.scss";
</style>