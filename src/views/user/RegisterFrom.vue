<template>
<div class="h-screen flex items-center justify-center" style="background-color:#F2F4F8">
  <form @submit.prevent="register">
    <div class="flex flex-col border px-[100px] py-[45px] gap-10 shadow" style="background-color:#FFFFFF">
    <div class="flex flex-col gap-[10px] items-center justify-center">
      <div class="text-[56px] font-bold shadow px-[20px] rounded-[8px]" style="background-color:#fd2df2">sendgo</div>
      <div class="text-[24px] font-semibold">회원가입을 환영합니다</div>
    </div>
    <div class="px-[25px] py-[20px] shadow">
    <div class="flex flex-col items-start gap-[10px]">
      <div class="font-semibold">이름</div>
      <input type="text" v-model="name" class="border shadow" required>
      <div class="font-semibold">이메일</div>
      <input type="email" v-model="email" class="border shadow" required>
      <div class="font-semibold">아이디</div>
      <input type="text" v-model="identity" class="border shadow" required>
      <div class="font-semibold">비밀번호</div>
      <input type="password" v-model="password" class="border shadow" required>
  </div>
  </div>
  <div class="flex justify-center rounded-[8px]" style="background-color:#4F44F0;">
    <button type="submit" class="font-semibold py-[5px]" style="color:#FFFFFF">가입하기</button>
  </div>
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
        this.$router.push('/login');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
