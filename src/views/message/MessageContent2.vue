<template class="tem">
  <section class="px-[19%] zl:px-[16%] xl:px-[5%] lg:px-[5%] md:px-[5%] sm:px-[5%] py-[56px]" style="background-color:#F2F4F8">
    <section class="flex w-full px-[7%] py-[53px] rounded-[24px]" style="background-color:#FFFFFF">
      <section class="w-full flex-col">
      <article class="flex flex-col items-start gap-[32px] border-b">
        <div class="text-[38px] font-bold w-full text-center">메시지 전송</div>
        <div class="flex w-full flex-row gap-[2%]">
          <button class="flex-1 py-[20px] sm:py-[8px] rounded-[8px] text-[22px] sm:text-[14px] font-medium"
          @click="change(1)" ref ="check1"
          :style="getStyle(1)">문자메시지</button>
          <button class="flex-1 rounded-[8px] text-[22px] sm:text-[14px] font-medium"
          @click="change(2)" ref ="check2"
          :style="getStyle(2)">알림톡(카카오)</button>
          <button class="flex-1 rounded-[8px] text-[22px] sm:text-[14px] font-medium"
          @click="change(3)" ref ="check3"
          :style="getStyle(3)">친구톡(카카오)</button>
        </div>
        <div class="flex flex-col mb-[32px]">
          <span class="text-[16px] sm:text-[10px]" style="color:#525252">간편하게 한 화면에서 단문, 장문 포토메시지를 발송할 수 있습니다.</span>
          <span class="text-[16px] sm:text-[10px]" style="color:#525252">90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.</span>
        </div>
      </article>
      <section class="flex flex-row md:justify-end sm:justify-end gap-[68px] py-[32px] border-b">
        <article class="flex-1">
          <article class="flex flex-col gap-[16px] border-b">
            <div class="text-[22px] font-semibold">수신번호</div>
            <div class="flex flex-row gap-[9px]">
              <input type="text" v-model="phoneNumber" @input="formatPhoneNumber" maxlength="13" id="getnum" placeholder="휴대폰번호(숫자만 입력)" 
              class="flex-auto text-[18px] px-[20px] py-[20px] lg:py-[14px] sm:text-[12px] rounded-[8px]"
              style="background-color:#F4F5F6; color:#7B7B7B; outline:none">
              <button class="flex-auto text-[20px] lg:text-[16px] rounded-[8px]"
              style="background-color:#4F44F0; color:#FFFFFF" @click="printNum()"
              >+ 추가</button>
            </div>
            <div class="flex flex-col border rounded-[8px] px-[20px] py-[20px]">
            <textarea readonly id="shownum" placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.
최대1만자건까지 붙여넣기 가능합니다."
            class="h-[140px] text-[18px] zl:text-[14px] sm:text-[12px]" style="outline:none; resize:none;"></textarea>
            <div class="flex flex-row justify-between">
              <span class="text-[18px] zl:text-[14px] sm:text-[12px] font-semibold">총 <span id="count" style="color:#5E2BFF">0</span>명</span>
              <span class="text-[18px] zl:text-[14px] sm:text-[12px] border-b" id="delete" @click="allDelete()" style="color:#6A6A6A; border-color:#6A6A6A">모두 삭제</span>
            </div>
            
            </div>
            <div class="flex flex-row w-full gap-[8px] mb-[32px]">
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] py-[20px] zl:py-[10px] lg:py-[10px] sm:py-[10px] items-center justify-center border rounded-[8px]">
              <img src="@/assets/icon2/person.svg" class="w-[32px] sm:w-[24px] h-auto"/>
