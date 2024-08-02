import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';

function initializeKakao() {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('e4ca085c334904385b10d5ecddd10ab3'); // 카카오 JavaScript 키 입력
  }
}

// 카카오 SDK를 초기화
initializeKakao();

createApp(App)
  .use(router)
  .mount('#app');
