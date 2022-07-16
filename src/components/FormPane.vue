<template>  
     <div class="form__panel">
       <StepperPanel :nowStep="nowStep" />
    <form id="a-form">
      <div class="form__content">
        <div class="form__part" :class="{ 'd-none': nowStep !== 0}">
          <div class="form__part__title">
            <p>寄送地址</p>
          </div>
          <div class="form__group d-flex">
            <div class="form__row gender">
              <label for="">稱謂</label>
              <div class="form__select__wrapper">
                <select name="a-type" id="cust__gender" required v-model="fromData.gender">
                  <option value="" disabled>請選擇性別</option>
                  <option value="先生">先生</option>
                  <option value="小姐">小姐</option>
                </select>
              </div>
            </div>
            <div class="form__row name">
              <label for="">姓名</label>
              <input type="text" id="cust__name" placeholder="請輸入姓名" v-model="fromData.name">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row phone">
              <label for="">電話</label>
              <input type="text" id="cust__phone" placeholder="請輸入行動電話" oninput="value=value.replace(/[^\d]/g,'')"
              v-model="fromData.phone">
            </div>
            <div class="form__row Email"><label for="">Email</label>
              <input type="text" id="cust__email" placeholder="請輸入電子郵件" v-model="fromData.Email">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row county">
              <label for="">縣市</label>
              <div class="form__select__wrapper">
                <select name="a-type" id="cust__county" v-model="fromData.county">
                  <option value="" disabled>請選擇縣市</option>
                  <option value="基隆市">基隆市</option>
                  <option value="台北市">台北市</option>
                  <option value="新北市">新北市</option>
                  <option value="桃園縣">桃園縣</option>
                  <option value="新竹縣">新竹縣</option>
                  <option value="新竹市">新竹市</option>
                  <option value="苗栗縣">苗栗縣</option>
                  <option value="台中市">台中市</option>
                  <option value="彰化縣">彰化縣</option>
                  <option value="南投縣">南投縣</option>
                  <option value="雲林縣">雲林縣</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="嘉義市">嘉義市</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="屏東縣">屏東縣</option>
                  <option value="台東縣">台東縣</option>
                  <option value="花蓮驗">花蓮驗</option>
                  <option value="宜蘭縣">宜蘭縣</option>
                  <option value="澎湖縣">澎湖縣</option>
                  <option value="金門縣">金門縣</option>
                  <option value="連江縣">連江縣</option>
                </select>
              </div>
            </div>
            <div class="form__row address">
              <label for="">請輸入地址</label>
              <input type="text" id="cuts__address" placeholder="請輸入地址" v-model="fromData.address">
            </div>
          </div>
        </div>
        <div class="form__part" :class="{ 'd-none': nowStep !== 1}">
          <div class="form__part__title">
            <p>運送方式</p>
          </div>
          <div class="form__delivery__wrapper">
            <div class="delivery d-flex" >
              <div class="delivery--radio d-flex align-items-center justify-content-center">
                <input type="radio" name="tag-delivery" value = "0" class="standard"      
                v-model.number="fromData.deliveryFee"></div>
              <div class="delivery--info">
                <label for="">標準配送</label>
                <p>約 3 ~ 7 個工作天</p>
              </div>
              <div class="delivery--shipping">
                <span>免運</span>
              </div>
            </div>
            <div class="delivery d-flex">
              <div class="delivery--radio d-flex align-items-center justify-content-center">
                <input type="radio" name="tag-delivery" value = "500" class="dhl" 
                v-model.number="fromData.deliveryFee"></div>
                <!-- 為什麼用v-modelv-model.number="fromData.deliveryFee" 會先執行forDeliveryFee deliveryFee 才改變this.fromData.deliveryFee  -->
              <div class="delivery--info" >
                <label for="">DHL 貨運</label>
                <p>48 小時內送達</p>
              </div>
              <div class="delivery--shipping">
                <span> $500 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="form__part" :class="{ 'd-none': nowStep !== 2}">
          <div class="form__part__title">
            <p>付款資訊</p>
          </div>
          <div class="form__group">
            <div class="form__row cardHolder"><label for="">持卡人姓名</label>
              <input type="text" class="" id="cust__cardHolder" placeholder="John Doe"  v-model="fromData.cardHolder">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row cardNum"><label for="">卡號</label>
              <input type="text" id="cust__cardNum" inputmode="numeric" placeholder="1111 2222 3333 4444" oninput="value=value.replace(/[^\d]/g,'')"  v-model="fromData.cardNum">
            </div>
          </div>
          <div class="form__group d-flex">
            <div class="form__row date">
              <label for="">有效期限</label>
              <input type="text" id="cust__date" inputmode="numeric" placeholder="MM/YY" oninput="value=value.replace(/[^\d]/g,'')"
               v-model="fromData.cardDate">
            </div>
            <div class="form__row CVC"><label for="">CVC / CCV</label>
              <input type="text" id="cust__CVC" inputmode="numeric" placeholder="123" oninput="value=value.replace(/[^\d]/g,'')"
               v-model="fromData.cardCVC">
            </div>
          </div>

        </div>
      </div>
    </form>

       <div class="btn__panel" id="btn__control">
    <div class="btn__wrapper  " id="oneWrapper" >
      <button class="btn btn-prev" @click.prevent.stop="prevStep"  v-show="nowStep > 0">← 上一步</button>
      <button class="btn btn-next" @click.prevent.stop="nextStep" v-show="nowStep !== 2">下一步 →</button>
      <button class="btn btn-next" v-show="nowStep === 2" @click.prevent.stop="sendOrder" > 確認下單</button>
    </div>
  </div>
  </div>

  
