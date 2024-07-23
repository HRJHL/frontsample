<template>
  <div class="main-content">
    <Checkout />
    <AppFooter />
  </div>
</template>

<script>
import Checkout from './toss/TossCheck.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  name: 'PayPage',
  components: {
    Checkout,
    AppFooter
  }
};
</script>

<style scoped>

</style>
