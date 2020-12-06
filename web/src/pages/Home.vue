<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <h1 v-if="posts.length === 0" style="text-align: center; margin-top: 50px">这里暂时没有文章</h1>
      <div
          v-for="(post, i) in posts"
          :key="i"
          class="item"
      >
        <b-img :src="bgImg" class="itembg"></b-img>
        <a :href="'/title?id=' + post.id"><h1>{{ post.title }}</h1></a>
        <h3>{{ post.note }}</h3>
        <div>
          <strong>创建于：{{ post.time }}</strong>
          <br/>
          <small>作者: {{ post.author }}</small>
        </div>
        <div class="tag-value">
          标签: {{ post.tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
      bgImg: common.kLogoDark
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    this.axios
        .post(common.Api("articleList"), {
          token: "passion",
        })
        .then((res) => {
          this.posts = res.data.data;
        })
        .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.item {
  margin-top: 20px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}
.itembg {
  position: absolute;
  left: 50px;
  top: -80%;
  height: 250%;
  opacity: 0.1;
  pointer-events: none;
}
</style>