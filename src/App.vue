<template>
  <div class="content">
    <header class="flex w-full fixed z-40 border-b" style="background-color:white">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img src="./assets/logo.svg" class="w-[142px] h-auto">
          </router-link>
        </div>
        <div class="navbar flex w-full items-center gap-[10%]">
          <router-link to="/message" class="text-[20px] font-semibold">메시지</router-link>
          <router-link to="/credit" class="text-[20px] font-semibold">크레딧</router-link>
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

  }
}
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
</style>
