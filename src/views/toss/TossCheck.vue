<template>
  <section class="">
    <div class="flex w-full" style="background-color:skyblue">
      <div class="px-[20px] py-[40px]">
        <h1 class="text-[60px] font-semibold">토스페이먼츠 연동 샘플</h1>
      </div>
    </div>
  </section>
  <section class="section px-[40px] pt-[40px] pb-[180px]">
    <div class="container flex gap-[20px] text-[24px] font-normal">
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('카드')">일반결제창</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('가상계좌')">가상계좌</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('계좌이체')">계좌이체</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('휴대폰')">휴대폰</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('문화상품권')">문화상품권</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('도서문화상품권')">도서문화상품권</button>
      <button class="button is-link border-[4px] rounded-[22px] px-[20px]" style="background-color:#F2F2F2; border-color:#2F2FD3" v-on:click="pay('게임문화상품권')">게임문화상품권</button>
    </div>
  </section>

  <!-- 선택한 페이지 렌더링 -->
  <router-view />
</template>

<script>
import { loadTossPayments } from "@tosspayments/payment-sdk";
const clientKey = "test_ck_Z61JOxRQVEnMKwkkDyw0rW0X9bAq";

let func1 = loadTossPayments(clientKey);

export default {
  name: "pgWindow",
  created() {},
  methods: {
    pay: function (method) {
      func1.then((tossPayments) => {
        let amt = 10000;
        let orderId = new Date().getTime();

        tossPayments
          .requestPayment(method, {
            amount: amt,
            orderId: orderId,
            orderName: "토스 티셔츠 외 1건",
            customerName: "박토스",
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