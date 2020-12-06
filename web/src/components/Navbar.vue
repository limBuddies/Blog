<template>
  <div>
    <b-navbar type="light" variant="light" id="nav">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">首页</b-nav-item>
        <b-nav-item href="/about">关于</b-nav-item>
        <b-nav-item v-if="login_token!=null" href="/compose">创作</b-nav-item>
        <b-nav-item v-if="login_token==null" href="/login">登录</b-nav-item>
        <b-button v-else variant="danger" @click="logout()">登出</b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      login_token: null,
    }
  },
  mounted() {
    this.login_token = sessionStorage.getItem('login_token');
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
</style>