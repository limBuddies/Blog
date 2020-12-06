<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h1 id="title">{{ titleText }}</h1>
          <br/>
          <div class="infor">
            <small>由</small><strong>{{ author }}</strong>
            <small>创建于：</small><strong>{{ date }}</strong><br>
            <small>{{ tag }}</small>
            <br>
            <b-button variant="danger" v-if="currentUser === author" @click="delArticle()">删除文章</b-button>
          </div>
          <br/>
          <br/>
          <p class="text-center">
            {{ information }}
          </p>
        </div>
        <div class="col-md-2">
          <h3>相关推荐</h3>
          <div
              class="article-recommend-item"
              v-for="(r, i) in recommends"
              :key="i"
          >
            <small>{{ r }}</small></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10" style="padding-bottom: 50px;">
          <h3 class="text-left">评论</h3>
          <div v-if="login_token" class="input">
            <b-textarea autofocus placeholder="你的评论" v-model="comment"></b-textarea>
            <b-button variant="danger" @click="addComment()" style="margin-top: 10px">发表</b-button>
          </div>
          <div style="text-align: left;" v-for="(c, ci) in comments" :key="ci">
            <h4>{{ c.content }}</h4>
            <small>由</small><strong>{{ c.author }}</strong><small>评论于：</small><strong>{{ c.time }}</strong>
            <b-button
                variant="danger"
                v-if="currentUser === c.author"
                style="margin-left: 10px"
                @click="delComment(c.id)">删除评论
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common";
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  data() {
    return {
      login_token: null,
      titleText: "",
      information: "",
      date: "",
      author: "",
      tag: "",
      recommends: ['暂时还', '没有这', '个功能'],
      comment: "",
      comments: [],
      currentUser: ""
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    this.login_token = sessionStorage.getItem("login_token");
    this.currentUser = sessionStorage.getItem("login_user");
    this.axios
        .post(common.Api("getArticle"), {
          aid: this.$route.query.id
        })
        .then((res) => {
          this.titleText = res.data.data.title;
          this.information = res.data.data.content;
          this.date = res.data.data.time;
          this.author = res.data.data.author;
          this.tag = res.data.data.tag;
        })
        .catch((err) => console.log(err));
    this.axios
        .post(common.Api("getComment"), {
          aid: this.$route.query.id
        })
        .then((res) => this.comments = res.data.data)
        .catch((err) => console.log(err));
  },
  methods: {
    addComment() {
      if (this.comment !== "") {
        this.axios
            .post(common.Api("addComment"), {
              token: this.login_token,
              data: {
                cid: 0,
                content: this.comment,
                aid: this.$route.query.id
              }
            })
            .then(() => this.$router.go(0))
            .catch((err) => console.log(err));
      }
    },
    delComment(id) {
      this.axios
          .post(common.Api("delComment"), {
            token: this.login_token,
            cid: id
          })
          .then(() => this.$router.go(0))
          .catch((err) => console.log(err));
    },
    delArticle() {
      this.axios
          .post(common.Api("delArticle"), {
            token: this.login_token,
            aid: this.$route.query.id
          })
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>
.row {
  text-align: center;
  margin-top: 10vh;
}

textarea {
  margin-right: 500px;
  width: 100%;
  height: 200px;
}
</style>
