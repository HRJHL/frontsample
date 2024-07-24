<template class="tem">
  <section class=" py-[385px] sm:py-[250px] bg-black text-white flex justify-center items-center">
    <section class="text-center">
      <article class="">
        <article class="text-[56px] md:text-[46px] sm:text-[32px] font-bold mb-[66px]"
        style="background-image: linear-gradient(to left, #B6B7F7, #7FB2FE);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;">
          <span>
            비지니스 광고의 시작,<br>이제 샌드고와 함께 하세요
          </span>
        </article>
        <article class="">
          <button v-if="!isLoggedIn" class="rounded-[44px] text-white px-6 py-3 text-center text-[21px] 
          font-medium w-[206px] h-[65px] sm:text-[15px]" onclick="location.href='/login'" 
          style="background-color: #6250FF">
          메시지 바로가기
          </button>
          <button v-if="isLoggedIn" class="rounded-[44px] text-white px-6 py-3 text-center text-[21px] 
          font-medium w-[206px] h-[65px] sm:text-[15px]" onclick="location.href='/message'" 
          style="background-color: #6250FF">
          메시지 바로가기
          </button>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'MainContent5',
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
};
</script>

<style scoped>

</style>
