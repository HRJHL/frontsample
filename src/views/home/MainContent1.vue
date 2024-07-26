<template class="tem">
<section class="overflow-x-hidden" style="background-color:black">
  <div class="flex flex-row pl-[12.5%] lg:px-[12.5%] md:px-[12.5%] sm:px-[12.5%] lg:flex-col md:flex-col sm:flex-col">
    <article class="flex-1 flex items-center lg:justify-center lg:text-center md:justify-center md:text-center sm:justify-center sm:text-center  lg:mt-40 md:mt-20 sm:mt-40">
      <div>
        <div class="text-[24px] xl:text-[20px] mb-[0.5rem] sm:text-[1rem]" style="color:#FCFCFC">
          인터넷 문자 메시지 전송의 모든것</div>
        <div class="text-[56px] xl:text-[48px] font-bold mb-[2rem] sm:text-[2rem]" style="background-image: linear-gradient(to right, #9FBAFD, #4E81FF);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;">
        가장 빠르고 안정적인<br>문자 서비스 SENDGO
        </div>
        <div class="flex flex-row gap-5 lg:justify-center md:justify-center sm:jutify-center">
          <router-link v-if="!isLoggedIn" to="/register" class="rounded-[44px] w-[206px] h-[65px] xl:w-[170px] xl:h-[56px] sm:w-[8rem] sm:h-[3rem] sm:text-[1rem] text-white 
          text-center py-4 xl:py-3 sm:py-2 text-[21px] font-medium" style="background-color : #6250FF"
          >회원가입</router-link>
          <div v-if="isLoggedIn" class="text-[50px] font-semibold" style="color:#FFFFFF">{{ userName }}님</div>
          <router-link v-if="!isLoggedIn" to="/login" class="rounded-[44px] w-[206px] h-[65px] xl:w-[170px] xl:h-[56px] sm:w-[8rem] sm:h-[3rem] sm:text-[1rem] text-white 
          text-center py-4 xl:py-3 sm:py-2 text-[21px] font-medium" style="background-color:#242424"
          >로그인</router-link>
          <div v-if="isLoggedIn" class="text-[50px] font-semibold" style="color:#FFFFFF">환영합니다</div>
        </div>
      </div>
    </article>
    <article class="flex-1 flex pr-[94px] lg:mt-[30rem] zl:pr-[80px] xl:pr-[76px] lg:pr-0 md:pr-0 sm:pr-0 zl:mt-[80px] lg:mt-[20rem] md:mt-[20rem] sm:mt-[20rem]">
      <div class="flex flex-col">
    <div class="flex relative flex-row mb-[24px] gap-[32px] zl:gap-[28px] xl:gap-[24px]">
      <div class="flex-1 mt-[7rem] zl:mt-[50px] xl:mt-[5rem] lg:mt-[-18rem] md:mt-[-10rem] sm:mt-[-10rem]">
      <img src="@/assets/main/1p1.png" class="rounded-[1.5rem]" 
      style="background-color:#6250FF"/>
      </div>
      <div class="flex-1 mt-[-5rem] xl:mt-[-2rem] sm:mt-[-5rem]">
      <img src="@/assets/main/1p2.png" class="rounded-t rounded-[1.5rem] lg:rounded-[1.5rem] md:rounded-[1.5rem] sm:rounded-[1.5rem]" 
      style="background-color:#242424"/>
      </div>
      <div class="flex-1 mt-[-18rem] xl:mt-[-11rem] md:mt-[-10rem] sm:mt-[-10rem]">
      <img src="@/assets/main/1p3.png" class="rounded-t rounded-[1.5rem] lg:rounded-[1.5rem] md:rounded-[1.5rem] sm:rounded-[1.5rem]" 
      style="background-color:#6250FF"/>
      </div>
    </div>
    <div class="flex relative flex-row gap-[32px] zl:gap-[28px] xl:gap-[24px] zl:mt-[40px]">
      <div class="flex-1 zl:mt-[-40px] lg:mt-[-18rem] md:mt-[-8rem] sm:mt-[-7rem]">
      <img src="@/assets/main/1p4.png" class="rounded-b rounded-[1.5rem] lg:rounded-[1.5rem] md:rounded-[1.5rem] sm:rounded-[1.5rem]" 
      style="background-color:#242424"/>
      </div>
      <div class="flex-1 mt-[-7rem] xl:mt-[-4rem] lg:mt-[0rem] md:mt-[1rem] sm:mt-[0rem]">
      <img src="@/assets/main/1p5.png" class="rounded-b rounded-[1.5rem] lg:rounded-[1.5rem] md:rounded-[1.5rem] sm:rounded-[1.5rem]" 
      style="background-color:#6250FF"/>
      </div>
      <div class="flex-1 mt-[-20rem] xl:mt-[-13rem] lg:mt-[-13rem] md:mt-[-5rem] sm:mt-[-4.5rem] h-[609px] zl:h-[450px] xl:h-[300px] lg:h-[550px] md:h-[320px] lg:h-[28rem] sm:h-[220px] rounded-[1.5rem] xl:rounded-[1.5rem] lg:rounded-[1.5rem] md:rounded-[1.5rem] sm:rounded-[1.5rem]" 
      style="background-color:#242424">
        <img img src="@/assets/main/1p6.png" class="absolute zl:w-[250px] xl:w-[200px] md:w-[220px] sm:w-[140px] mt-[-4rem] lg:mt-[-2rem] sm:mt-[-1.5rem]  h-auto"/>
      </div>
    </div>
    </div>
    </article>
  </div>
  </section>
</template>

<script>
export default {
  name: 'MainContent1',
  data(){
    return{
      isLoggedIn: false,
      userName: '',
    };
  },
  mounted() {
    sessionStorage.setItem('checkNum', 1);
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    this.isLoggedIn = loggedIn;
    this.userName = name;
  },
};
</script>

<style scoped>

</style>
