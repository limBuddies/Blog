const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.json({ limit: '1mb' }));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

const { addCounter, getCounter, Like, Unlike } = require('../controllers/counter');

const { addArticle, deleteArticle } = require('../controllers/article');

const { addComment, deleteComment } = require('../controllers/comment');

const { login } = require('../controllers/login');

const { signup } = require('../controllers/signup');

// 参考：https://expressjs.com/zh-cn/guide/routing.html

// 对不同Api请求进行分流
router
    .post('/add', async (req, res) => {
        await addCounter(req, res);
    })
    .post('/get', async (req, res) => {
        await getCounter(req, res);
    })
    .post('/article-list', async (req, res) => {
        await addArticle(req, res);
    })
    .post('/comment', async (req, res) => {
        await addComment(req, res);
    })
    .post('/login', async (req, res) => {
        await login(req, res);
    })
    .post('/signup', async (req, res) => {
        await signup(req, res);
    })
    .post('/delete-article', async (req, res) => {
        await deleteArticle(req, res);
    })
    .post('/delete-comment', async (req, res) => {
        await deleteComment(req, res);
    })
    .post('/like', async (req, res) => {
        await Like(req, res)
    })
    .post('/unlike', async (req, res) => {
        await Unlike(req, res)
    })
    ;

module.exports = router;