<template>
<div class="w-full px-[30%] lg:px-[20%] md:px-[15%] sm:px-[5%] py-[10%]" style="background-color:#FFFFF">
    <div class="flex justify-center text-[45px] md:text-[35px] sm:text-[25px] mb-[30px] font-bold">회원님의 정보</div>
    <div class="flex justify-start mb-[50px] md:mb-[30px] sm:mb-[20px]">
      <div class="px-[20px] py-[20px] rounded-[22px]" style="background-color:#0000001A">
        <img :src="`http://127.0.0.1:8000/storage/${profile}`" v-if="profile" class="w-[100px] md:w-[80px] sm:w-[50px] h-auto">
        <img v-else src="@/assets/icon2/person.svg" class="w-[100px] h-auto" alt="Default Image">
      </div>
      <div class="flex flex-col text-[22px] md:text-[16px] sm:text-[14px]">
        <div class="flex flex-row">
      <div class=" font-semibold px-[20px] pt-[15px]">결제 크레딧 :</div>
      <div class=" pt-[15px]">{{ sumOfExtractedNumbers}},000 크레딧</div>
        </div>
        <div class="flex flex-row">
      <div class=" font-semibold px-[20px] pt-[10px]">보유 크레딧 :</div>
      <div class=" pt-[10px]">{{ sumOfExtractedNumbers}},000 크레딧</div>
        </div>
        <div class="flex flex-row">
      <div class=" font-semibold px-[20px] pt-[10px]">사용 크레딧 :</div>
      <div class=" pt-[10px]">0 크레딧</div>
        </div>
      </div>
    </div>
    <div class="flex flex-row mb-[50px] md:mb-[30px] sm:mb-[20px] text-[32px] xl:text-[20px] lg:text-[18px] md:text-[14px] sm:text-[8px] border-t" style="border-color:#0000002E">
      <div class="flex-col w-[220px] font-semibold" style="background-color:#F0F0F0">
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">이름</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">아이디</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">비밀번호</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">이메일</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">가입날짜</div>
      </div>
      <div class="flex-auto flex-col">
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{uname}}</div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{uid}}</div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{upw}}</div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{uemail}}</div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{ucreate}}</div>
      </div>
  </div>
  <div class="flex flex-row justify-center gap-[40px]">
    <button @click="change()" class="text-[20px] sm:text-[14px] px-[20px] py-[20px] sm:py-[10px] font-semibold rounded-[8px]" style="background-color:#4E81FF; color:#FFFFFF">정보 변경</button>
    <button @click="remove()" class="text-[20px] sm:text-[14px] px-[20px] py-[20px] sm:py-[10px] font-semibold rounded-[8px]" style="background-color:#4E81FF; color:#FFFFFF">회원 탈퇴</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      credits: [],
      loading: true,
      error: null,
      name: '',
      uname: '',
      customerName: '',
      uid: '',
      upw: '',
      uemail: '',
      ucreate: '',
      profile: '',
    };
  },
  mounted() {
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    let profile = sessionStorage.getItem("profile");
    this.name = name;
    this.email = email;
    if(profile=="a"){
      this.profile = null;
    }else{
      this.profile = profile;
      }
    this.customerName = name;
    this.fetchUsers();
    this.fetchCredits();
  },
  computed: {
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
    async fetchUsers() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/userinfo', {
          email: this.email,
        });
        this.users = response.data.data;
        this.uname = this.users.map(user=> user.name).join(",");
        this.uid = this.users.map(user=> user.identity).join(",");
        this.upw = "******";
        this.uemail = this.users.map(user=> user.email).join(",");
        this.ucreate = this.users.map(user=> user.created_at.substring(0, 10)).join(",");
      } catch (error) {
        console.error('Server responded with error:', error.response?.data || error.message);
        this.error = 'Failed to fetch credit information'; 
        this.loading = false;
      }
    },
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
    async remove() {
    const confirmMessage = '정말로 탈퇴하시겠습니까?';
    const userConfirmation = window.confirm(confirmMessage);

    if (userConfirmation) {
      const userInput = prompt('탈퇴하시려면 다음 글자를 따라 치세요: "탈퇴합니다."');

      if (userInput === '탈퇴합니다.') {
        try {
          const response = await axios.post('http://127.0.0.1:8000/remove', {
            email: this.email,
          });

          const user = response.data.data;
          console.log(user);

          alert('탈퇴되었습니다.');

          sessionStorage.clear();
          window.location.href = '/';
        } catch (error) {
          if (error.response) {
            if (error.response.status === 404) {
              this.errorMessage = '입력한 정보를 다시 확인해주세요.';
            } else if (error.response.status === 422) {
              this.errorMessage = '유효성 검사 오류: 입력한 정보를 다시 확인해주세요.';
            } else {
              this.errorMessage = '서버 에러가 발생했습니다. 나중에 다시 시도해주세요.';
            }
          } else {
            this.errorMessage = '네트워크 오류 또는 서버가 응답하지 않습니다.';
          }

          console.error('탈퇴 요청 중 오류 발생:', error);
        }
      } else {
        alert('입력한 글자가 맞지 않습니다. 탈퇴가 취소되었습니다.');
      }
    } else {
      alert('탈퇴가 취소되었습니다.');
    }
  },
    change(){
      window.location.href='/userpage2';
    }
  }
};
</script>
