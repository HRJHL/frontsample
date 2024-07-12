<template class="tem">
  <div class="px-[19%] zl:px-[16%] xl:px-[5%] lg:px-[5%] md:px-[5%] sm:px-[5%] py-[56px]" style="background-color:#F2F4F8">
    <div class="flex w-full px-[7%] py-[53px] rounded-[24px]" style="background-color:#FFFFFF">
      <div class="w-full flex-col">
      <div class="flex flex-col items-start gap-[32px] border-b">
        <div class="text-[38px] font-bold w-full text-center">메시지 전송</div>
        <div class="flex w-full flex-row gap-[2%]">
          <button class="flex-1 py-[20px] sm:py-[8px] rounded-[8px] text-[22px] sm:text-[18px] font-medium"
          style="background-color:#4F44F0; color:#FFFFFF;">문자메시지</button>
          <button class="flex-1 rounded-[8px] text-[22px] sm:text-[18px] font-medium"
          style="background-color:#F5F6FA; color:#555555;">알림톡(카카오)</button>
          <button class="flex-1 rounded-[8px] text-[22px] sm:text-[18px] font-medium"
          style="background-color:#F5F6FA; color:#555555;">친구톡(카카오)</button>
        </div>
        <div class="flex flex-col mb-[32px]">
          <span class="text-[16px] sm:text-[10px]" style="color:#525252">간편하게 한 화면에서 단문, 장문 포토메시지를 발송할 수 있습니다.</span>
          <span class="text-[16px] sm:text-[10px]" style="color:#525252">90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.</span>
        </div>
      </div>
      <div class="flex flex-row gap-[68px] py-[32px] border-b">
        <div class="flex-1">
          <div class="flex flex-col gap-[16px] border-b">
            <div class="text-[22px] font-semibold">수신번호</div>
            <div class="flex flex-row gap-[9px]">
              <input type="tel" name="pnumber" placeholder="휴대폰번호(숫자만 입력)" 
              class="flex-auto text-[18px] px-[20px] py-[20px] lg:py-[14px] rounded-[8px]"
              style="background-color:#F4F5F6; color:#7B7B7B">
              <button class="flex-auto text-[20px] lg:text-[16px] rounded-[8px]"
              style="background-color:#4F44F0; color:#FFFFFF"
              >+ 추가</button>
            </div>
            <div class="flex flex-col border rounded-[8px] px-[20px] py-[20px]">
            <textarea placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.
최대1만자건까지 붙여넣기 가능합니다."
            class="h-[140px] text-[18px] zl:text-[14px] sm:text-[12px]"></textarea>
            <div class="flex flex-row justify-between">
              <span class="text-[18px] zl:text-[14px] font-semibold">총 <span style="color:#5E2BFF">0</span>명</span>
              <span class="text-[18px] zl:text-[14px] border-b" style="color:#6A6A6A; border-color:#6A6A6A">모두 삭제</span>
            </div>
            
            </div>
            <div class="flex flex-row w-full gap-[8px] mb-[32px]">
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] py-[20px] zl:py-[10px] lg:py-[10px] sm:py-[10px] items-center justify-center border rounded-[8px]">
              <img src="@/assets/icon2/person.svg" class="w-[32px] h-auto"/>
주소록 불러오기</button>
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] items-center justify-center border rounded-[8px]">
               <img src="@/assets/icon2/file.svg" class="w-[32px] h-auto"/>
              파일 불러오기</button>
              <button class="flex-1 flex text-[16px] zl:text-[12px] lg:text-[10px] sm:text-[10px] items-center justify-center border rounded-[8px]">
               <img src="@/assets/icon2/clock.svg" class="w-[32px] h-auto"/>
              최근 전송 내역</button>
            </div>
          </div>
          <div class="flex flex-col py-[32px] gap-[16px] border-b">
            <div class="text-[22px] font-semibold">발신번호</div>
            <div class="flex flex-row justify-between py-[20px] px-[20px] rounded-[8px]" style="background-color:#F4F5F6">
            <input type="text" name="resphone" placeholder="전송할 발신번호 선택" style="background-color:#F4F5F6">
             <img src="@/assets/icon2/bottom_arrow.svg" class=""/>
          </div>
          </div>
          <div class="flex flex-col py-[32px] gap-[16px]">
            <div class="text-[22px] font-semibold">메시지 입력</div>
            <div class="flex flex-col border p-[24px] rounded-[8px]"
            style="background-color:#F6F6F6; border-color:#E1E3E5">
              <div class="flex flex-col gap-[16px] border-b">
                <input type="text" name="title" placeholder="제목을 입력해주세요 (단문 SMS는 제외, 최대 30byte)" 
                class="w-full p-[20px] zl:text-[14px] xl:text-[12px] sm:text-[10px] border rounded-[8px]" style="border-color:#CECECE">
                <div class="flex justify-between">
                  <button class="text-[16px] sm:text-[12px] px-[18px] py-[8px] rounded-[22px]" style="background-color:#5E2BFF; color:#FFFFFF">
                    단문 SMS</button>
                  <div class="flex flex-row items-center gap-[11px] sm:text-[12px]">
                  <span class="text-16px " style="color:#5E2BFF">0</span><span class="">/90byte</span>
                  <img src="@/assets/icon2/reroll.svg" class="w-[32px] sm:w-[24px] h-auto"/>
                  </div>
                </div>
                <div class="flex flex-col p-[20px] rounded-[8px] mb-[25px] border" style="background-color:#FFFFFF; border-color:#CECECE">
                <textarea placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,
