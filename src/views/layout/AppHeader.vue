<template>
  <div class="content">
    <header class="flex w-full absolute z-40 mt-[-5rem] border-b" style="background-color:black; color:white">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img src="@/assets/logo2.svg" class="w-[142px] h-auto"/>
          </router-link>
        </div>
        <div class="navbar flex w-full items-center gap-[10%] md:gap-[20%] sm:gap-[20%]">
          <router-link to="/message" class="text-[20px] sm:text-[14px] font-semibold">메시지</router-link>
          <router-link to="/credit" class="text-[20px] sm:text-[14px] font-semibold">크레딧</router-link>
        </div>
      </nav>
    </header>
    <router-view class="mt-[5rem]"/>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>

</style>