</template>

<script>
const STORAGE_KEY = 'order-Info'
const dammyData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.fromData
import StepperPanel from './StepperPanel.vue'
export default {
  name: 'Form',
  components: {
    StepperPanel,
  },
  data() {
    return {
      nowStep: 0,
      fromData: {
        gender: 'Mr',
        name: '',
        phone: '',
        Email: '',
        county: '',
        address: '',
        delivery: '',
        deliveryFee: 0,
        cardHolder: '',
        cardNum: '',
        cardDate: '',
        cardCVC: '',
        totalPrice: 5298,
      },
    }
  },
  created() {
    this.fromData = dammyData
  },
  methods: {
    nextStep() {
      if(this.nowStep < 3) {
        this.nowStep = this.nowStep + 1
      }  
    },
    prevStep() {
      if(this.nowStep >= 0 ){
        this.nowStep = this.nowStep - 1
      }
    },
    sendOrder() {
      // console.log撰寫方式是否有誤 ?
      console.log(`
      {
        "gender": '${this.fromData.gender}',
        "name": '${this.fromData.name}',
        "phone": '${this.fromData.phone}',
        "Email": '${this.fromData.Email}',
        "county": '${this.fromData.county}',
        "address": '${this.fromData.address}',
        "delivery": '${this.fromData.delivery}',
        "deliveryFee": '${this.fromData.deliveryFee}',
        "cardHolder": '${this.fromData.cardHolder}',
        "cardNum": '${this.fromData.cardNum}',
        "cardDate": '${this.fromData.cardDate}',
        "cardCVC": '${this.fromData.cardCVC}',
        "totalPrice" : '${this.fromData.totalPrice}',
      }`
      )
      // alert 是否要改成modal做法 ?
      alert(`
      {
        "gender": '${this.fromData.gender}',
        "name": '${this.fromData.name}',
        "phone": '${this.fromData.phone}',
        "Email": '${this.fromData.Email}',
        "county": '${this.fromData.county}',
        "address": '${this.fromData.address}',
        "delivery": '${this.fromData.delivery}',
        "deliveryFee": '${this.fromData.deliveryFee}',
        "cardHolder": '${this.fromData.cardHolder}',
        "cardNum": '${this.fromData.cardNum}',
        "cardDate": '${this.fromData.cardDate}',
        "cardCVC": '${this.fromData.cardCVC}',
        "totalPrice" : '${this.fromData.totalPrice}',
      }`)
      this.fromData = {
        ...this.fromData,
        gender: 'Mr',
        name: '',
        phone: '',
        Email: '',
        county: '',
        address: '',
        delivery: '',
        deliveryFee: 0,
        cardHolder: '',
        cardNum: '',
        cardDate: '',
        cardCVC: '',
        totalPrice: 5298,
      }     
    },
      saveStroge() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fromData))
     }
    // forDeliveryFee() {
    //   console.log('forDeliveryFee')
    //   this.$emit('get-Delivery-Fee', this.fromData.deliveryFee)
    // },
  },
  watch: {
    fromData : {
      handler: function() {
         this.$emit('get-Delivery-Fee', this.fromData.deliveryFee),
         this.saveStroge()
      },
       deep: true,
     },
  },
}
</script>