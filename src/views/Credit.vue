<template>
  <div class="main-content">
    <CreditContent1 />
    <CreditContent2 />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './layout/AppFooter.vue';
import CreditContent1 from './credit/CreditContent1.vue';
import CreditContent2 from './credit/CreditContent2.vue';
export default {
  name: 'CreditPage',
  components: {
    CreditContent1,
    CreditContent2,
    AppFooter
  }
};
</script>

<style scoped>

</style>
