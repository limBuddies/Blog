const sequelize = require('../db/db');
const tokenStorage = require('./token');
const crypto = require('crypto');

async function login(req, res) {
    try {
        await sequelize.authenticate();
        if ((await sequelize.models.User.findAll({
            where: {
                username: req.body.data.username,
                password: crypto.createHash('md5').update(req.body.data.password).digest('hex')
            }
        })).length === 1) {
            const token = crypto.createHash('md5').update(Date.now().toString()).digest('hex');
            tokenStorage[token] = req.body.data.username;
            res.send(JSON.stringify({
                status: 'OK',
                token: token,
                username: req.body.data.username
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
        }));
    }
}

module.exports = {login}