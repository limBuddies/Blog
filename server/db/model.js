const sequelize = require('./db')
const {Model, DataTypes} = require('sequelize');

// 参考：https://sequelize.org/master/manual/model-basics.html

// 设计数据表
class Click extends Model {
}

Click.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {
    sequelize,
    tableName: 'clicks',
});

class Article extends Model {
}

Article.init(
    {
        aid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notnull: true, unique: true},
        title: {type: DataTypes.TEXT, notnull: true},
        content: {type: DataTypes.TEXT, notnull: true},
        time: {type: DataTypes.DATE, notnull: true},
        author: {type: DataTypes.TEXT, notnull: true},
        tag: {type: DataTypes.TEXT, notnull: true}
    }, {
        sequelize,
        modelName: 'article'
    })

class Comment extends Model {
}

Comment.init(
    {
        cid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notnull: true, unique: true},
        article_id: {type: DataTypes.INTEGER, notnull: true},
        author: {type: DataTypes.TEXT, notnull: true},
        content: {type: DataTypes.TEXT, notnull: true},
        time: {type: DataTypes.DATE, notnull: true}
    }, {
        sequelize,
        modelName: 'comment'
    })

class User extends Model {
}

User.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, notnull: true, unique: true},
        password: {type: DataTypes.TEXT, notnull: true},
        nickname: {type: DataTypes.STRING, notnull: true, unique: true},
        email: {type: DataTypes.TEXT, notnull: true}
    }, {
        sequelize,
        modelName: 'User'
    })

class Token extends Model {
}

Token.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    token: {type: DataTypes.STRING, notnull: true, unique: true}
}, {
    sequelize,
    modelName: 'Token'
})

console.log(Article === sequelize.models.Article);
console.log(Comment === sequelize.models.Comment);
console.log(User === sequelize.models.User);
console.log(Token === sequelize.models.Token)