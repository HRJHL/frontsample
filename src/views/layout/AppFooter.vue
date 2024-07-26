<template>
    <div class="content" style="background-color:#222222; color:white;">
      <div class="border-b">
      <nav class="navi ml-[12.5%] py-[56px] gap-[483px] xl:gap-[383px] lg:gap-[300px] md:gap-[200px] sm:gap-[100px]">
        <div class="logo">
          <router-link to="/">
          <img src="@/assets/logo2.svg" class="w-[142px] h-auto"/>
          </router-link>
        </div>
        <div class="flex w-full items-center gap-[5%] sm:gap-[40px]">
          <router-link v-if="isLoggedIn" to="/message" class="text-[16px] font-medium">메시지</router-link>
          <router-link v-if="isLoggedIn" to="/credit" class="text-[16px] font-medium">크레딧</router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="text-[16px] font-medium">메시지</router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="text-[16px] font-medium">크레딧</router-link>
        </div>
      </nav>
      </div>
      <div class="flex justify-between md:flex-col sm:flex-col px-[12.5%] pt-[40px] pb-[92px]">
      <div class="flex flex-col md:mb-[20px] sm:mb-[20px]" style="background-color:#222222;">
        <span class="text-[16px] md:text-[14px] sm:text-[12px] font-medium" style="color:#D6D6D6">문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의해 보세요.</span>
        <span class="text-[16px] md:text-[14px] sm:text-[12px] font-medium" style="color:#F0F0F0">Telegram: @shdevelope</span>
      </div>
      <router-link v-if="isLoggedIn" to="/" @click="logout" class="text-[16px] md:text-[14px] sm:text-[12px] font-semibold">로그아웃</router-link>
    <router-view />
      </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data(){
    return{
      isLoggedIn: false,
      userName: '',
    };
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    this.isLoggedIn = loggedIn;
    this.userName = name;
  },
  methods: {
    logout() {
      sessionStorage.clear();
      console.log(this.isLoggedIn);
      console.log(this.name);
      window.location.href ='/';
      },
  },
};
</script>

<style scoped>


</style>

