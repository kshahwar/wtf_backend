
module.exports = (sequelize, Sequelize) => {
  
    const Users = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        primaryKey :true,
        allowNull:false
      },
      uid: {
        type: Sequelize.STRING,
        allowNull:false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        values: ['active', 'pending', 'deleted'],
      },
      status_: {
        type: Sequelize.BOOLEAN,
        defaultValue : false,

      }
    
    });
    return Users;
  };