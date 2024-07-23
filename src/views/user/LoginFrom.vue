<template>
<div class="h-screen flex items-center justify-center" style="background-color:#F2F4F8">
  <form @submit.prevent="login">
    <div class="flex flex-col border px-[100px] py-[45px] gap-10 shadow" style="background-color:#FFFFFF">
    <div class="flex flex-col gap-[10px] items-center justify-center">
      <div class="text-[56px] font-bold shadow px-[20px] rounded-[8px]" style="background-color:#fd2df2">sendgo</div>
      <div class="text-[24px] font-semibold">로그인 해주세요</div>
    </div>
    <div class="flex flex-row gap-[20px] px-[25px] py-[20px] shadow">
    <div class="flex flex-col items-start gap-[10px]">
      <div class="font-semibold">아이디</div>
      <input type="text" v-model="identity" class="border shadow">
      <div class="font-semibold">비밀번호</div>
      <input type="password" v-model="password" class="border shadow">
  </div>
  <div class="flex justify-center rounded-[8px]" style="background-color:#4F44F0;">
    <button type="submit" class="font-semibold px-[20px] py-[5px]" style="color:#FFFFFF">로그인</button>
  </div>
  </div>
  <div class="flex justify-center rounded-[8px]" style="background-color:#4F44F0;">
    <router-link to="/register" class="font-semibold py-[5px]" style="color:#FFFFFF">회원가입</router-link>
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
        console.log(response.data);
        this.$root.isLoggedIn = true;
        this.$root.userName = userName;
        this.$router.push('/message');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
