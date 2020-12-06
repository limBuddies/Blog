const express = require('express');
const router = express.Router();

const { addArticle, deleteArticle, listArticle, getArticle } = require('../controllers/article');

const { addComment, deleteComment, listComment } = require('../controllers/comment');

const { login } = require('../controllers/login');

const { signup } = require('../controllers/signup');

// 参考：https://expressjs.com/zh-cn/guide/routing.html

// 对不同Api请求进行分流
router
    .post('/article-add', async (req, res) => {
        await addArticle(req, res);
    })
    .post('/article-list', async (req, res) => {
        await listArticle(req, res);
    })
    .post('/article-get', async (req, res) => {
        await getArticle(req, res);
    })
    .post('/comment', async (req, res) => {
        await addComment(req, res);
    })
    .post('/comment-list', async (req, res) => {
        await listComment(req, res);
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
    });

module.exports = router;