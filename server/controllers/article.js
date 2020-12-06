const sequelize = require('../db/db');
const tokenStorage = require('./token');
const assert = require("assert");

//添加新文章
async function addArticle(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        await sequelize.models.Article.create({
            title: req.body.data.title,
            content: req.body.data.content,
            author: tokenStorage[req.body.token],
            tag: req.body.data.tag,
            time: Date.now()
        });
        res.send(JSON.stringify({
            status: 'OK'
        }))

    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
}

//删除文章
async function deleteArticle(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        if ((await sequelize.models.Article.findOne({
            where: {
                aid: req.body.aid
            }
        })).author === tokenStorage[req.body.token]) {
            await sequelize.models.Article.destroy({
                where: {
                    aid: req.body.aid
                }
            });
            res.send(JSON.stringify({
                status: 'OK'
            }))
        } else {
            res.send(JSON.stringify({
                status: 'FAIL',
                err: 'Permission denied.'
            }));
        }
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
}

//列出文章
async function listArticle(req, res) {
    try {
        await sequelize.authenticate();
        const articles = await sequelize.models.Article.findAll();
        const article_list = [];
        for (let a of articles) {
            article_list.push({
                id: a.aid,
                title: a.title,
                note: a.content.substr(0, 20) + "...",
                time: a.time,
                author: a.author,
                tag: a.tag
            })
        }
        res.send(JSON.stringify({
            status: 'OK',
            data: article_list
        }))
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
}

async function getArticle(req, res) {
    try {
        await sequelize.authenticate();
        const articles = await sequelize.models.Article.findAll({
            where: {
                aid: req.body.aid
            }
        });
        if (articles.length === 1) {
            res.send(JSON.stringify({
                status: 'OK',
                data: articles[0]
            }))
        } else {
            res.send(JSON.stringify({
                status: 'FAIL',
                err: "Wrong aid"
            }))
        }
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
}


module.exports = {addArticle, deleteArticle, listArticle, getArticle}