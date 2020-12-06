<script>
// 导出图片资源地址
const kLogoClear = require("./assets/logo_clear.png");
const kLogoDark = require("./assets/logo_dark.png");

// 导出API地址
const kApiService = {
  root: "/api",
  addArticle: "/article-add",
  getArticle: "/article-get",
  articleList: "/article-list",
  addComment: "/comment",
  getComment: "/comment-list",
  delArticle: "/delete-article",
  delComment: "/delete-comment",
  login: "/login",
  signup: "/signup"
};

function Api(api) {
  return kApiService.root + kApiService[api];
}

export default {
  name: "common",
  kLogoClear,
  kLogoDark,
  Api,
};
</script>