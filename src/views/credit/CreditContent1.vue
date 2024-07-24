<template class="tem">
<div class="flex flex-row py-[22px] px-[19%] zl:px-[16%] xl:px-[5%] lg:px-[5%] md:px-[5%] sm:px-[5%] justify-end gap-[40px] zl:gap-[20px] xl:gap-[20px] md:gap-[5px]">
        <button class="text-[20px] px-[32px] py-[16px] 
        zl:text-[18px] zl:px-[24px] zl:py-[14px]
        xl:text-[18px] xl:px-[24px] xl:py-[14px] 
        lg:px-[18px] lg:text-[16px] lg:py-[12px] 
        md:px-[14px] md:text-[14px] md:py-[10px] 
        sm:px-[5px] sm:text-[12px] sm:py-[5px]
        rounded-[13px] font-semibold" 
        @click="change(1)" ref ="check1"
        :style="getStyle(1)"
        >
        크레딧 구매</button>
        <button class="text-[20px] px-[32px] 
        zl:text-[18px] zl:px-[24px]
        xl:text-[18px] xl:px-[24px] 
        lg:px-[18px] lg:text-[16px] 
        md:px-[14px] md:text-[14px]
        sm:px-[5px] sm:text-[12px]
        rounded-[13px] font-semibold"
        @click="change(2)" ref ="check1"
        :style="getStyle(2)"
        >크레딧 내역</button>
    </div>
</template>

<script>
export default {
  name: 'CreditContent1',
  data() {
    return {
      selectedCheck: 1,
    };
  },
  mounted() {
        let checkNum = sessionStorage.getItem('checkNum');
        this.selectedCheck = checkNum;
    },     
  methods: {
    getStyle(checkNumber) {
      if (this.selectedCheck == checkNumber) {
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
      if(this.selectedCheck == 1){
        sessionStorage.setItem('checkNum', checkNumber);
        location.href='/credit';
      }
      else{
        sessionStorage.setItem('checkNum', checkNumber);
        location.href='/creditlog';
      }
    }
  }
};
</script>

<style scoped>
</style>
