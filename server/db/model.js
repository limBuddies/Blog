const sequelize = require('./db')
const { Model, DataTypes } = require('sequelize');

// 参考：https://sequelize.org/master/manual/model-basics.html

// 设计数据表

class Article extends Model {
}

Article.init(
    {
        aid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.TEXT, notnull: true },
        content: { type: DataTypes.TEXT, notnull: true },
        time: { type: DataTypes.DATE, notnull: true },
        author: { type: DataTypes.TEXT, notnull: true },
        tag: { type: DataTypes.TEXT, notnull: true },
    }, {
    sequelize,
    tableName: 'article'
})

class Comment extends Model {
}

Comment.init(
    {
        cid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notnull: true, unique: true },
        article_id: { type: DataTypes.INTEGER, notnull: true },
        author: { type: DataTypes.TEXT, notnull: true },
        content: { type: DataTypes.TEXT, notnull: true },
        time: { type: DataTypes.DATE, notnull: true }
    }, {
    sequelize,
    tableName: 'comment'
})

class User extends Model {
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: DataTypes.STRING, notnull: true, unique: true },
        password: { type: DataTypes.TEXT, notnull: true },
    }, {
    sequelize,
    tableName: 'User'
})
