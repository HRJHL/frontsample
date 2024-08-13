<template>
  <div class="flex flex-col items-center justify-center px-[12.5%] pt-[109px] pb-[200px]" style="background-color: #F2F4F8">
    <div class="mb-[50px] text-[45px] sm:text-[30px] font-bold">문의사항</div>
    <div v-if="loading">Loading...</div>
    <div v-else class="w-full">
      <div class="flex justify-end text-[16px]">문의 수: {{ chats.length }}개</div>
      <div v-if="chats.length" class="w-full">
        <div class="flex flex-col w-full sm:text-[12px]">
          <div class="flex flex-row border-b font-bold p-2" style="background-color:#E1E7FD">
            <div class="flex-1 text-center">문의자</div>
            <div class="flex-1 text-center">문의내용</div>
            <div class="flex-1 text-center">답변</div>
          </div>
          <div v-for="chat in paginatedChats" :key="chat.id" class="flex flex-row items-center border-b p-2" style="background-color:#FFFFFF">
            <div class="flex-1 text-center">{{ chat.email }}</div>
            <div class="flex-1 text-center">{{ chat.message }}</div>
            <div class="flex-1 flex flex-row text-center">
              <div v-if="chat.talk" class="flex-1 text-center">{{ chat.talk }}</div>
              <div v-else class="flex gap-[10px]">
                <input 
                  type="text" 
                  v-model="inputValues[chat.id]" 
                  placeholder="답변을 입력해주세요" 
                  class="flex-auto px-[10px] py-[5px] border"
                >
                <button 
                  @click="submitResponse(chat.id)" 
                  class="px-[20px] py-[10px] rounded-[8px]" 
                  style="background-color:#4F44F0; color:#ffffff"
                >
                  완료
                </button>
              </div>
            </div>
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
  name: 'ChatContent',
  data() {
    return {
      chats: [],
      loading: true,
      error: null,
      email: '',
      currentPage: 1,
      itemsPerPage: 10,
      inputValues: {},  // 각 채팅의 답변을 저장할 객체
    };
  },
  mounted() {
    this.email = sessionStorage.getItem("email");
    this.fetchChats();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.chats.length / this.itemsPerPage);
    },
    paginatedChats() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.chats.slice(start, end);
    },
    pageNumbers() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    async fetchChats() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/chatM', {
          email: this.email,
        });
        this.chats = response.data.data;
        this.loading = false; 
        this.initializeInputValues();  // 초기화
      } catch (error) {
        console.error('Server responded with error:', error.response?.data || error.message);
        this.error = 'Failed to fetch chat information'; 
        this.loading = false;
      }
    },
    initializeInputValues() {
      this.chats.forEach(chat => {
        this.inputValues[chat.id] = ''; 
      });
    },
    async submitResponse(chatId) {
      const responseText = this.inputValues[chatId];
      if (!responseText) {
        alert('답변을 입력해주세요.');
        return;
      }
      
      try {
        await axios.post('http://127.0.0.1:8000/talk', {
          email: this.email,
          messageId: chatId,
          talk: responseText
        });
        this.fetchChats(); // 업데이트 후 채팅 재요청
        console.log('Response submitted successfully.');
      } catch (error) {
        console.error('Failed to update chat:', error.response?.data || error.message);
        this.error = 'Failed to submit response';
      }
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
    white-space: nowrap;
  }
}
</style>
