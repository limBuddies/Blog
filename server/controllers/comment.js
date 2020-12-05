const sequelize = require('../db/db');

//添加新评论
async function addComment (req,res){
    try {
        await sequelize.authenticate();
        await sequelize.models.Comment.create({
            cid:req.body.data.cid,
            author:req.body.data.author,
            content:req.body.data.content,
            time:now.toLocaleString()
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

//删除评论
async function deleteComment (req,res){
    try {
        await sequelize.authenticate();
        await sequelize.models.Comment.remove({
            cid:req.body.data.cid,
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

module.exports = { addComment, deleteComment}