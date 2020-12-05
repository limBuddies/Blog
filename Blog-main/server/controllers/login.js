const sequelize = require('../db/db');

async  function login(req,res){
    try {
        await sequelize.authenticate();
        const token = (await sequelize.models.Token.create({token:"somekindoftokennumber"}))
        res.send(JSON.stringify({
            status:'OK',
            token:token
        }))
    } catch (err){
        console.log(err);
        res.send(JSON.stringify({
            status:'FAIL',
            err:err
        }));
    }
}

module.exports = { login }