주소록 불러오기</button>
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] items-center justify-center border rounded-[8px]">
               <img src="@/assets/icon2/file.svg" class="w-[32px] sm:w-[24px] h-auto"/>
              파일 불러오기</button>
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] items-center justify-center border rounded-[8px]">
               <img src="@/assets/icon2/clock.svg" class="w-[32px] sm:w-[24px] h-auto"/>
              최근 전송 내역</button>
            </div>
          </article>
          <article class="flex flex-col py-[32px] gap-[16px] border-b">
            <div class="text-[22px] font-semibold">발신번호</div>
            <div class="flex flex-row justify-between py-[20px] px-[20px] rounded-[8px]" style="background-color:#F4F5F6">
            <input type="text" v-model="phoneNumber2" @input="formatPhoneNumber2" maxlength="13" name="resphone" list="phonenumber" placeholder="전송할 발신번호 선택" class="flex-auto appearance-none" style="background-color:#F4F5F6; outline:none">
             <img src="@/assets/icon2/bottom_arrow.svg" class=""/>
             <datalist id="phonenumber">
              <option value="010-7548-3032"></option>
              <option value="070-7575-3852"></option>
              <option value="02-1833-5770"></option>
             </datalist>
          </div>
          </article>
          <article class="flex flex-col py-[32px] gap-[16px]">
            <div class="text-[22px] font-semibold">메시지 입력</div>
            <section class="flex flex-col border p-[24px] rounded-[8px]"
            style="background-color:#F6F6F6; border-color:#E1E3E5">
              <article class="flex flex-col gap-[16px] border-b">
                <input type="text" v-model="inputText2" @input="checkByteLimit2" id="tText" name="title" placeholder="제목을 입력해주세요 (단문 SMS는 제외, 최대 30byte)" 
                @keydown="postText(), postText2()" class="w-full p-[20px] zl:text-[14px] xl:text-[12px] sm:text-[10px] border rounded-[8px]" style="border-color:#CECECE; outline:none">
                <div class="flex justify-between">
                  <button id="short" @click="SL()" class="text-[16px] sm:text-[12px] px-[18px] py-[8px] rounded-[22px]" style="background-color:#5E2BFF; color:#FFFFFF">
                    단문 SMS</button>
                  <div class="flex flex-row items-center gap-[11px] sm:text-[12px]">
                  <span class=""><span class="text-16px " id="View_byte" style="color:#5E2BFF">0</span> /90byte</span>
                  <img src="@/assets/icon2/reroll.svg" @click="tcDelete()" class="w-[32px] sm:w-[24px] h-auto"/>
                  </div>
                </div>
                <div class="flex flex-col p-[20px] rounded-[8px] mb-[25px] border" style="background-color:#FFFFFF; border-color:#CECECE">
                <textarea id="cText" v-model="inputText" @input="checkByteLimit" @keydown="postText(),postText2()" placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,
