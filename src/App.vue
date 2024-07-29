<template>
  <div class="content">
    <header class="flex w-full fixed z-40 border-b" style="background-color:white">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img src="./assets/logo.svg" class="w-[142px] h-auto">
          </router-link>
        </div>
        <div class="flex w-full items-center">
        <div class="navbar flex-1 flex gap-[20%] md:gap-[20%] sm:gap-[20%]">
          <router-link v-if="isLoggedIn" to="/message" class="message text-[20px] sm:text-[10px] font-semibold">메시지</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] sm:text-[10px] font-semibold">메시지</button>
          <router-link v-if="isLoggedIn" to="/credit" class="credit text-[20px] sm:text-[10px] font-semibold">크레딧</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] sm:text-[10px] font-semibold">크레딧</button>

        </div>
        <div class="flex-1 flex justify-end items-center gap-[10px] pr-[100px] md:pr-[50px] sm:pr-[50px]">
          <div v-if="isLoggedIn" @click="state()" class="text-[20px] mr-[45px] sm:text-[10px] font-semibold">{{ userName }}님</div>
          <div v-if="isState" class="absolute border shoadow top-[80px] text-[20px] gap-[5px] px-[40px] py-[10px] " style="background-color: #FFFFFF">
            <div @click="user()">회원 정보</div>
            <div>--------</div>
            <div @click="logout()">로그아웃</div>
          </div>
          <router-link v-if="!isLoggedIn" to="/login" class="text-[20px] sm:text-[10px] font-semibold">로그인</router-link>
        </div>
        </div>
      </nav>
    </header>
    <router-view class="mt-[5rem]"/>
  </div>
</template>


<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      isLoggedIn: false,
      isState: false,
      userName: '',
    };
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    this.isLoggedIn = loggedIn;
    this.userName = name;
    let state = sessionStorage.getItem("state");
    this.isState = state;
  },
  methods: {
    state(){
      let state;

    if (this.isState === false) {
        sessionStorage.setItem("state", true);
        state = sessionStorage.getItem("state");
        this.isState = state === 'true';
    } else {
        sessionStorage.setItem("state", false);
        state = sessionStorage.getItem("state");
        this.isState = state === 'true';
    }
    },
    logout() {
      sessionStorage.clear();
      this.isState = false;
      window.location.href ='/';
      },
    user(){
      this.isState = false;
      window.location.href="/userpage";
    }
  },
};

</script>

<style>
.navbar a.router-link-active {
  position: relative; 
  color: blue;
}

.navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -40px;
  bottom: -25px; 
  width: 260%; 
  height: 3px; 
  background-color: blue;
}

@media (max-width: 768px) {
  .navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -20px;
  bottom: -25px; 
  width: 180%; 
  height: 3px; 
  background-color: blue;
}
}

@media (max-width: 480px) {
  .navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -20px;
  bottom: -30px; 
  width: 200%; 
  height: 3px; 
  background-color: blue;
}
}
</style>
