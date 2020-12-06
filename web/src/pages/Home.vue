<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div
        class="article-list-item"
        v-for="(post, i) in posts"
        :key="i"
        v-bind:style="{
          backgroundImage: 'url(' + post.bg + ')',
          backgroundSize: '100% 100%',
        }"
      >
        <h1 class="article-title">{{ post.title }}</h1>
        <h3 class="article-brief-information">{{ post.note }}</h3>
        <div class="article-related-information">
          <strong>{{ post.time }}</strong>
          <br />
          <small>Created by: {{ post.author }}</small>
        </div>
        <div class="tag-value">
          Tags:
          <small v-for="(t, ti) in post.tag" :key="ti"> {{ t }} / </small>
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
  border: lightgray solid 1px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(7, 14.4%);
  grid-template-rows: (7, 14.4%);
}

.article-title {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
}

.article-related-information {
  grid-area: 7 / 7 / span1 / span1;
}

.article-brief-information {
  grid-area: 6 / 2 / span1 / span5;
}

.tag-value {
  grid-area: 7 / 1 / span1 / span1;
}
</style>