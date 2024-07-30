<template>
  <div class="main-content">
    <UserChange />
    <AppFooter />
  </div>
</template>

<script>
import UserChange from './user/UserChange.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  name: 'UserPage2',
  components: {
    UserChange,
    AppFooter,
  }
};
</script>

<style scoped>

</style>
