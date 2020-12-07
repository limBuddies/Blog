<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h1 style="margin-top: 20vh; text-align: center">创作</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" id="inputs">
          <b-input placeholder="标题" v-model="title"></b-input>
          <b-input placeholder="标签" v-model="tag" style="margin-top: 10px"></b-input>
          <b-textarea rows="20" placeholder="内容" id="content" v-model="content"></b-textarea>
          <b-button id="publish_button" variant="danger" @click="publish()">
            发表
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common";
import Navbar from "../components/Navbar";

export default {
  name: "Compose.vue",
  data() {
    return {
      title: "",
      content: "",
      tag: "",
    }
  },
  mounted() {
    if (sessionStorage.getItem('login_token') == null) this.$router.push('/login');
  },
  methods: {
    publish() {
      if (this.title !== "" && this.content !== "" && this.tag !== "") {
        this.axios
            .post(common.Api('addArticle'), {
              token: sessionStorage.getItem("login_token"),
              data: {
                title: this.title,
                content: this.content,
                tag: this.tag,
              }
            })
            .then(() => this.$router.push('/'))
            .catch((err) => console.log(err));
      }
    }
  }
}
</script>

<style scoped>
#content {
  margin-top: 10px;
}

#publish_button {
  margin-top: 20px;
}
</style>