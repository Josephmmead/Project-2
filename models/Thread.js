module.exports = function(sequelize, DataTypes) {
    var Thread = sequelize.define("Thread", {
      thread_name: {
        type: DataTypes.STRING,
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

    Thread.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Thread.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
    return Thread;
  };