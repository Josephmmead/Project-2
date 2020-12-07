module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user:{
        type: DataTypes.STRING,
        defultValue: "Anonymous"
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      thread_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to a Thread
      // A Post can't be created without a Thread due to the foreign key constraint
      Post.belongsTo(models.Thread, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  

  