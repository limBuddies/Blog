const sequelize = require('../db/db');

//添加新文章
async function addArticle(req, res) {
    try {
        await sequelize.authenticate();
        await sequelize.models.Article.create({
            aid: req.body.data.aid,
            title: req.body.data.title,
            content: req.body.data.content,
            author: req.body.data.author,
            tag: JSON.stringify(req.body.data.tag),
            time: Date.now()
        });
        const count0 = (await sequelize.models.Comment.findAll({
            where: {
                article_id: req.body.data.aid
            }
        })).length;
        const count2 = (await sequelize.models.Count.findAll({
            where: {
                aid: req.body.data.aid,
                choose: 0
            }
        })).length;
        const count1 = (await sequelize.models.Count.findAll({
            where: {
                aid: req.body.data.aid,
                choose: 1
            }
        })).length;
        res.send(JSON.stringify({
            status: 'OK',
            count_comment: count0,
            count_like: count1,
            count_unlike: count2
        }))

    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
};

//删除文章
async function deleteArticle(req, res) {
    try {
        await sequelize.authenticate();
        await sequelize.models.Article.remove({
            aid: req.body.data.aid
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


module.exports = {addArticle, deleteArticle}