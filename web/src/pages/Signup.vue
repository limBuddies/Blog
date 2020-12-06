<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h1 style="margin-top: 20vh; text-align: center">注册</h1>
          <h5 style="text-align: center">已有账号？前往<a href="/login">登录</a> </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4" id="inputs">
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
            <strong v-else>以 {{ username }} 的身份注册</strong>
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
          .post(common.Api("signup"), {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .then((res) => {
            this.msg = res.data.status === "OK" ? "注册成功" : "注册失败";
            this.alert_show = true;
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