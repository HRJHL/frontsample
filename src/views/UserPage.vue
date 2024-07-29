<template>
  <div class="main-content">
    <UserIn />
    <AppFooter />
  </div>
</template>

<script>
import UserIn from './user/UserIn.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  name: 'UserPage',
  components: {
    UserIn,
    AppFooter,
  }
};
</script>

<style scoped>

</style>