이미지 추가 시 포토 문자로 자동 전환 됩니다."
            class="h-[140px] text-[18px] zl:text-[14px] lg:text-[12px] sm:text-[12px]"></textarea>
                <div class="flex flex-row justify-end gap-[12px] zl:text-[15px] lg:text-[10px]">
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">치환코드</button>
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">템플릿</button>
                  <button class="px-[25px] py-[12px] zl:px-[22px] zl:py-[10px] lg:px-[20px] lg:py-[10px] rounded-[22px]" style="background-color:#F5F5F5; color:#646464">문자도구</button>
                </div>
                </div>
              </div>
              <div class="flex flex-row justify-between py-[30px] border-b">
                <div class="text-[18px] lg:text-[14px] sm:text-[14px] font-semibold">광고성 문자(080 수신거부번호 포함)</div>
                <div>
                  <img src="@/assets/icon2/togle.png" class="w-[59px] lg:w-[42px] sm:w-[32px] h-auto"/>
                </div>
              </div>
              <div class="flex flex-col py-[10px] gap-[16px]">
                <div class="text-[18px] font-semibold">
                  <span>이미지 추가</span>
                </div>
                <img src="@/assets/icon2/white_plus.svg" class="w-[100px] h-auto"/>
                <div class="lg:text-[14px] sm:text-[12px]">
                <span style="color:#797979">• 이미지는 최대 3장까지 첨부 가능합니다.</span><br>
                <span style="color:#797979">• 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 md:absolute sm:absolute md:h-[1500px] md:felx sm:h-[1500px] md:flex md:w-[84%] sm:flex sm:w-[84%] md:justify-end sm:justify-end sm:flex">
          <div ref="deviceElement" class="device sticky top-20 md:top-[120px] sm:top-[150px] flex h-[775px] rounded-[22px] mb-[40px]"
          style="background-color:#EAF8FF; border: 5px solid #4D4D4D;">
          <img src="@/assets/icon2/bottom_arrow.svg" @click="handleClick2" class="btnEvent w-[46px] h-[46px] rotate-90 mt-[27px] ml-[18px]"/>
          </div>
          <div @click="handleClick" ref ="checkElement" class="checkbtn btnEvent sticky top-40 md:flex md:w-full md:justify-end w-[0px] h-[0px]">
            <img src="@/assets/icon2/bottom_arrow.svg" class="checkdevice w-[0px] h-[0px] rotate-90 mt-[27px] ml-[18px]"/>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-[32px] gap-[16px] border-b">
        <div class="text-[22px] font-semibold">
          <span class="">발송 설정</span>
        </div>
        <div class="flex w-full flex-row">
          <div class="flex flex-1 gap-[15px]">
        <button class="flex-1 flex py-[20px] zl:py-[12px] sm:py-[10px] text-[22px] sm:text-[18px] gap-[8px] justify-center items-center border rounded-[8px]" style="background-color:#FFFFFF; border-color:#4F44F0; color:#4F44F0;">
        <img src="@/assets/icon2/blue_check.svg" class="w-[32px] h-auto"/>
        즉시발송</button>
        <button class="flex-1 flex text-[22px] sm:text-[18px] gap-[8px] justify-center items-center border rounded-[8px]" style="background-color:#F2F5F9; color:#4F44F0;">
        <img src="@/assets/icon2/grey_check.svg" class="w-[32px] h-auto"/>
        예약발송</button>
        </div>
        <div class="flex-1 md:flex-none sm:flex-none"></div>
        </div>
      </div>
      <div class="flex py-[20px]">
        <button class="flex w-full justify-center items-center text-[22px] zl:text-[18px] sm:text-[18px] py-[20px] zl:py-[16px] sm:py-[14px] font-medium rounded-[8px]" style="background-color:#4F44F0; color:#FFFFFF">발송하기</button>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MessageContent2',
  methods: {
    handleClick() {
      const deviceElement = this.$refs.deviceElement;
      const checkElement = this.$refs.checkElement;
      deviceElement.style.display = 'block';
      checkElement.style.display='none';
    },
    handleClick2() {
      const deviceElement = this.$refs.deviceElement;
      const checkElement = this.$refs.checkElement;
      deviceElement.style.display = 'none';
      checkElement.style.display='block';
    }
  }
};

</script>

<style scoped>

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
