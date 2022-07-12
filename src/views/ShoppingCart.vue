<template>
  <main class="main__panel__container">
    <div class="main__title">
    <p>結帳</p>
  </div>
    <StepperPanel />
    <FormPane />
    <ShoppingCartPanel />
    <BtnPanel />
  </main>
</template>

<script>
import StepperPanel from './../components/StepperPanel.vue'
import FormPane from './../components/FormPane.vue'
import ShoppingCartPanel from './../components/ShoppingCartPanel.vue'
import BtnPanel from  './../components/BtnPanel.vue'
export default {
  components: {
    StepperPanel,
    FormPane,
    ShoppingCartPanel,
    BtnPanel,
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/sumCss.scss';
</style>