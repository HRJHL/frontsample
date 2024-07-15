<template class="tem">
    <section class="flex flex-row py-[22px] px-[19%] zl:px-[16%] xl:px-[5%] lg:px-[5%] md:px-[5%] sm:px-[5%] justify-end gap-[40px] zl:gap-[20px] xl:gap-[20px] md:gap-[5px]">
        <button class="text-[20px] px-[32px] py-[16px] 
        zl:text-[18px] zl:px-[24px] zl:py-[14px]
        xl:text-[18px] xl:px-[24px] xl:py-[14px] 
        lg:px-[18px] lg:text-[16px] lg:py-[12px] 
        md:px-[14px] md:text-[14px] md:py-[10px] 
        sm:px-[5px] sm:text-[12px] sm:py-[5px]
        rounded-[13px] font-semibold"
        @click="change(1)" ref ="check1"
        :style="getStyle(1)"
        >메시지 전송</button>
        <button class="text-[20px] px-[32px] 
        zl:text-[18px] zl:px-[24px]
        xl:text-[18px] xl:px-[24px] 
        lg:px-[18px] lg:text-[16px] 
        md:px-[14px] md:text-[14px]
        sm:px-[5px] sm:text-[12px]
        rounded-[13px] font-semibold"
        @click="change(2)" ref ="check2"
        :style="getStyle(2)"
        >발신번호 관리</button>
        <button class="text-[20px] px-[32px] 
        zl:text-[18px] zl:px-[24px]
        xl:text-[18px] xl:px-[24px] 
        lg:px-[18px] lg:text-[16px] 
        md:px-[14px] md:text-[14px] 
        sm:px-[5px] sm:text-[12px]
        rounded-[13px] font-semibold"
        @click="change(3)" ref ="check3"
        :style="getStyle(3)"
        >주소록 관리</button>
        <button class="text-[20px] px-[32px] 
        zl:text-[18px] zl:px-[24px]
        xl:text-[18px] xl:px-[24px] 
        lg:px-[18px] lg:text-[16px] 
        md:px-[14px] md:text-[14px]
        sm:px-[5px] sm:text-[12px]
        rounded-[13px] font-semibold"
        @click="change(4)" ref ="check4"
        :style="getStyle(4)"
        >발송결과</button>
    </section>
</template>

<script>
export default {
  name: 'MessageContent1',
  data() {
    return {
      selectedCheck: 1,
    };
  },
  methods: {
    getStyle(checkNumber) {
      if (this.selectedCheck === checkNumber) {
        return {
          background: '#E1E7FD 0% 0% no-repeat padding-box',
          color: '#4F44F0'
        };
      } else {
        return {
          background: 'white',
          color: '#555555'
        };
      }
    },
    change(checkNumber) {
      this.selectedCheck = checkNumber;
    }
  }
};
</script>

<style scoped>
</style>
