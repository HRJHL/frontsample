<template>
  <div class="main-content">
    <CreditContent1 />
    <CreditContent3 />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './layout/AppFooter.vue';
import CreditContent1 from './credit/CreditContent1.vue';
import CreditContent3 from './credit/CreditContent3.vue';
export default {
  name: 'CreditPage',
  components: {
    CreditContent1,
    CreditContent3,
    AppFooter
  }
};
</script>

<style scoped>

</style>
