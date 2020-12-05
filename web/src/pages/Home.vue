<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="article-list-item" v-for="(post, i) in posts" :key="i">
        <h1 class="article-title">{{ post.title }}</h1>
        <h3>{{ post.note }}</h3>
        <strong>{{ post.time }}</strong
        ><br />
        <small>Created by: {{ post.author }}</small
        ><br />
        Tags:
        <small v-for="(t, ti) in post.tag" :key="ti">
          {{ t }} /
        </small>
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
#logo {
  margin-top: 2vh;
  max-height: 300px;
}

.article-list-item {
  margin-top: 50px;
  border: lightgray solid 1px;
  padding: 10px;
}

.article-title {
  margin-left: 50px;
}
</style>