<template>
  <div class="main-content">
    <MessageContent1 />
    <MessageContent2 />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './layout/AppFooter.vue';
import MessageContent1 from './message/MessageContent1.vue';
import MessageContent2 from './message/MessageContent2.vue';
export default {
  name: 'MessagePage',
  components: {
    MessageContent1,
    MessageContent2,
    AppFooter
  }
};
</script>

<style scoped>

</style>
