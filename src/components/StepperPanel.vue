<template>
  <div class="stepper__panel " id="stepper__control">
    <div class="stepper__wrapper">
      <div class="step one active">
        <div class="step--circle"></div>
        <span class="step--line line--one"></span>
        <div class="step--label">寄送地址</div>
      </div>
      <div class="step ">
        <div class="step--circle"></div>
        <span class="step--line line--two"></span>
        <div class="step--label">運送方式</div>
      </div>
      <div class="step three ">
        <div class="step--circle"></div>

        <div class="step--label">付款資訊</div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import './../styles/main.scss';
</style>