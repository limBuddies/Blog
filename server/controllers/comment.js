const sequelize = require('../db/db');
const tokenStorage = require('./token');
const assert = require('assert');

//添加新评论
async function addComment(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        await sequelize.models.Comment.create({
            cid: req.body.data.cid,
            author: tokenStorage[req.body.token],
            content: req.body.data.content,
            article_id: req.body.data.aid,
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

//删除评论
async function deleteComment(req, res) {
    try {
        await sequelize.authenticate();
        assert(tokenStorage.hasOwnProperty(req.body.token));
        console.log((await sequelize.models.Comment.findOne({
            where: {
                cid: req.body.cid
            }
        })).author)
        if ((await sequelize.models.Comment.findOne({
            where: {
                cid: req.body.cid
            }
        })).author === tokenStorage[req.body.token]) {
            await sequelize.models.Comment.destroy({
                where: {
                    cid: req.body.cid,
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

async function listComment(req, res) {
    try {
        await sequelize.authenticate();
        const comments = await sequelize.models.Comment.findAll({
            where: {
                article_id: req.body.aid
            }
        });
        const comment_list = [];
        for (let c of comments) {
            comment_list.push({
                id: c.cid,
                content: c.content,
                time: c.time,
                author: c.author
            })
        }
        res.send(JSON.stringify({
            status: 'OK',
            data: comment_list
        }))
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
}

module.exports = {addComment, deleteComment, listComment}