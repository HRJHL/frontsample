<template>
<div class="w-full px-[30%] lg:px-[20%] md:px-[15%] sm:px-[5%] py-[10%]" style="background-color:#FFFFF">
    <div class="flex w-full flex-col items-center justify-center">
      <!-- 배너 이미지-->
      <img src="@/assets/sendgo/logo.svg" class="w-[300px] lg:w-[250px] md:w-[200px] sm:w-[100px] h-auto mb-[40px] lg:mb-[30px] md:mb-[20px] sm:mb-[20px]">
    </div>
    <div class="flex justify-center mb-[50px] md:mb-[30px] sm:mb-[20px] text-[45px] md:text-[35px] sm:text-[25px] font-bold">회원님의 정보</div>
    <div class="flex flex-row justify-center items-center mb-[50px] gap-[30px]">
      <div class="px-[20px] py-[20px] rounded-[22px]" style="background-color:#0000001A">
        <img :src="`http://127.0.0.1:8000/storage/${profile}`" v-if="profile" class="w-[100px] md:w-[80px] sm:w-[50px] h-auto">
          <img v-else src="@/assets/icon2/person.svg" class="w-[100px] md:w-[80px] sm:w-[50px] h-auto" alt="Default Image">
      </div>
      <div class="flex">
        <div class="arrow"></div>
        <div class="arrow2"></div>  
      </div>
      <div></div>
      <div class="px-[20px] py-[20px] rounded-[22px]" style="background-color:#0000001A">
        <img v-if="isImage" :src="selectedImage" class="w-[100px] h-auto cursor-pointer" @click="openFileInput">
        <img v-else src="@/assets/icon2/white_plus.svg" id="img" class="w-[100px] md:w-[80px] sm:w-[50px] h-auto cursor-pointer" @click="openFileInput">
         <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange"/>
      </div>
    </div>
    <div class="flex justify-center mb-[50px]">
      <button @click="changeImage()" class="px-[30px] py-[10px] text-[20px] sm:text-[14px] rounded-[8px]"
      style="background-color:#4F44F0; color:#FFFFFF"
      >프로필 바꾸기</button>
    </div>
    <div class="flex flex-row mb-[50px] text-[32px] xl:text-[20px] lg:text-[18px] md:text-[14px] sm:text-[8px] border-t" style="border-color:#0000002E">
      <div class="flex-col flex-auto font-semibold" style="background-color:#F0F0F0">
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">이름</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">아이디</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">기존 비밀번호</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">변경 비밀번호</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">이메일</div>
        <div class="flex px-[20px] py-[10px] border-b" style="border-color:#0000002E">가입날짜</div>
      </div>
      <div class="flex-auto flex-col ">
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{uname}}</div>
        <div class="flex flex-row px-[20px] py-[10px] sm:py-[2px] gap-[10px] border-b " style="border-color:#0000002E">
          <input type="text" :placeholder="uid" maxlength="16" id="newId"
              class="flex-auto text-[18px] xl:text-[12px] lg:text-[10px] md:text-[14px] sm:text-[8px] px-[20px] py-[10.5px] xl:py-[6px] lg:py-[6px] md:py-[0px] sm:py-[8px] rounded-[8px]"
              style="background-color:#F4F5F6; color:#7B7B7B; outline:none" required>
              <button @click="changeId()" class="flex-auto text-[20px] xl:text-[12px] lg:text-[10px]  md:text-[10px] sm:text-[8px] rounded-[8px]"
              style="background-color:#4F44F0; color:#FFFFFF"
              >변경</button>
        </div>
        <div class="flex flex-row px-[20px] py-[10px] sm:py-[2px] gap-[10px] border-b " style="border-color:#0000002E">
          <input type="password" :placeholder="upw" maxlength="16" id="userPw"
              class="flex-auto text-[18px] xl:text-[12px] lg:text-[10px] md:text-[14px] sm:text-[8px] px-[20px] py-[10.5px] xl:py-[6px] lg:py-[6px] md:py-[0px] sm:py-[8px] rounded-[8px]"
              style="background-color:#F4F5F6; color:#7B7B7B; outline:none" required>
        </div>
        <div class="flex flex-row px-[20px] py-[10px] sm:py-[2px] gap-[10px] border-b " style="border-color:#0000002E">
          <input type="password" :placeholder="upw" maxlength="16" id="newPw"
              class="flex-auto text-[18px] xl:text-[12px] lg:text-[10px] md:text-[14px] sm:text-[8px] px-[20px] py-[10.5px] xl:py-[6px] lg:py-[6px] md:py-[0px] sm:py-[8px] rounded-[8px]"
              style="background-color:#F4F5F6; color:#7B7B7B; outline:none" required>
              <button @click="changePw()" class="flex-auto text-[20px] xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[8px] rounded-[8px]"
              style="background-color:#4F44F0; color:#FFFFFF"
              >변경</button>
        </div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{uemail}}</div>
        <div class="flex px-[20px] py-[10px] border-b " style="border-color:#0000002E">{{ucreate}}</div>
      </div>
  </div>
  <div class="flex flex-row justify-center gap-[40px]">
    <button @click="changeAll()" class="text-[20px] sm:text-[14px] px-[20px] py-[20px] sm:py-[10px] font-semibold rounded-[8px]" style="background-color:#4E81FF; color:#FFFFFF">모두 변경</button>
    <button @click="home()" class="text-[20px] sm:text-[14px] px-[20px] py-[20px] sm:py-[10px] font-semibold rounded-[8px]" style="background-color:#4E81FF; color:#FFFFFF">돌아가기</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      loading: true,
      error: null,
      name: '',
      email: '',
      uname: '',
      uid: '',
      upw: '',
      uemail: '',
      ucreate: '',
      newid: '',
      userpw: '',
      newpw: '',
      isImage: false,
      selectedImage: '',
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
    this.fetchCredits();
  },
  methods: {
    async fetchCredits() {
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
    changeId(){
      this.newid = document.getElementById('newId').value;
      axios.post('http://127.0.0.1:8000/changeId', {
        identity: this.newid,
        email : this.email,
      })
      .then(response => {
        const user = response.data.data;
        console.log(user);
        alert("아이디가 변경되었습니다.\n다시 로그인해주세요");
        sessionStorage.clear();
        window.location.href ='/';
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.errorMessage = '입력한 정보를 다시 확인해주세요.';
          alert("값을 입력해 주세요");
        } else if (error.response && error.response.status === 422) {
          this.errorMessage = '유효성 검사 오류: 입력한 정보를 다시 확인해주세요.';
          alert("정확한 정보를 입력해 주세요");
        } else {
          this.errorMessage = '서버 에러가 발생했습니다. 나중에 다시 시도해주세요.';
          alert("정확한 정보를 입력해 주세요");
        }
        console.error(error);
      });
    },
    changePw(){
      this.newpw = document.getElementById('newPw').value;
      this.userpw = document.getElementById('userPw').value;
      axios.post('http://127.0.0.1:8000/changePw', {
        email : this.email,
        npassword : this.newpw,
        password : this.userpw,
      })
      .then(response => {
        const user = response.data.data;
        console.log(user);
        alert("비밀번호 변경되었습니다.\n다시 로그인해주세요")
        sessionStorage.clear();
        window.location.href ='/';
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.errorMessage = '입력한 정보를 다시 확인해주세요.';
          alert("값을 입력해 주세요");
        } else if (error.response && error.response.status === 422) {
          this.errorMessage = '유효성 검사 오류: 입력한 정보를 다시 확인해주세요.';
          alert("정확한 정보를 입력해 주세요");
        } else {
          this.errorMessage = '서버 에러가 발생했습니다. 나중에 다시 시도해주세요.';
          alert("정확한 정보를 입력해 주세요");
        }
        console.error(error);
      });
    },
    changeAll(){
      this.newid = document.getElementById('newId').value;
      this.newpw = document.getElementById('newPw').value;
      this.userpw = document.getElementById('userPw').value;
      axios.post('http://127.0.0.1:8000/changeAll', {
        identity: this.newid,
        npassword : this.newpw,
        password : this.userpw,
        email : this.email,
      })
      .then(response => {
        const user = response.data.data;
        console.log(user);
        alert("사용자 정보가 변경되었습니다.\n다시 로그인해주세요")
        sessionStorage.clear();
        window.location.href ='/';
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.errorMessage = '입력한 정보를 다시 확인해주세요.';
          alert("값을 입력해 주세요");
        } else if (error.response && error.response.status === 422) {
          this.errorMessage = '유효성 검사 오류: 입력한 정보를 다시 확인해주세요.';
          alert("정확한 정보를 입력해 주세요");
        } else {
          this.errorMessage = '서버 에러가 발생했습니다. 나중에 다시 시도해주세요.';
          alert("정확한 정보를 입력해 주세요");
        }
        console.error(error);
      });
    },
    
    home(){
      window.location.href="/";
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
        this.isImage = true;
      }
    },
    async changeImage() {
      const formData = new FormData();
      formData.append('image', this.$refs.fileInput.files[0]);
      formData.append('email', this.email);

      try {
        const response = await axios.post('http://127.0.0.1:8000/changeImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Image uploaded successfully:', response.data);
        alert("사용자 정보가 변경되었습니다.\n다시 로그인해주세요")
        sessionStorage.clear();
        window.location.href ='/';
      } catch (error) {
        console.error('Error uploading image:', error.response?.data || error.message);
        alert("사진을 넣어 주세요");
      }
    },
  }
};
</script>

<style scoped>
.arrow {
    position: relative;
}

.arrow::after {
    position: absolute;
    left: 0; 
    top: -10px; 
    content: '';
    width: 20px; 
    height: 20px;
    border-top: 5px solid #000; 
    border-right: 5px solid #000; 
    transform: rotate(225deg);
}

.arrow2 {
    position: relative;
}

.arrow2::after {
    position: absolute;
    left: 10px; 
    top: -10px; 
    content: '';
    width: 20px;
    height: 20px; 
    border-top: 5px solid #000;
    border-bottom: 5px solid #000; 

}
</style>