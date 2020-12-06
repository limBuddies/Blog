const sequelize = require('../db/db');

//添加新用户
async function signup(req, res) {
    try {
        await sequelize.authenticate();
        const User = (await sequelize.models.User.create({
            username: req.body.data.username,
            password: req.body.data.password,
            nickname: req.body.data.author,
            email: req.body.data.author
        }))
        res.send(JSON.stringify({
            status: 'OK'
        }))
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }));
    }
}

module.exports = { signup }