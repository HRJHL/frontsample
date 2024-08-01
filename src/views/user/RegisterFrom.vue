<template>
  <div class="w-full px-[30%] py-[50px]" style="background-color:#FFFFF">
    <form @submit.prevent="register">
      <div class="flex w-full flex-col items-center justify-center">
        <img src="@/assets/sendgo/logo.svg" class="w-[300px] lg:w-[250px] md:w-[200px] sm:w-[150px] h-auto mb-[80px] lg:mb-[60px] md:mb-[50px] sm:mb-[40px]">
      </div>
      <div class="flex flex-col mb-[30px] items-start gap-[20px] lg:gap-[15px] md:gap-[10px] sm:gap-[10px] lg:text-[18px] md:text-[14px] sm:text-[14px]">
        <div class="font-semibold">이름</div>
        <input type="text" v-model="name" placeholder="홍길동" class="text-[20px] md:text-[14px] sm:text-[10px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
        <div class="font-semibold">이메일</div>
        <div class="flex flex-row w-full gap-[10px]">
          <input type="email" v-model="email" :readonly="isReadonly" placeholder="--@gmail.com 이메일인증을 먼저 해주세요" class="text-[20px] md:text-[14px] sm:text-[10px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
          <button type="button" @click="Send()" v-if="!isRigist" class="flex w-[60px] md:text-[12px] sm:text-[10px] justify-center items-center rounded-[8px]" style="background-color:#4F44F0; color:#FFFFFF">전송</button>
        </div>
        <div v-if="isSend">
          <div class="flex flex-row w-full gap-[10px]">
            <input type="text" v-model="code" placeholder="인증번호" class="text-[20px] w-full pl-[10px] py-[5px] rounded-[8px]" style="sm:text-[10px] border: 1px solid #CECECE;">
            <button type="button" @click="Verifit()" class="flex w-[60px] justify-center items-center rounded-[8px]" style="background-color:#4F44F0; color:#FFFFFF">인증</button>
          </div>
        </div>
        <div class="font-semibold">아이디</div>
        <input type="text" v-model="identity" maxlength="16" placeholder="16글자 이하로 작성" class="text-[20px] md:text-[14px] sm:text-[10px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
        <div class="font-semibold">비밀번호</div>
        <input type="password" v-model="password" maxlength="16" placeholder="16글자 이하로 작성" class="text-[20px] md:text-[14px] sm:text-[10px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;" required>
      </div>
      <div class="flex justify-center rounded-[8px] mb-[30px]" style="background-color:#4F44F0;">
        <button type="submit" v-if="isRigist" class="font-semibold px-[20px] py-[15px]" style="color:#FFFFFF">가입하기</button>
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
      isSend: false,
      isRigist: false,
      isReadonly: false,
      code: '',
      verificationCode: '',
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
    },
    Send() {
    axios.post('http://127.0.0.1:8000/mailSubmit', {
      email: this.email,
    })
    .then(response => {
      console.log(response.data.message);
      this.verificationCode = response.data.verification_code;
      this.isSend = true;
    })
    .catch(error => {
      console.error(error);
      alert("정확한 이메일을 입력해 주세요");
    });
  },
  Verifit() {
    if(this.code==this.verificationCode){
      alert("이메일 인증이 성공적으로 완료되었습니다.");
      this.isSend = false;
      this.isRigist = true;
      this.isReadonly = true;
    }
    else{
      alert("인증번호가 틀렸습니다.");
    }
  }
  }
};
</script>
