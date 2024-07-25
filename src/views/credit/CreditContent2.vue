<template class = " tem">
  <div class="flex flex-col items-center justify-center px-[12.5%] pt-[109px] pb-[200px]" 
  style="background-color: #F2F4F8">
    <div class="flex flex-col w-full gap-[53px]">
      <div class="flex flex-col gap-[18px]">
      <div class="text-center text-[45px] font-bold">크레딧 구매
      </div>
      <div class="text-center text-[19px] sm:text-[12px] font-regulaar" style="color:#7B7B7B">
        메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요
        </div>
        </div>
      <div class="conbox flex flex-row gap-[24px] zl:gap-[18px] xl:flex-col lg:flex-col">
        <!-- 1번-->
        <div class="flex-1 flex flex-row gap-[24px] zl:gap-[18px]">
        <div class="flex-1 rounded-[8px] px-[32px] py-[40px]" 
        style = "background: #FFFFFF 0% 0% no-repeat padding-box; box-shadow: 0px 10px 10px #00000008;">
        <div class="text-[30px] zl:text-[25px] font-bold mb-[16px] zl:mb-[12px]">
          30,000 원
        </div>
        <div class="text-[18px] zl:text-[14px] mb-[36px] zl:mb-[24px]"
        style="color: #7B7B7B">
          총 66,667건 발송가능합니다<br>
          1건당 15원이 결제가능합니다
        </div>
        <div class="flex flew-row justify-between mb-[24px] zl:mb-[12px] md:gap-[100px] sm:gap-[15px]">
          <div class="text-[24px] zl:text-[18px] font-semibold">
          330,000 크레딧
          </div>
          <div class="text-[16px] zl:text-[12px] font-semibold rounded-[17px] px-[10px] py-[4px]"
          style="background-color: #E0EDFF; color: #2116BF">
          +10%
          </div>
        </div>
        <div class="flex flex-col  px-[16px] py-[16px] gap-[16px] rounded-[8px] mb-[40px] zl:mb-[20px]"
        style="background: #F4F5F6 0% 0% no-repeat padding-box;">
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">기본 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">300,000</div>
          </div>
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">추가 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">+ 30,000</div>
          </div>
        </div>
        <div class="">
          <button @click="Pay1()" class="flex w-full rounded-[8px] py-[19px] zl:py-[10px] text-[20px] zl:text-[14px] font-regular justify-center"
          style="background: #5146F0 0% 0% no-repeat padding-box; color:white">
            구매하기
          </button>
        </div>
        </div>

        <!--2번-->
        <div class="flex-1 rounded-[8px] px-[32px] py-[40px]" 
        style = "background: #FFFFFF 0% 0% no-repeat padding-box; box-shadow: 0px 10px 10px #00000008;">
        <div class="text-[30px] zl:text-[25px] font-bold mb-[16px] zl:mb-[12px]">
          10,000 원
        </div>
        <div class="text-[18px] zl:text-[14px] mb-[36px] zl:mb-[24px]"
        style="color: #7B7B7B">
          총 76,667건 발송가능합니다<br>
          1건당 15원이 결제가능합니다
        </div>
        <div class="flex flew-row justify-between mb-[24px] zl:mb-[12px] md:gap-[100px] sm:gap-[15px]">
          <div class="text-[24px] zl:text-[18px] font-semibold">
          110,000 크레딧
          </div>
          <div class="text-[16px] zl:text-[12px] font-semibold rounded-[17px] px-[10px] py-[4px]"
          style="background-color: #E0EDFF; color: #2116BF">
          +10%
          </div>
        </div>
        <div class="flex flex-col  px-[16px] py-[16px] gap-[16px] rounded-[8px] mb-[40px] zl:mb-[20px]"
        style="background: #F4F5F6 0% 0% no-repeat padding-box;">
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">기본 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">100,000</div>
          </div>
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">추가 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">+ 10,000</div>
          </div>
        </div>
        <div class="">
          <button @click="Pay2()" class="flex w-full rounded-[8px] py-[19px] zl:py-[10px] text-[20px] zl:text-[14px] font-regular justify-center"
          style="background: #5146F0 0% 0% no-repeat padding-box; color:white">
            구매하기
          </button>
        </div>
        </div>

        </div>

        <!-- 3번-->
        <div class="flex-1 flex flex-row gap-[24px] zl:gap-[18px]">
        <div class="flex-1 rounded-[8px] px-[32px] py-[40px]" 
        style = "background: #FFFFFF 0% 0% no-repeat padding-box; box-shadow: 0px 10px 10px #00000008;">
        <div class="text-[30px] zl:text-[25px] font-bold mb-[16px] zl:mb-[12px]">
          30,000 원
        </div>
        <div class="text-[18px] zl:text-[14px] mb-[36px] zl:mb-[24px]"
        style="color: #7B7B7B">
          총 66,667건 발송가능합니다<br>
          1건당 15원이 결제가능합니다
        </div>
        <div class="flex flew-row justify-between mb-[24px] zl:mb-[12px] md:gap-[100px] sm:gap-[15px]">
          <div class="text-[24px] zl:text-[18px] font-semibold">
          330,000 크레딧
          </div>
          <div class="text-[16px] zl:text-[12px] font-semibold rounded-[17px] px-[10px] py-[4px]"
          style="background-color: #E0EDFF; color: #2116BF">
          +10%
          </div>
        </div>
        <div class="flex flex-col  px-[16px] py-[16px] gap-[16px] rounded-[8px] mb-[40px] zl:mb-[20px]"
        style="background: #F4F5F6 0% 0% no-repeat padding-box;">
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">기본 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">300,000</div>
          </div>
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">추가 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">+ 30,000</div>
          </div>
        </div>
        <div class="">
          <button @click="Pay3()" class="flex w-full rounded-[8px] py-[19px] zl:py-[10px] text-[20px] zl:text-[14px] font-regular justify-center"
          style="background: #5146F0 0% 0% no-repeat padding-box; color:white">
            구매하기
          </button>
        </div>
        </div>

        <!--4번-->
        <div class="flex-1 rounded-[8px] px-[32px] py-[40px]" 
        style = "background: #FFFFFF 0% 0% no-repeat padding-box; box-shadow: 0px 10px 10px #00000008;">
        <div class="text-[30px] zl:text-[25px] font-bold mb-[16px] zl:mb-[12px]">
          10,000 원
        </div>
        <div class="text-[18px] zl:text-[14px] mb-[36px] zl:mb-[24px]"
        style="color: #7B7B7B">
          총 66,667건 발송가능합니다<br>
          1건당 15원이 결제가능합니다
        </div>
        <div class="flex flew-row justify-between mb-[24px] zl:mb-[12px] md:gap-[100px] sm:gap-[15px]">
          <div class="text-[24px] zl:text-[18px] font-semibold">
          110,000 크레딧
          </div>
          <div class="text-[16px] zl:text-[12px] font-semibold rounded-[17px] px-[10px] py-[4px]"
          style="background-color: #E0EDFF; color: #2116BF">
          +10%
          </div>
        </div>
        <div class="flex flex-col  px-[16px] py-[16px] gap-[16px] rounded-[8px] mb-[40px] zl:mb-[20px]"
        style="background: #F4F5F6 0% 0% no-repeat padding-box;">
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">기본 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">100,000</div>
          </div>
          <div class="flex justify-between">
            <div class="text-[16px] zl:text-[12px]" style="color:#6E6E6E">추가 크레딧</div>
            <div class="text-[18px] zl:text-[12px]" style="#070707">+ 10,000</div>
          </div>
        </div>
        <div class="">
          <button @click="Pay4()" class="flex w-full rounded-[8px] py-[19px] zl:py-[10px] text-[20px] zl:text-[14px] font-regular justify-center"
          style="background: #5146F0 0% 0% no-repeat padding-box; color:white">
            구매하기
          </button>
        </div>
        </div>
        
        
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CreditContent2',
  mounted() {
    sessionStorage.setItem('checkNum', 1);
  },
  methods : {
    Pay1() {
      sessionStorage.setItem("order", "330,000 크레딧");
      sessionStorage.setItem("money", '30000');
      window.location.href = '/pay';
    },
    Pay2() {
      sessionStorage.setItem("order", "110,000 크레딧");
      sessionStorage.setItem("money", '10000');
      window.location.href = '/pay';
    },
    Pay3() {
      sessionStorage.setItem("order", "330,000 크레딧");
      sessionStorage.setItem("money", '30000');
      window.location.href = '/pay';
    },
    Pay4() {
      sessionStorage.setItem("order", "110,000 크레딧");
      sessionStorage.setItem("money", '10000');
      window.location.href = '/pay';
    }
  }
};
</script>

<style scoped>

@media (max-width: 768px) {

  .conbox{
    margin-left: 0px;
    width: 100%;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap;
  }
}


</style>
