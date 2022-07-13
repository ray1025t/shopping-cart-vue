<template>
  <main class="main__panel__container">
    <div class="main__title">
    <p>結帳</p>
  </div>
    <FormPane />
    <CartPanel />
  </main>
</template>

<script>
import FormPane from './../components/FormPane.vue'
import CartPanel from './../components/CartPanel.vue'

export default {
  components: {
    FormPane,
    CartPanel,
  }
}
</script>
