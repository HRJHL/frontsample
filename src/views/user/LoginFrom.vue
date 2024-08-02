<template>
  <div class="w-full px-[30%] py-[10%]" style="background-color:#FFFFF">
    <form @submit.prevent="login">
      <div class="flex w-full flex-col items-center justify-center">
        <!-- 배너 이미지 -->
        <img src="@/assets/sendgo/logo.svg" class="w-[300px] lg:w-[250px] md:w-[200px] sm:w-[150px] h-auto mb-[80px] lg:mb-[60px] md:mb-[50px] sm:mb-[40px]">
      </div>
      <div class="flex flex-col mb-[20px] sm:mb-[10px] items-start gap-[20px] sm:gap-[10px]">
        <!-- 로그인 폼 -->
        <input type="text" v-model="identity" placeholder="아이디" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
        <input type="password" v-model="password" placeholder="비밀번호" class="text-[20px] sm:text-[14px] w-full pl-[10px] py-[5px] rounded-[8px]" style="border: 1px solid #CECECE;">
      </div>
      <!-- 아이디 비번 찾기 -->
      <div class="flex flex-row justify-end gap-[10px] mb-[20px]">
        <div @click="Sid()" class="text-[15px]">아이디 찾기</div>
        <div class="text-[15px]">|</div>
        <div @click="Spw()" class="text-[15px]">비밀번호 찾기</div>
      </div>
      <div class="flex justify-center rounded-[8px] mb-[30px] sm:mb-[20px]" style="background-color:#4F44F0;">
        <button type="submit" class="font-semibold px-[20px] py-[15px] sm:text-[14px] sm:py-[10px]" style="color:#FFFFFF">로그인</button>
      </div>
      <div class="flex justify-center rounded-[8px] mb-[30px] sm:mb-[20px]">
        <div id="kakao-login-button"></div>
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
  mounted() {
    // 카카오 SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('8a670c965eb7e112ae1be878b9ce90b9'); // 카카오 JavaScript 키 입력
    }

    // 카카오 로그인 버튼 생성
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-button',
      success: (authObj) => {
        this.handleKakaoLoginSuccess(authObj);
      },
      fail: (err) => {
        console.error(err);
      }
    });
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
        const useremail = response.data.user.email;
        let userprofile = response.data.user.profile_image || 'a'; // 기본 프로필 이미지 설정
        sessionStorage.setItem("logg", true);
        sessionStorage.setItem('name', userName);
        sessionStorage.setItem('email', useremail);
        sessionStorage.setItem('profile', userprofile);
        window.location.href ='/message';
      })
      .catch(error => {
        console.error(error);
        alert("아이디 혹은 비밀번호가 틀렸습니다.");
      });
    },
    Sid() {
      location.href='/searchL';
    },
    Spw() {
      location.href='/searchP';
    },
    async handleKakaoLoginSuccess(authObj) {
      try {
        // 액세스 토큰을 서버에 전송하여 사용자 인증 처리
        const response = await axios.post('http://127.0.0.1:8000/auth/kakao', {
          access_token: authObj.access_token
        });
        
        const userName = response.data.user.name;
        const useremail = response.data.user.email;
        let userprofile = response.data.user.profile_image || 'a'; // 기본 프로필 이미지 설정
        sessionStorage.setItem("logg", true);
        sessionStorage.setItem('name', userName);
        sessionStorage.setItem('email', useremail);
        sessionStorage.setItem('profile', userprofile);
        window.location.href ='/message';
      } catch (error) {
        console.error('Kakao login error:', error);
        alert("로그인에 실패했습니다.");
      }
    }
  }
};
</script>

<style scoped>
/* 스타일 추가 */
</style>
