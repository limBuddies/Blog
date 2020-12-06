<script>
// 导出图片资源地址
const kLogoClear = require("./assets/logo_clear.png");
const kLogoDark = require("./assets/logo_dark.png");

// 导出API地址
const kApiService = {
  root: "https://yapi.baidu.com/mock/18128",
  articleList: "/article-list",
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