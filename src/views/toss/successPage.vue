<template>
<div class="h-screen flex items-center justify-center" style="background-color:#F2F4F8">
  <form @submit.prevent="login">
    <div class="flex flex-col border px-[100px] py-[45px] gap-10 shadow" style="background-color:#FFFFFF">
    <div class="flex flex-col gap-[10px] items-center justify-center">
      <img src="@/assets/sendgo/logo.svg" class="w-[300px] h-auto mb-[10px]">
      <div class="text-[24px] font-semibold">구매가 완료되었습니다.</div>
    </div>
    <div class="flex flex-row gap-4">
    <div class="flex w-full justify-center rounded-[8px] gap-[10px]">
    <router-link to="/message" class="font-semibold py-[5px]">잠시후 메인페이지로 이동됩니다.</router-link>
    <img src="@/assets/sendgo/images.png" class="w-[30px] h-auto rotate-img">
  </div>
  </div>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            currentRoute: window.location.pathname,
            responseData: ''
        }

    }, 
    mounted() {
        this.success();
        setTimeout(function() {
        window.location.href = '/';
    }, 300000);
    
    },    
    methods: {
        getUrl:function(){
            let params = new URLSearchParams(window.location.search);
            console.log(params.get("paymentKey"));
            console.log(params.get("orderId"));
            console.log(params.get("amount"));
        },
    
        success:function(){
            let params = new URLSearchParams(window.location.search);
            console.log(params.get("paymentKey"));
            console.log(params.get("orderId"));
            console.log(params.get("amount"));

            const url = 'https://api.tosspayments.com/v1/payments/'+params.get("paymentKey");
            const token = "dGVzdF9za19RYmdNR1p6b3J6cVFtVzFxRFcwa1ZsNUUxZW00Og==";

            let userData = {
                amount: params.get("amount"),
                orderId: params.get("orderId")
            }

            const instance = axios.create({
                baseURL: url,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + token, 
                }
            })

            instance.post(url, userData)
            .then( res => {                
                this.responseData = res
                console.log("[res] Item Insert", res);
            })
            .catch( err => {
                this.responseData = err.response.data
                console.error("[error] Item Insert Error!", err.response.data);
            })
        }
    }
}
</script>
<style scoped>
.rotate-img {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>