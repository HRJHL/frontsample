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
        <div @click="Sid()" class="text-[15px] sm:text-[12px]">아이디 찾기</div>
        <div class="text-[15px]">|</div>
        <div @click="Spw()" class="text-[15px] sm:text-[12px]">비밀번호 찾기</div>
      </div>
      <div class="flex justify-center rounded-[8px] mb-[30px] sm:mb-[20px]" style="background-color:#4F44F0;">
        <button type="submit" class="font-semibold px-[20px] py-[15px] sm:text-[14px] sm:py-[10px]" style="color:#FFFFFF">로그인</button>
      </div>
      <div class="button-container flex flex-row md:flex-col sm:flex-col gap-[20px] justify-center rounded-[8px] mb-[30px] sm:mb-[20px]">
        <div class="button-wrapper">
          <div id="kakao-login-button"></div>
        </div>
        <div class="button-wrapper">
          <div id="g_id_signin" data-type="standard"></div>
        </div>
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
    // Kakao initialization
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('8a670c965eb7e112ae1be878b9ce90b9');
    }

    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-button',
      success: (authObj) => {
        this.handleKakaoLoginSuccess(authObj);
      },
      fail: (err) => {
        console.error(err);
      }
    });

    // Google Sign-In initialization
    this.initializeGoogleSignIn();
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
        let userprofile = response.data.user.profile_image || 'a';
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
        const response = await axios.post('http://127.0.0.1:8000/auth/kakao', {
          access_token: authObj.access_token
        });
        const userName = response.data.user.name;
        const useremail = response.data.user.email;
        let userprofile = response.data.user.profile_image || 'a';
        sessionStorage.setItem("logg", true);
        sessionStorage.setItem('name', userName);
        sessionStorage.setItem('email', useremail);
        sessionStorage.setItem('profile', userprofile);
        window.location.href ='/message';
        console.log(response);
      } catch (error) {
        console.error('Kakao login error:', error);
        alert("로그인에 실패했습니다.");
      }
    },
    async handleGoogleLoginSuccess(response) {
      try {
        const id_token = response.credential;
        const res = await axios.post('http://127.0.0.1:8000/auth/google', {
          id_token: id_token
        });
        const userName = res.data.user.name;
        const useremail = res.data.user.email;
        let userprofile = res.data.user.profile_image || 'a';
        sessionStorage.setItem("logg", true);
        sessionStorage.setItem('name', userName);
        sessionStorage.setItem('email', useremail);
        sessionStorage.setItem('profile', userprofile);
        window.location.href ='/message';
      } catch (error) {
        console.error('Google login error:', error);
        alert("로그인에 실패했습니다.");
      }
    },
    initializeGoogleSignIn() {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: '741549460694-74df1r5va4oshv90chemn9u3p5r3mimv.apps.googleusercontent.com',
          callback: this.handleGoogleLoginSuccess.bind(this)
        });
        window.google.accounts.id.renderButton(
          document.getElementById('g_id_signin'),
          { theme: 'outline', size: 'large' }
        );
      };
      document.head.appendChild(script);
    },
  }
};
</script>
<style scoped>
  .button-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;  
    height: 50px;  
    border-radius: 8px;
    
  }

  .button-wrapper div {
    width: 100%;
    height: 100%;
  }

  #kakao-login-button, #g_id_signin {
    width: 90%;
    height: 100%;
  }

  #kakao-login-button iframe, #g_id_signin iframe {
    width: 100% !important;
    height: 90% !important;
    border: none;
  }
</style>