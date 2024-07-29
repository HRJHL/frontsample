<template>
  <div class="flex flex-col items-center justify-center px-[12.5%] pt-[109px] pb-[200px]" style="background-color: #F2F4F8">
    <div class="mb-[50px] text-[45px] sm:text-[30px] font-bold">크레딧 구매목록</div>
    <div v-if="loading">Loading...</div>
    <div v-else class="w-full">
      <div v-if="credits.length" class="w-full">
  <div class="flex flex-col w-full sm:text-[12px]">
    <div class="flex flex-row border-b font-bold p-2" style="background-color:#E1E7FD">
      <div class="flex-1 text-center">결제금액</div>
      <div class="flex-1 text-center">구매한 상품</div>
      <div class="flex-1 text-center">구매자</div>
    </div>
    <div v-for="credit in credits" :key="credit.id" class="flex flex-row border-b p-2" style="background-color:#FFFFFF">
      <div class="flex-1 text-center">{{ formatAmount(credit.amount) }}원</div>
      <div class="flex-1 text-center">{{ credit.order_name }}</div>
      <div class="flex-1 text-center">{{ credit.customer_name }}</div>
    </div>
  </div>
</div>
      <div v-else>
        <p>구매내역이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreditContent3',
  data() {
    return {
      credits: [],
      loading: true,
      error: null,
      customerName: ''
    };
  },
  mounted() {
    sessionStorage.setItem('checkNum', 2);
    let name = sessionStorage.getItem("name");
    this.customerName = name;
    this.fetchCredits();
  },
  methods: {
    async fetchCredits() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/datab', {
          customerName: this.customerName,
        });
        this.credits = response.data.data;
        this.loading = false; 
      } catch (error) {
        console.error('Server responded with error:', error.response?.data || error.message);
        this.error = 'Failed to fetch credit information'; 
        this.loading = false;
      }
    },
    formatAmount(amount) {
      return Math.floor(amount); 
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .conbox {
    margin-left: 0px;
    width: 100%;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap;
  }
}
</style>
