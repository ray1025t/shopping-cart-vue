<template>
  <div class="stepper__panel pm-5" id="stepper__control">
    <div class="stepper__wrapper">
      <div class="step one" :class="{active: nowStep === 0, checked: nowStep > 0}">
        <div class="step--circle "></div>
        <span class="step--line line--one"></span>
        <div class="step--label">寄送地址</div>
      </div>
      <div class="step" :class="{active: nowStep === 1, checked: nowStep > 1}">
        <div class="step--circle"></div>
        <span class="step--line line--two"></span>
        <div class="step--label">運送方式</div>
      </div>
      <div class="step three" :class="{active: nowStep === 2, checked: nowStep > 2}">
        <div class="step--circle"></div>

        <div class="step--label">付款資訊</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Stepper',
  props: {
    nowStep: {
      type: Number,
      default: 0
    }
  }
}
</script>