이미지 추가 시 포토 문자로 자동 전환 됩니다."
            class="h-[140px] text-[18px] zl:text-[14px] lg:text-[12px] sm:text-[12px]" style="outline:none; resize:none;"></textarea>
                <div class="flex flex-row justify-end gap-[12px] zl:text-[15px] xl:text-[13px] lg:text-[10px] sm:text-[10px]">
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] sm:px-[10px] sm:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">치환코드</button>
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] sm:px-[10px] sm:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">템플릿</button>
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] sm:px-[10px] sm:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">문자도구</button>
                </div>
                </div>
              </article>
              <article class="flex flex-row justify-between items-center py-[30px] border-b">
                <div class="text-[18px] lg:text-[14px] sm:text-[12px] font-semibold">광고성 문자(080 수신거부번호 포함)</div>
                <div>
                  <label class="toggle_switch">
                  <input type="checkbox">
                  <span class="slider"></span>
                  </label>
                </div>
              </article>
              <article class="flex flex-col py-[10px] gap-[16px]">
                <div class="text-[18px] font-semibold">
                  <span>이미지 추가</span>
                </div>
                  <div>
                    <label class="flex flex-row gap-[10px]" for="fileInput">
                      <img v-if="selectedImage1" :src="selectedImage1" class="w-[100px] h-auto cursor-pointer" @click="openFileInput">
                      <img v-else src="@/assets/icon2/white_plus.svg" id="img1" class="w-[100px] h-auto cursor-pointer">
                      <img v-if="selectedImage2" :src="selectedImage2" class="w-[100px] h-auto cursor-pointer" @click="openFileInput">
                      <img v-else src="@/assets/icon2/white_plus.svg" id="img2" class="hidden w-[100px] h-auto cursor-pointer">
                      <img v-if="selectedImage3" :src="selectedImage3" class="w-[100px] h-auto cursor-pointer" @click="openFileInput">
                      <img v-else src="@/assets/icon2/white_plus.svg" id="img3" class="hidden w-[100px] h-auto cursor-pointer">
                      </label>
                    <input type="file" id="fileInput" style="display: none;" accept="image/*" @change="onFileChange">
                  </div>
                <div class="lg:text-[14px] sm:text-[12px]">
                <span style="color:#797979">• 이미지는 최대 3장까지 첨부 가능합니다.</span><br>
                <span style="color:#797979">• 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</span>
                </div>
              </article>
            </section>
          </article>
        </article>

        <article class="flex-1 md:absolute sm:absolute md:h-[1500px] sm:h-[1500px] md:flex sm:flex">
          <!--디바이스-->
          <div class="device sticky top-[100px] md:top-[120px] sm:top-[150px] flex h-[40%] rounded-[22px] mb-[40px]"
          style="background-color:#EAF8FF; border: 5px solid #4D4D4D;">
          <img src="@/assets/icon2/bottom_arrow.svg" class="btnEvent w-[46px] h-[46px] rotate-90 mt-[27px] ml-[18px]"/>
         <div class="flex w-full flex-col px-5 py-20 gap-[20px]">
          <div class="flex h-auto rounded-[22px] px-3" style="background-color: #F2D3F3">
            <div id="title_text" class="text-[40px]"></div>
          </div>
          <div class="flex h-auto rounded-[8px] px-3" style="background-color: #FFDF22">
            <div id="content_text" class="text-[20px]"></div>
          </div>
         </div>
         </div>
          <div ref="deviceElement" class="device sticky top-20 md:top-[120px] sm:top-[150px] flex h-[0px] w-[0px] md:border-[5px] sm:border-[5px] rounded-[22px] mb-[40px]"
          style="background-color:#EAF8FF; border-color: #4D4D4D;">
          <img src="@/assets/icon2/bottom_arrow.svg" @click="handleClick2" class="btnEvent w-[46px] h-[46px] rotate-90 mt-[27px] ml-[18px]"/>
          <div class="px-10">
         <div id="title_text2" ref="titleElement" class="hidden md:block sm:block tcon text-[0px]"></div>
         <div id="content_text2" ref="contentElement" class="hidden md:block sm:block tcon text-[0px]"></div>
         </div>
          </div>
          <div @click="handleClick" ref ="checkElement" class="checkbtn btnEvent sticky top-40 md:flex md:w-full md:justify-end w-[0px] h-[0px]">
            <img src="@/assets/icon2/bottom_arrow.svg" class="checkdevice w-[0px] h-[0px] rotate-90"/>
          </div>
        </article>
      </section>
      <section class="flex flex-col py-[32px] gap-[16px] border-b">
        <div class="text-[22px] font-semibold">
          <span class="">발송 설정</span>
        </div>
        <article class="flex w-full flex-row">
          <div class="flex flex-1 gap-[15px]">
        <button id="Isend" @click="Csend(1)" class="flex-1 flex py-[20px] zl:py-[12px] sm:py-[10px] text-[22px] sm:text-[18px] gap-[8px] justify-center items-center border rounded-[8px]" :style="gSend(1)">
        <img id="bcheck" src="@/assets/icon2/blue_check.svg" class="w-[32px] h-auto"/>
        즉시발송</button>
        <button id="Rsend" @click="Csend(2)" class="flex-1 flex text-[22px] sm:text-[18px] gap-[8px] justify-center items-center border rounded-[8px]" :style="gSend(2)">
        <img  id="gcheck" src="@/assets/icon2/grey_check.svg" class="w-[32px] h-auto"/>
        예약발송</button>
        </div>
        <div class="flex-1 md:flex-none sm:flex-none"></div>
        </article>
      </section>
      <section class="flex py-[20px]">
        <button onclick="location.href='/credit'" class="flex w-full justify-center items-center text-[22px] zl:text-[18px] sm:text-[18px] py-[20px] zl:py-[16px] sm:py-[14px] font-medium rounded-[8px]" style="background-color:#4F44F0; color:#FFFFFF">
          발송하기</button>
      </section>
      </section>
    </section>
  </section>
