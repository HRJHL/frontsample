<template>
  <section class="">
    <div class="flex w-full" style="background-color:#F2F4F8">
      <div class="px-[12.5%] pt-[10%]">
        <h1 class="text-[20px] md:text-[16px] sm:text-[14px] font-semibold">결제방법</h1>
      </div>
    </div>
  </section>
  <section class="section px-[12.5%] pt-[20px] pb-[180px]" style="background-color:#F2F4F8">
    <div class="flex flex-col gap-[10px] text-[24px] font-normal md:text-[12px] sm:text-[10px]">
      <div class="flex gap-[10px] sm:flex-col">
        <div class="flex-1 flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px] py-[10px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('카드')">일반결제창</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('가상계좌')">가상계좌</button>
        </div>
        <div class="flex-1 flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('계좌이체')">계좌이체</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('휴대폰')">휴대폰</button>
        </div>
      </div>
    <div class="flex gap-[10px] sm:flex-col">
      <div class="flex-1 flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px] py-[10px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('문화상품권')">문화상품권</button>
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('도서문화상품권')">도서문화상품권</button>
      </div>
      <div class="flex-1 flex gap-[10px]">
      <button class="button flex-1 is-link border-[4px] px-[20px]" style="border: 1px solid #CECECE; color:#7B7B7B;" v-on:click="pay('게임문화상품권')">게임문화상품권</button>
      <div class="flex-1 lg:hidden md:hidden px-[20px]"></div>
      </div>
    </div>
    </div>
  </section>

  <router-view />
</template>

<script>
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
    sessionStorage.setItem('checkNum', 1);
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
      });
    },
  },
};
</script>

<style></style>