<template>
  <div id="app">
    <h1>Home page</h1>
    <span @click="updateInformationUser">Update Information User</span>
    <div
      v-for="(currency, index) in info"
      :key="index"
      class="currency mgt-10"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
// import store from '@store';
export default {
  name: 'Home',
  // components: store,
  props: {
    msg: String,
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  mounted() {
    this.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch(() => {
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    updateInformationUser() {
      const user = {
        name: 'Kien',
        email: 'kien@gmail.com',
      };
      this.$store.commit('informationUser', user);

      console.log(this.$store.state.user, 'store');
    },
  },
};
</script>
<style>
  .mgt-10 {
    margin-top: 10px;
  }
</style>
