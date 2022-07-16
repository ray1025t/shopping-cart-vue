<template>
  <main class="main__panel__container">
    <div class="main__title">
    <p>結帳</p>
  </div>
    <FormPane @get-Delivery-Fee="getDeliveryFee"/>
    <CartPanel :deliveryFee="deliveryFee" />
  </main>
</template>

<script>
import FormPane from './../components/FormPane.vue'
import CartPanel from './../components/CartPanel.vue'

export default {
  components: {
    FormPane,
    CartPanel,
  },
  data() {
    return {
      deliveryFee: 0
    }
  },
  methods: {
    getDeliveryFee(deliveryFee) {
      this.deliveryFee = deliveryFee
      console.log(this.deliveryFee)
    }
  }
}
</script>
