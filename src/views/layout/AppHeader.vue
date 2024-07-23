<template>
  <div class="content">
    <header class="flex w-full absolute z-40 mt-[-5rem] border-b" style="background-color:black; color:white">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img src="@/assets/logo2.svg" class="w-[142px] h-auto"/>
          </router-link>
        </div>
        <div class="flex w-full items-center">
        <div class="navbar flex-1 flex gap-[20%] md:gap-[20%] sm:gap-[20%]">
          <router-link v-if="isLoggedIn" to="/message" class="message text-[20px] sm:text-[14px] font-semibold">메시지</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] sm:text-[14px] font-semibold">메시지</button>
          <router-link v-if="isLoggedIn" to="/credit" class="credit text-[20px] sm:text-[14px] font-semibold">크레딧</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] sm:text-[14px] font-semibold">크레딧</button>

        </div>
        <div class="flex-1 flex justify-end items-center gap-[10px] pr-[100px]">
          <div v-if="isLoggedIn" class="text-[20px] sm:text-[14px] font-semibold">{{ userName }}님</div>
          <router-link v-if="!isLoggedIn" to="/login" class="text-[20px] sm:text-[14px] font-semibold">로그인</router-link>
          <router-link v-if="isLoggedIn" to="/" @click="logout" class="text-[20px] sm:text-[14px] font-semibold">로그아웃</router-link>
        </div>
        </div>
      </nav>
    </header>
    <router-view :isLoggedIn="isLoggedIn" @setIsLoggedIn="setIsLoggedIn" class="mt-[5rem]"/>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data(){
    return{
      isLoggedIn: false,
      userName: '',
    };
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    if(loggedIn == 'false'){
      this.isLoggedIn = false;
    }
    else{
      this.isLoggedIn = 'true';
    }
    console.log(loggedIn);
    console.log(this.isLoggedIn);
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
      this.userName = '';
      sessionStorage.setItem("logg", false);
      sessionStorage.setItem('name', '');
},
  },
};
</script>

<style scoped>

</style>

