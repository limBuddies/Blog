<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h1 style="margin-top: 20vh; text-align: center">登录</h1>
          <h5 style="text-align: center">没有账号？前往<a href="/signup">注册</a> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-1 col-md-4"></div>
        <div class="col-sm-10 col-md-4" id="inputs">
          <b-input
              placeholder="用户名"
              style="margin-bottom: 10px"
              v-model="username"
          ></b-input>
          <b-input
              placeholder="密码"
              type="password"
              v-model="password"
          ></b-input>
          <b-button id="login_button" variant="danger" @click="login()">
            <strong v-if="username === '' || password === ''"
            >填写用户信息！</strong
            >
            <strong v-else>以 {{ username }} 的身份登录</strong>
          </b-button>
          <b-alert variant="secondary" id="alert" v-model="alert_show">{{ msg }}</b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "About",
  components: {
    Navbar,
  },
  data() {
    return {
      username: "",
      password: "",
      msg: "",
      alert_show: false,
    };
  },
  methods: {
    login() {
      this.axios
          .post(common.Api("login"), {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .then((res) => {
            this.msg = res.data.status === "OK" ? "登录成功" : "登录失败";
            this.alert_show = true;
            if (res.data.status === "OK") {
              sessionStorage.setItem("login_token", res.data.token);
              sessionStorage.setItem("login_user", res.data.username);
              this.$router.push("/");
            }
          })
          .catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>
#inputs {
  margin-top: 30px;
}

#login_button {
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
}

#alert {
   margin-top: 10px;
   width: 50%;
   margin-left: 25%;
   align-content: center;
 }
</style>