const dbConfig = require("../Config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('wtf','root', 'Pass@dbms1', {dialect:'mysql', host: 'localhost'});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users.js")(sequelize, Sequelize);
module.exports = db;


