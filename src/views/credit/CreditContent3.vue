<template>
  <div class="flex flex-col items-center justify-center px-[12.5%] pt-[109px] pb-[200px]" style="background-color: #F2F4F8">
    <div class="mb-[50px] text-[45px] sm:text-[30px] font-bold">크레딧 구매목록</div>
    <div v-if="loading">Loading...</div>
    <div v-else class="w-full">
      <div class="flex justify-end text-[16px]">구매 횟수: {{ credits.length }}회</div>
      <div class="flex justify-end text-[16px] mb-[20px]">{{ sumOfExtractedNumbers}},000 크레딧</div>
      <div v-if="credits.length" class="w-full">
        <div class="flex flex-col w-full sm:text-[12px]">
          <div class="flex flex-row border-b font-bold p-2" style="background-color:#E1E7FD">
            <div class="flex-1 text-center">결제금액</div>
            <div class="flex-1 text-center">구매한 상품</div>
            <div class="flex-1 text-center">구매일자</div>
          </div>
          <div v-for="credit in paginatedCredits" :key="credit.id" class="flex flex-row border-b p-2" style="background-color:#FFFFFF">
            <div class="flex-1 text-center">{{ formatAmount(credit.amount) }}원</div>
            <div class="flex-1 text-center">{{ credit.order_name }}</div>
            <div class="flex-1 text-center">{{ credit.created_at.substring(0, 10) }}</div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-4">
          <button @click="previousPage" :disabled="currentPage === 1">◀</button>
          <div class="flex mx-4">
            <button 
              v-for="page in pageNumbers" 
              :key="page" 
              @click="goToPage(page)" 
              :class="{'bg-blue-500 text-white': page === currentPage, 'bg-gray-200': page !== currentPage}" 
              class="mx-1 px-3 py-1 rounded"
            >
              {{ page }}
            </button>
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages">▶</button>
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
      customerName: '',
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  mounted() {
    sessionStorage.setItem('checkNum', 2);
    let name = sessionStorage.getItem("name");
    this.customerName = name;
    this.fetchCredits();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.credits.length / this.itemsPerPage);
    },
    paginatedCredits() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.credits.slice(start, end);
    },
    pageNumbers() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    orderNamesCombined() {
    return this.credits.map(credit => credit.order_name).join(', ');
  },
  sumOfExtractedNumbers() {
    const extractNumbers = (text) => {
      const numbers = text.match(/\d+/g);
      return numbers ? numbers.map(Number) : [];
    };

    const allNumbers = this.credits.flatMap(credit => extractNumbers(credit.order_name));
    return allNumbers.reduce((sum, number) => sum + number, 0);
    },
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
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
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
