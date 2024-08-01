<template>
  <div class="content">
    <header :class="['header',{'scrolled': isScrolled && isRootPath, 'not-root': !isRootPath }]" class="flex w-full fixed z-40 border-b">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img :src="logoSrc" class="w-[142px] h-auto">
          </router-link>
        </div>
        <div class="flex w-full items-center">
        <div class="navbar flex-1 flex gap-[20%] md:gap-[20%] sm:gap-[20%]">
          <router-link v-if="isLoggedIn" to="/message" @click="this.isState=false" class="message text-[20px] md:text-[14px] sm:text-[10px] font-semibold">메시지</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'"  class="text-[20px] md:text-[14px] sm:text-[10px] font-semibold">메시지</button>
          <router-link v-if="isLoggedIn" to="/credit" @click="this.isState=false" class="credit text-[20px] md:text-[14px] sm:text-[10px] font-semibold">크레딧</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] md:text-[14px] sm:text-[10px] font-semibold">크레딧</button>

        </div>
        <div class="flex-1 flex justify-end items-center gap-[10px] pr-[100px] md:pr-[20px] sm:pr-[20px]">
          <div v-if="isLoggedIn">
          <img v-if="profile" :src="`http://127.0.0.1:8000/storage/${profile}`" class="w-[50px] md:w-[30px] sm:w-[20px] h-auto">
          <img v-else src="@/assets/icon2/person.svg" class="w-[50px] md:w-[30px] sm:w-[20px] h-auto" alt="Default Image">
          </div>
          <div v-if="isLoggedIn" @click="state()" class="text-[20px] mr-[45px] md:text-[14px] sm:text-[10px] font-semibold">{{ userName }}님</div>
          <div v-if="isState" class="absolute border shoadow top-[80px] text-[20px] gap-[5px] px-[40px] py-[10px] " style="background-color: #FFFFFF; color:black;">
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
      isScrolled: false,
      profile: '',
    };
  },
  computed: {
    isRootPath() {
      return this.$route.path === '/';
    },
    logoSrc() {
      if(this.isRootPath){
        return this.isScrolled ? require('@/assets/logo.svg') : require('@/assets/logo2.svg');
      } else {
        return require('@/assets/logo.svg');
      }
    },
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    let profile = sessionStorage.getItem("profile");
    this.isLoggedIn = loggedIn;
    this.userName = name;
    if(profile=="a"){
      this.profile = null;
    }else{
      this.profile = profile;
      }
    this.isState = false;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    state(){
    if (this.isState == false) {
        this.isState = true;
    } else {
        this.isState = false;
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
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
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

.header {
  transition: background-color 0.3s ease;
  background-color: black;
  color: white;
}

.header.scrolled {
  background-color: white;
  color: black;
}

.header.scrolled, .header.not-root {
  background-color: white;
  color: black;
}
@media (max-width: 768px) {
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

@media (max-width: 480px) {
  .navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -20px;
  bottom: -35px; 
  width: 240%; 
  height: 3px; 
  background-color: blue;
}
}
</style>
