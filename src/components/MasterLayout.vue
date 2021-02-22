<template>
  <div class="container-master-layout">
    <ul class="header">
      <router-link class="menu" to="/">
        <span class="icon-home" />
        <span>Home</span>
      </router-link>
      <router-link class="menu" to="/about">About</router-link>
      <router-link class="menu" to="/login">Login</router-link>
    </ul>
    <div class="body-page">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Copyright GREEN GLOBAL, INC © 2021. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import store from '@store';

export default {
  name: 'MasterLayout',
  components: store,
};
</script>
<style lang="scss">
  .container-master-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .body-page {
    flex: 1;
    padding: 20px;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 4px 4px 0 var(--Black100);
    padding: 20px;
    .icon-home {
      margin-right: 5px;
    }
    .menu {
      cursor: pointer;
      margin-right: 2.5em;
      color: var(--Black850);
      font-family: 'ProximaNovaRegular';
    }
  }
  .footer {
    background: var(--Espresso);
    padding: 20px;
    text-align: center;
    color: var(--White);
  }
</style>
