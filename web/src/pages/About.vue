<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h1 style="margin-top: 20vh; text-align: center">关于</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <h5 style="margin-top: 30px; text-align: center">
            <strong>Mirage Blog</strong> 是基于
            <em style="color: #666"
              >Mirage-Starter-Kit</em
            >
            构建的微型博客。
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "About",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>