</template>


<script>
export default {
  name: 'MessageContent2',
  data() {
    return {
      selectedCheck: 1,
      globalCount: 0,
      phoneNumber: '',
      phoneNumber2: '',
      inputText: '',
      byteLimit: 90,
      byteCount: 0,
      inputText2: '',
      byteLimit2: 30,
      byteCount2: 0,
      selectedImage1: null,
      selectedImage2: null,
      selectedImage3: null
    };
  },
  methods: {
    handleClick() {
      const deviceElement = this.$refs.deviceElement;
      const checkElement = this.$refs.checkElement;
      const titleElement = this.$refs.titleElement;
      const contentElement = this.$refs.contentElement;
      deviceElement.style.display = 'block';
      checkElement.style.display='none';
      titleElement.style.fontSize='40px';
      contentElement.style.fontSize='20px';
    },
    handleClick2() {
      const deviceElement = this.$refs.deviceElement;
      const checkElement = this.$refs.checkElement;
      const titleElement = this.$refs.titleElement;
      const contentElement = this.$refs.contentElement;
      deviceElement.style.display = 'none';
      checkElement.style.display='block';
      titleElement.style.fontSize='0px';
      contentElement.style.fontSize='0px';
    },
    getStyle(checkNumber) {
      if (this.selectedCheck === checkNumber) {
        return {
          background: '#4F44F0',
          color: '#FFFFFF'
        };
      } else {
        return {
          background: '#F5F6FA',
          color: '#555555'
        };
      }
    },
    change(checkNumber) {
      this.selectedCheck = checkNumber;
    },
    gSend(checkNumber) {
      if (this.selectedCheck === checkNumber) {
        return {
          background: '#FFFFFF',
          color: '#4F44F0',
          border: '2px solid #4F44F0',
        };
      } else {
        return {
          background: '#F2F5F9',
          color: '#747B84',
        };
      }
    },
    Csend(checkNumber) {
      this.selectedCheck = checkNumber;
    },
    printNum() {
      const gnum = document.getElementById('getnum').value;
      var shownum = document.getElementById('shownum');
      var count = document.getElementById('count');
      if(gnum != ''){
        shownum.value += gnum +'\n';
      this.globalCount++;
      count.innerText = this.globalCount;
      }
    },
    formatPhoneNumber() {
      let value = this.phoneNumber.replace(/[^0-9]/g, ''); // 숫자 이외의 문자는 모두 제거
      let formattedValue = '';

      if (value.length <= 3) {
        formattedValue = value;
        } else if (value.length <= 6) {
          formattedValue = value.substr(0, 3) + '-' + value.substr(3);
          } else if (value.length <= 10) {
            formattedValue = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6);
            } else {
              formattedValue = value.substr(0, 3) + '-' + value.substr(3, 4) + '-' + value.substr(7);
              }
              this.phoneNumber = formattedValue; 
    },
    formatPhoneNumber2() {
      let value = this.phoneNumber2.replace(/[^0-9]/g, ''); // 숫자 이외의 문자는 모두 제거
      let formattedValue = '';

      if (value.length <= 3) {
        formattedValue = value;
        } else if (value.length <= 6) {
          formattedValue = value.substr(0, 3) + '-' + value.substr(3);
          } else if (value.length <= 10) {
            formattedValue = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6);
            } else {
              formattedValue = value.substr(0, 3) + '-' + value.substr(3, 4) + '-' + value.substr(7);
              }
              this.phoneNumber2 = formattedValue; 
    },
    allDelete() {
      var shownum = document.getElementById('shownum');
      shownum.value ="";
      var count = document.getElementById('count');
      this.globalCount =0;
      count.innerText = this.globalCount;
    },
    postText() {
      var tText = document.getElementById('tText').value;
      var cText = document.getElementById('cText').value;
      var title = document.getElementById('title_text');
      var content = document.getElementById('content_text');
      title.innerText = tText;
      content.innerText = cText;
    },
    postText2() {
      var tText = document.getElementById('tText').value;
      var cText = document.getElementById('cText').value;
      var title2 = document.getElementById('title_text2');
      var content2 = document.getElementById('content_text2');
      title2.innerText = tText;
      content2.innerText = cText;
    },
    tcDelete() {
      var title = document.getElementById('title_text');
      var content = document.getElementById('content_text');
      var title2 = document.getElementById('title_text2');
      var content2 = document.getElementById('content_text2');
      var tText = document.getElementById('tText');
      var cText = document.getElementById('cText');
      var vbyte = document.getElementById('View_byte');
      title.innerText = "";
      content.innerText = "";
      title2.innerText = "";
      content2.innerText = "";
      tText.value = "";
      cText.value = "";
      vbyte.innerText ="0";
      this.inputText ="";
      this.inputText2 ="";
    },
    checkByteLimit() {
      var vbyte = document.getElementById('View_byte');
      var short = document.getElementById('short');
      this.byteCount = new Blob([this.inputText]).size;
      vbyte.innerText = this.byteCount;
      if(this.byteCount > this.byteLimit) {
        short.innerText = "장문 SMS";
      }
    },
    checkByteLimit2() {
      var short = document.getElementById('short');
      this.byteCount2 = new Blob([this.inputText2]).size;
      if(short.innerText =="단문 SMS"){
        this.inputText2 = this.inputText2.slice(0, this.inputText2.length -1);
      }
      if(this.byteCount2 > this.byteLimit2) {
        this.inputText2 = this.inputText2.slice(0, this.inputText2.length -1);
      }
    },
    SL(){
      var short = document.getElementById('short');
      if(short.innerText =="단문 SMS"){
        short.innerText = "장문 SMS";
      }
      else{
        short.innerText = "단문 SMS"
        this.inputText2 = "";
      }
    },
    openFileInput() {
      document.getElementById('fileInput').click();
    },
    onFileChange(event) {
  const file = event.target.files[0];
  if (file && document.getElementById('img2') && document.getElementById('img2').style.display !== "block") {
    this.selectedImage1 = URL.createObjectURL(file);
    this.$emit('file-selected', file);
    document.getElementById('img2').style.display = "block";
    } else {
      if (document.getElementById('img2') && document.getElementById('img2').style.display === "block" &&
        document.getElementById('img3') && document.getElementById('img3').style.display !== "block") {
          this.selectedImage2 = URL.createObjectURL(file);
          this.$emit('file-selected', file);
          document.getElementById('img3').style.display = "block";
          } else {
            if (document.getElementById('img3') && document.getElementById('img3').style.display === "block") {
              this.selectedImage3 = URL.createObjectURL(file);
              this.$emit('file-selected', file);
          }
        }
      }
    }
  }
};

</script>

<style scoped>
.toggle_switch { display: inline-block; position: relative; width: 59px; height: 32px; } 
.toggle_switch input[type="checkbox"] { overflow: hidden; position: absolute; width: 1px; height: 1px; margin: -1px; font-size: initial; clip: rect(0 0 0 0); } 
.toggle_switch .slider { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: #ccc; border-radius: 34px; cursor: pointer; transition: 0.4s; } 
.toggle_switch input[type="checkbox"]:checked + .slider { background-color: #007bff; } 
.toggle_switch .slider::before { content: ""; position: absolute; top: 4px; left: 3px; width: 24px; height: 24px; background-color: #fff; border-radius: 50%; transition: 0.4s; } 
.toggle_switch input[type="checkbox"]:checked + .slider::before { transform:translateX(30px); } 


@media (max-width: 768px) {
    .device {
    width:300px;
    height: 500px;
    margin-left:-30px;
    display: none;
    position: sticky;
  }

  .checkbtn{
    width: 46px;
    height: 46px;
  }
  .checkdevice {
    width: 46px;
    height: 46px;
    background-color: #EAF8FF;
    border-bottom-right-radius: 22px;
    border-bottom-left-radius: 22px;
    transform: rotate(90deg);
  }
}

</style>
