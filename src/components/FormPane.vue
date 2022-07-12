<template>
  <div class="form__panel">
    <form id="a-form">
      <div class="form__content">
        <div class="form__part">
          <div class="form__part__title">
            <p>寄送地址</p>
          </div>
          <div class="form__group d-flex">
            <div class="form__row gender">
              <label for="">稱謂</label>
              <div class="form__select__wrapper">
                <select name="a-type" id="cust__gender" required>
                  <option value="" disabled>請選擇性別</option>
                  <option value="">先生</option>
                  <option value="">小姐</option>
                </select>
              </div>
            </div>
            <div class="form__row name">
              <label for="">姓名</label>
              <input type="text" id="cust__name" placeholder="請輸入姓名">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row phone">
              <label for="">電話</label>
              <input type="text" id="cust__phone" placeholder="請輸入行動電話" oninput="value=value.replace(/[^\d]/g,'')">
            </div>
            <div class="form__row Email"><label for="">Email</label>
              <input type="text" id="cust__email" placeholder="請輸入電子郵件">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row county">
              <label for="">縣市</label>
              <div class="form__select__wrapper">
                <select name="a-type" id="cust__county">
                  <option value="" disabled>請選擇縣市</option>
                  <option value="">基隆市</option>
                  <option value="">台北市</option>
                  <option value="">新北市</option>
                  <option value="">桃園縣</option>
                  <option value="">新竹縣</option>
                  <option value="">新竹市</option>
                  <option value="">苗栗縣</option>
                  <option value="">台中市</option>
                  <option value="">彰化縣</option>
                  <option value="">南投縣</option>
                  <option value="">雲林縣</option>
                  <option value="">嘉義縣</option>
                  <option value="">嘉義市</option>
                  <option value="">台南市</option>
                  <option value="">高雄市</option>
                  <option value="">屏東縣</option>
                  <option value="">台東縣</option>
                  <option value="">花蓮驗</option>
                  <option value="">宜蘭縣</option>
                  <option value="">澎湖縣</option>
                  <option value="">金門縣</option>
                  <option value="">連江縣</option>
                </select>
              </div>
            </div>
            <div class="form__row address">
              <label for="">請輸入地址</label>
              <input type="text" id="cuts__address" placeholder="請輸入地址">
            </div>
          </div>
        </div>
        <div class="form__part d-none">
          <div class="form__part__title">
            <p>運送方式</p>
          </div>
          <div class="form__delivery__wrapper">
            <div class="delivery d-flex">
              <div class="delivery--radio d-flex align-items-center justify-content-center"><input type="radio" name="tag-delivery" value="standard" class="standard" checked></div>
              <div class="delivery--info">
                <label for="">標準配送</label>
                <p>約 3 ~ 7 個工作天</p>
              </div>
              <div class="delivery--shipping">
                <span>免運</span>
              </div>
            </div>
            <div class="delivery d-flex">
              <div class="delivery--radio d-flex align-items-center justify-content-center"><input type="radio" name="tag-delivery" value="dhl" class="dhl"></div>
              <div class="delivery--info">
                <label for="">DHL 貨運</label>
                <p>48 小時內送達</p>
              </div>
              <div class="delivery--shipping">
                <span> $500 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="form__part d-none">
          <div class="form__part__title">
            <p>付款資訊</p>
          </div>
          <div class="form__group">
            <div class="form__row cardHolder"><label for="">持卡人姓名</label>
              <input type="text" class="" id="cust__cardHolder" placeholder="John Doe">
            </div>
          </div>
          <div class="form__group">
            <div class="form__row cardNum"><label for="">卡號</label>
              <input type="text" id="cust__cardNum" inputmode="numeric" placeholder="1111 2222 3333 4444" oninput="value=value.replace(/[^\d]/g,'')">
            </div>
          </div>
          <div class="form__group d-flex">
            <div class="form__row date">
              <label for="">有效期限</label>
              <input type="text" id="cust__date" inputmode="numeric" placeholder="MM/YY" oninput="value=value.replace(/[^\d]/g,'')">
            </div>
            <div class="form__row CVC"><label for="">CVC / CCV</label>
              <input type="text" id="cust__CVC" inputmode="numeric" placeholder="123" oninput="value=value.replace(/[^\d]/g,'')">
            </div>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import './../styles/main.scss';
</style>