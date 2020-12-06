const sequelize = require('../db/db');
const crypto = require('crypto');

//添加新用户
async function signup(req, res) {
    try {
        await sequelize.authenticate();
        const User = (await sequelize.models.User.create({
            username: req.body.data.username,
            password: crypto.createHash('md5').update(req.body.data.password).digest('hex')
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