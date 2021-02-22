<template>
  <MasterLayout />
</template>

<script>
import MasterLayout from './components/MasterLayout.vue';

export default {
  name: 'App        ',
  components: {
    MasterLayout,
  },
  mounted() {
    console.log(process.env);
  },
};
</script>

<style lang="sass">
  @import './assets/scss/main.scss';
</style>
