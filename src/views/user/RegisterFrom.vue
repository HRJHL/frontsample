<template>
<div class="w-full px-[30%] py-[50px]" style="background-color:#FFFFF">
  <form @submit.prevent="register">
    <div class="flex w-full flex-col items-center justify-center">
      <img src="@/assets/sendgo/logo.svg" class="w-[300px] h-auto mb-[80px]">
    </div>
    <div class="flex flex-col mb-[30px] items-start gap-[20px]">
      <div class="font-semibold">이름</div>
      <input type="text" v-model="name" placeholder="홍길동" class="text-[20px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
      <div class="font-semibold">이메일</div>
      <input type="email" v-model="email" placeholder="abc123@gmail.com" class="text-[20px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
      <div class="font-semibold">아이디</div>
      <input type="text" v-model="identity" placeholder="abcd123!@#" class="text-[20px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
      <div class="font-semibold">비밀번호</div>
      <input type="password" v-model="password" placeholder="abc123!@#" class="text-[20px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
  </div>
  <div class="flex justify-center rounded-[8px] mb-[30px]" style="background-color:#4F44F0;">
    <button type="submit" class="font-semibold px-[20px] py-[15px]" style="color:#FFFFFF">가입하기</button>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      identity: '',
      password: '',
    };
  },
  methods: {
    register() {
      axios.post('http://127.0.0.1:8000/register', {
        name: this.name,
        email: this.email,
        identity: this.identity,
        password: this.password,
      })
      .then(response => {
        console.log(response.data);
        alert("회원가입이 성공적으로 이루어졌습니다.\n로그인페이지로 이동합니다.");
        this.$router.push('/login');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
