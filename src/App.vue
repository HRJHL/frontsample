<template>
  <div class="content">
    <header :class="['header',{'scrolled': isScrolled && isRootPath, 'not-root': !isRootPath }]" class="flex w-full fixed z-40 border-b">
      <nav class="navi w-full ml-[12.5%] gap-[18%] h-[81px]">
        <div class="flex items-center">
          <router-link to="/">
          <img :src="logoSrc" class="w-[142px] h-auto">
          </router-link>
        </div>
        <div class="flex w-full items-center">
        <div class="navbar flex-1 flex gap-[20%] md:gap-[20%] sm:gap-[20%]">
          <router-link v-if="isLoggedIn" to="/message" @click="this.isState=false" class="message text-[20px] md:text-[14px] sm:text-[10px] font-semibold">메시지</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'"  class="text-[20px] md:text-[14px] sm:text-[10px] font-semibold">메시지</button>
          <router-link v-if="isLoggedIn" to="/credit" @click="this.isState=false" class="credit text-[20px] md:text-[14px] sm:text-[10px] font-semibold">크레딧</router-link>
          <button v-if="!isLoggedIn" onclick="location.href='/login'" class="text-[20px] md:text-[14px] sm:text-[10px] font-semibold">크레딧</button>

        </div>
        <div class="flex-1 flex justify-end items-center gap-[10px] pr-[100px] md:pr-[80px] sm:pr-[30px]">
          <div v-if="isLoggedIn">
          <img v-if="profile" :src="`http://127.0.0.1:8000/storage/${profile}`" class="w-[50px] md:w-[30px] sm:w-[20px] h-auto">
          <img v-else src="@/assets/icon2/person.svg" class="w-[50px] md:w-[30px] sm:w-[20px] h-auto" alt="Default Image">
          </div>
          <div v-if="isLoggedIn" @click="state()" class="text-[20px] mr-[45px] md:text-[14px] sm:text-[10px] font-semibold">{{ userName }}님</div>
          <div v-if="isState" class="absolute border shoadow top-[80px] text-[20px] gap-[5px] px-[40px] py-[10px] " style="background-color: #FFFFFF; color:black;">
            <div @click="user()">회원 정보</div>
            <div v-if="isManeger">
              <div>--------</div>
              <div @click="maneger()">관리자</div>
            </div>
            <div>--------</div>
            <div @click="logout()">로그아웃</div>
          </div>
          <router-link v-if="!isLoggedIn" to="/login" class="text-[20px] sm:text-[10px] font-semibold">로그인</router-link>
        </div>
        </div>
      </nav>
      <div v-if="isChat" class=" absolute w-[300px] h-[500px] top-[100px] right-[50px] sm:right-[30px] p-[20px] rounded-[8px] border" style="background-color:#ffffff">
        <div class="flex flex-col gap-[10px]">
          <div class="flex flex-row gap-[20px] border-b pb-[10px] mb-[10px]" style="border-color:black">
            <div>
              <img src="@/assets/amuz.png" class="w-[50px]">
            </div>
            <div class="flex text-[30px] font-semibold" style="color:black">Sendgo</div>
          </div>
          <div class="flex flex-col p-[10px] rounded-[8px] gap-[10px]" style="background-color:skyblue">
            <div class="flex flex-row gap-[20px]">
              <div>
                <img src="@/assets/icon2/person.svg">
              </div>
              <div class="text-[18px]" style="color:black">{{ userName }}님</div>
            </div>
            <div class="flex justify-center rounded-[8px]" @click="Mess()" style="background-color:white; color:black"> 문의하기</div>
          </div>
          <div class="flex flex-col p-[10px] rounded-[8px] gap-[10px]" style="background-color:skyblue">
            <div class="flex flex-row gap-[20px]">
              <div>
                <img src="@/assets/icon2/person.svg">
              </div>
              <div class="text-[18px]" style="color:black">관리자</div>
            </div>
            <div class="flex justify-center rounded-[8px]" @click="MessA()" style="background-color:white; color:black"> 답변보기</div>
          </div>
          <div class="flex flex-row h-full">
            <div class="flex items-center" style="color:black"></div>
          </div>
        </div>
        <div class="flex flex-row justify-between px-[20px] pt-[150px]">
          <div><img src="@/assets/icon2/person.svg" @click="home()"></div>
          <div><img src="@/assets/icon2/clock.svg" @click="Mess()"></div>
          <div><img src="@/assets/icon2/reroll.svg" @click="reset()"></div>
        </div>
      </div>
      <div v-if="isMess" class=" absolute w-[300px] h-[500px] top-[100px] right-[50px] sm:right-[30px] p-[20px] rounded-[8px] border" style="background-color:#ffffff">
        <div class="flex flex-col h-[372px] rounded-[8px] mb-[10px] px-[10px] py-[10px]" style="background-color:skyblue; overflow-y: auto;">
          <div class="border-b pb-[10px] mb-[10px] font-bold" style="border-color:black; color:black;">문의페이지</div>
          <div v-for="(message, index) in combinedMessages" :key="index" :class="{'flex justify-end': index % 2 === 0, 'flex justify-start': index % 2 !== 0}" class="mb-[10px] px-[10px]">
    <p class="text-black rounded-[8px] px-[10px] py-[5px]" style="background-color:#ffffff">{{ message }}</p>
  </div>
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="궁금한점을 질문해 주세요" class="flex w-full px-[10px] py-[5px] border" style="color:black">
        <div class="flex flex-row justify-between px-[20px] pt-[10px]">
          <div><img src="@/assets/icon2/person.svg" @click="home()"></div>
          <div><img src="@/assets/icon2/clock.svg" @click="Mess()"></div>
          <div><img src="@/assets/icon2/reroll.svg" @click="reset()"></div>
        </div>
      </div>
      <div v-if="isLoggedIn" class="absolute w-[50px] sm:w-[30px] h-auto top-[15px] sm:top-[25px] right-[50px] sm:right-[30px]">
        <img src="@/assets/amuz.png" @click="Chat()" class="rounded-[8px]">
      </div>
    </header>
    <router-view class="mt-[5rem]"/>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      isLoggedIn: false,
      isState: false,
      isChat: false,
      isMess: false,
      isManeger: false,
      userName: '',
      isScrolled: false,
      profile: '',
      newMessage: '',
      messages: [],
      messages2: [],
      email: '',
    };
  },
  computed: {
    isRootPath() {
      return this.$route.path === '/';
    },
    logoSrc() {
      if(this.isRootPath){
        return this.isScrolled ? require('@/assets/logo.svg') : require('@/assets/logo2.svg');
      } else {
        return require('@/assets/logo.svg');
      }
    },
    combinedMessages() {
      // messages와 messages2 배열을 번갈아가며 합친 배열 반환
      return this.messages.flatMap((msg, i) => [msg, this.messages2[i]]);
    },
  },
  mounted() {
    let loggedIn = sessionStorage.getItem("logg");
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    let profile = sessionStorage.getItem("profile");
    this.email = email;
    this.isLoggedIn = loggedIn;
    this.userName = name;
    if(profile=="a"){
      this.profile = null;
    }else{
      this.profile = profile;
      }
    this.isState = false;
    window.addEventListener('scroll', this.handleScroll);
    if(this.email=="jinho99kr@gmail.com"){
      this.isManeger = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    state(){
    if (this.isState == false) {
        this.isState = true;
    } else {
        this.isState = false;
    }
    },
    logout() {
      sessionStorage.clear();
      this.isState = false;
      window.location.href ='/';
      },
    user(){
      this.isState = false;
      window.location.href="/userpage";
    },
    maneger() {
      this.isState = false;
      window.location.href="/manegerpage";
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    Chat() {
      if(this.isChat==false && this.isMess==false){
        this.isChat = true;
      }
      else{
        this.isChat =false;
        this.isMess =false;
      }
    },
    Mess() {
      if(this.isMess==false){
        this.isMess = true;
        this.isChat = false;
      }
    },
    MessA() {
  if (this.isMess == false) {
    this.isMess = true;
    this.isChat = false;
    axios.post('http://127.0.0.1:8000/talkM', {
      email: this.email,
    })
    .then(response => {
      console.log('Server response:', response.data);
      if (response.data.data) {
        this.messages = response.data.data.map(chat => chat.message);      
        this.messages2 = response.data.data.map(chat => {
          if (chat.talk === null) {
            return '답변을 기다려 주세요'; 
          }
          return chat.talk;
        });    
        console.log('Chat data:', response.data.data);
      } else {
        console.log('No chat data found.');
      }
    })
    .catch(error => {
      console.error('Server responded with error:', error.response?.data || error.message);
      this.error = 'Failed to fetch chat information'; 
    });
  }
},

    home() {
      if(this.isChat==false){
        this.isChat = true;
        this.isMess = false;
      }
    },
    reset() {
      window.location.href ="/";
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push(this.newMessage);
        if(this.newMessage.includes("안녕")||this.newMessage.includes("하이")){
          this.messages2.push("안녕하세요.");
        }else{
          if(this.newMessage.includes("?")){
            axios.post('http://127.0.0.1:8000/chat', {
              email: this.email,
              message: this.newMessage,
              })
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.error(error);
              });
              this.messages2.push("문의가 접수되었습니다. 답변을 기다려 주세요");
          }
          else{
            this.messages2.push("'?' 를 포함해서 질문해 주세요");
          }
        }
        this.newMessage = '';
        this.$nextTick(() => {

          const container = this.$el.querySelector('.flex-col');
          container.scrollTop = container.scrollHeight;
        });
      }
    },
  },
};

</script>

<style>
.navbar a.router-link-active {
  position: relative; 
  color: blue;
}

.navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -40px;
  bottom: -25px; 
  width: 260%; 
  height: 3px; 
  background-color: blue;
}

.header {
  transition: background-color 0.3s ease;
  background-color: black;
  color: white;
}

.header.scrolled {
  background-color: white;
  color: black;
}

.header.scrolled, .header.not-root {
  background-color: white;
  color: black;
}
@media (max-width: 768px) {
  .navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -20px;
  bottom: -30px; 
  width: 200%; 
  height: 3px; 
  background-color: blue;
}
}

@media (max-width: 480px) {
  .navbar a.router-link-active::after {
  content: ''; 
  position: absolute; 
  left: -20px;
  bottom: -35px; 
  width: 240%; 
  height: 3px; 
  background-color: blue;
}
}
</style>
