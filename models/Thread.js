module.exports = function(sequelize, DataTypes) {
    var Thread = sequelize.define("Thread", {
      thread_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user: {
        type: DataTypes.STRING,
        defultValue: "Anonymous"
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Gaming"
      }
    });
    return Thread;
  };