<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h1 id="title">{{ titleText }}</h1>
          <br />
          <div class="infor"><strong>{{ date }}</strong>       <strong>{{ author }}</strong>    <strong>{{ tag }}</strong>
          </div>
          <br />
          <br />
          <p class="text-center">
            {{ information }}
          </p>
        </div>
        <div class="col-md-2">
          <h3>相关推荐</h3>
          <div class="article-recommend-item" v-for="(recommend, i) in recommends" :key="i"></div>
        </div>
      </div>
       <div class="row">
        <div class="col-md-10">
          <div class="input">
            <h3 class="text-left">评论</h3>
            <textarea autofocus  placeholder="你的评论" ></textarea> 
          </div>
           <button >发表</button>
        </div>
        
      </div>
    </div>
   
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  data() {
    return {
      titleText: "文章标题",
      information:"hello",
      date:"55",
      author:"1111",
      tag:"22222",
      recommends:[]
    };
  },
  components: {
    Navbar,
  },
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
