<template>
  <div class="w-full px-[30%] py-[10%]" style="background-color:#FFFFF">
    <form @submit.prevent="findId">
      <div class="flex w-full flex-col items-center justify-center">
        <!-- 배너 이미지-->
        <img src="@/assets/sendgo/logo.svg" class="w-[300px] lg:w-[250px] md:w-[200px] sm:w-[150px] h-auto mb-[80px] lg:mb-[60px] md:mb-[50px] sm:mb-[40px]">
      </div>
      <div v-if="!isSearch && isrun" class="flex justify-center">
      <img src="@/assets/sendgo/images.png" class="w-[30px] h-auto rotate-img">
    </div>
      <div class="text-[20px] font-bold mb-[10px]">
        비밀번호 찾기
      </div>
      <div v-if="!isSearch">
      <div class="flex flex-col mb-[20px] sm:mb-[10px] items-start gap-[20px] sm:gap-[10px]">
        <input type="text" v-model="identity" placeholder="아이디" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
        <input type="email" v-model="email" placeholder="이메일" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
      </div>
      <div class="flex justify-center rounded-[8px] mb-[30px] sm:mb-[20px]" style="background-color:#4F44F0;">
        <button type="submit" class="font-semibold px-[20px] py-[15px] sm:text-[14px] sm:py-[10px]" style="color:#FFFFFF">비밀번호 찾기</button>
      </div>
      </div>
      <div v-if="isSearch" class="felx border py-[30px] mb-[20px]" style="border-color: #5C5C5C; background-color: #E0E0E0">
        <div class="text-[25px] md:text-[20px] flex justify-center items-center">비밀번호가 새로 발급되었습니다.<br>이메일을 확인해 주세요</div>
      </div>
      <div class="flex justify-center sm:text-[10px]">
        계정이 없으신가요?&nbsp;<router-link to="/register" class="font-semibold border-b" style="color:#4F44F0; border-color:#4F44F0;">회원가입하기</router-link>
      </div>
    </form>
    <div v-if="errorMessage" class="text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      identity: '',
      errorMessage: '',
      isSearch : false,
      isrun: false,
    };
  },
  methods: {
    findId() {
      this.isrun = true;
      axios.post('http://127.0.0.1:8000/searchP', {
        identity: this.identity,
        email: this.email,
      })
      .then(response => {
        const user = response.data.code;
        console.log(user);
        this.isSearch = true;
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.errorMessage = '입력한 정보를 다시 확인해주세요.';
        } else if (error.response && error.response.status === 422) {
          this.errorMessage = '유효성 검사 오류: 입력한 정보를 다시 확인해주세요.';
        } else {
          this.errorMessage = '서버 에러가 발생했습니다. 나중에 다시 시도해주세요.';
        }
        this.isrun = false;
        console.error(error);
      });
    }
  }
};
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
