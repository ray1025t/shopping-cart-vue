<template>
  <div class="shoppingCart__panel">
    <div class="shoppingCart__title">購物籃</div>
    <div class="shoppingCart__product__list">
      <div class="product__item d-flex" v-for="cartProduct in cartProducts" :key="cartProduct.id">
        <div class="product__img">
          <img :src="cartProduct.image" alt="#">
        </div>

        <div class="product__info d-flex flex-column align-items-end">
          <div class="product__info--name">{{cartProduct.name}}</div>
          <div class="product__info--quantity d-flex">
            <div class="quantity__minus cursor-pointer" @click="minusQty(cartProduct.id)">-</div>
            <div class="quantity__num">{{cartProduct.qty}}</div>
            <div class="quantity__plus cursor-pointer" @click="plusQty(cartProduct.id)">+</div>
          </div>
          <!-- 如何把{{cartProduct.price * cartProduct.qty}} 這包帶進computed再用filter加上 .toLocaleString()  -->
          <div class="product__info--price" id="product--1">$ {{cartProduct.price * cartProduct.qty }}</div>
        </div>
      </div>
  
    </div>
    <div class="shoppingCart__sum__list">
      <div class="sum__item d-flex justify-content-between">
        <div class="sum--total cursor-default">運費</div>
        <div class="sum--money" id="delivery-price">{{deliveryFee | deliveryInfo}}</div>
      </div>
      <div class="sum__item d-flex justify-content-between">
        <div class="sum--total ">小計</div>
        <div class="sum--money" id="total-price">$ {{getTotalPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>

const dammyData = {
  'cartProducts':  [
    {
        'id': '1',
        'name': '刷色直筒牛仔褲',
        'image': 'https://i.imgur.com/WvPuB00.jpg',
        'price': 3999,
        'qty': 1
     },
    {
        'id': '2',
        'name': '破壞補丁修身牛仔褲',
        'image': 'https://i.imgur.com/eTHHiK4.jpg',
        'price': 1299,
        'qty': 1  
    }
  ]    
}


export default {
  name: 'Cart',
  props: {
    deliveryFee: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      cartProducts: [],
      totalPrice: 5298,
    }
  },
  methods: {
    fetchProduct() {
      this.cartProducts = dammyData.cartProducts 
    },
    plusQty(productId) {
      this.cartProducts.map(product =>  {
        if(product.id === productId) {
        product.qty += 1
        this.totalPrice += product.price 
      }
      })      
    },
    minusQty(productId) {
      this.cartProducts.map(product =>  {
        if(product.id === productId && product.qty > 1) {
        product.qty -= 1
         this.totalPrice -= product.price
        }
      })      
    },
  },
  created() {
    this.fetchProduct()
  },
  computed: {
    // computed無法帶入參數 ? 那如何將cartProduct帶入，更新單一產品的價格 qty * price
    subtotal() {
    return this.cartProducts[0].price * this.cartProducts[0].qty
    },
    getTotalPrice() {
      return (this.totalPrice + this.deliveryFee).toLocaleString()
    }
  },
  filters: {
    deliveryInfo(deliveryFee) {
      return deliveryFee === 0 ? '免運' : '$ 500'
    }
  },
}
</script>

