const sequelize = require('../db/db');

async function addArticle(req,res){
    try {
        await sequelize.authenticate();
        await sequelize.models.Article.create({
            aid:req.body.data.aid,
            title:req.body.data.title,
            content:req.body.data.content,
            author:req.body.data.author,
            tag:req.body.data.tag,
            time:now.toLocaleString()
        });
        res.send(JSON.stringify({
            status:'OK'
        }))

    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }))
    }
};

async function deleteArticle(req,res){
    try {
        await sequelize.authenticate();
        await sequelize.models.Article.remove({
            aid:req.body.data.aid
        });
        res.send(JSON.stringify({
            status:'OK'
        }))

    } catch (err){
        console.log(err);
        res.send(JSON.stringify({
            status:'FAIL',
            err:err
        }))
    }
}

module.exports = {addArticle, deleteArticle}