<template>
  <div class="main-content">
    <AppHeader />
    <MainContent1 />
    <MainContent2 />
    <MainContent3 />
    <MainContent4 />
    <MainContent5 />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppFooter from './layout/AppFooter.vue';
import MainContent1 from './home/MainContent1.vue';
import MainContent2 from './home/MainContent2.vue';
import MainContent3 from './home/MainContent3.vue';
import MainContent4 from './home/MainContent4.vue';
import MainContent5 from './home/MainContent5.vue';
export default {
  name: 'HomePage',
  components: {
    AppHeader,
    MainContent1,
    MainContent2,
    MainContent3,
    MainContent4,
    MainContent5,
    AppFooter
  }
};
</script>

<style scoped>

</style>
