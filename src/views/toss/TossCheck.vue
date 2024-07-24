<template>
  <section class="">
    <div class="flex w-full" style="background-color:#F2F4F8">
      <div class="px-[10%] pt-[10%]">
        <h1 class="text-[20px] font-semibold">결제방법</h1>
      </div>
    </div>
  </section>
  <section class="section px-[10%] pt-[20px] pb-[180px]" style="background-color:#F2F4F8">
    <div class="container flex flex-col gap-[10px] text-[24px] font-normal">
      <div class="flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px] py-[10px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('카드')">일반결제창</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('가상계좌')">가상계좌</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('계좌이체')">계좌이체</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('휴대폰')">휴대폰</button>
      </div>
    <div class="flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px] py-[10px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('문화상품권')">문화상품권</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('도서문화상품권')">도서문화상품권</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('게임문화상품권')">게임문화상품권</button>
      <div class="flex-1 px-[20px]"></div>
    </div>
    </div>
  </section>

  <!-- 선택한 페이지 렌더링 -->
  <router-view />
</template>

<script>
import axios from 'axios';
import { loadTossPayments } from "@tosspayments/payment-sdk";
const clientKey = "test_ck_Z61JOxRQVEnMKwkkDyw0rW0X9bAq";

let func1 = loadTossPayments(clientKey);

export default {
  name: "pgWindow",
  data(){
    return{
      isLoggedIn: false,
      userName: '',
      order: '',
      money: '',
    };
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    let order = sessionStorage.getItem("order");
    let money = sessionStorage.getItem("money");
    this.isLoggedIn = loggedIn;
    this.userName = name;
    this.order = order;
    this.money = money;
  },
  created() {},
  methods: {
    pay: function (method) {
      func1.then((tossPayments) => {
        let amt = Number(this.money);
        let orderId = new Date().getTime();

        tossPayments
          .requestPayment(method, {
            amount: amt,
            orderId: orderId,
            orderName: this.order,
            customerName: this.userName,
            successUrl: "http://localhost:8080/success",
            failUrl: "http://localhost:8080/fail",
          })
          .catch((error) => {
            if (error.code === "USER_CANCEL") {
              alert("결제를 취소했습니다.");
            } else {
              alert(error.message);
            }
          });
          axios.post('http://127.0.0.1:8000/credit', {
                amount: amt,
                orderName: this.order,
                customerName: this.userName,
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Server responded with error:', error.response.data);
            });
      });
    },
  },
};
</script>

<style></style>