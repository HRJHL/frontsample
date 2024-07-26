<template>
<div class="w-full px-[30%] py-[10%]" style="background-color:#FFFFF">
  <form @submit.prevent="login">
    <div class="flex w-full flex-col items-center justify-center">
      <!-- 배너 이미지-->
      <img src="@/assets/sendgo/logo.svg" class="w-[300px] lg:w-[250px] md:w-[200px] sm:w-[150px] h-auto mb-[80px] lg:mb-[60px] md:mb-[50px] sm:mb-[40px]">
    </div>
    <div class="flex flex-col mb-[30px] sm:mb-[20px] items-start gap-[20px] sm:gap-[10px]">
      <!--로그인 폼-->
      <input type="text" v-model="identity" placeholder="아이디" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
      <input type="password" v-model="password" placeholder="비밀번호" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
  </div>
  <div class="flex justify-center rounded-[8px] mb-[30px] sm:mb-[20px]" style="background-color:#4F44F0;">
    <button type="submit" class="font-semibold px-[20px] py-[15px] sm:text-[14px] sm:py-[10px]" style="color:#FFFFFF">로그인</button>
  </div>
  <div class="flex justify-center sm:text-[10px]">
    계정이 없으신가요?&nbsp;<router-link to="/register" class="font-semibold border-b" style="color:#4F44F0; border-color:#4F44F0;">회원가입하기</router-link>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      identity: '',
      password: '',
      name: '',
    };
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/login', {
        identity: this.identity,
        password: this.password,
        name: this.name,
      })
      .then(response => {
        const userName = response.data.user.name;
        console.log(userName);
        sessionStorage.setItem("logg", true);
        sessionStorage.setItem('name', userName);
        window.location.href ='/message';
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
