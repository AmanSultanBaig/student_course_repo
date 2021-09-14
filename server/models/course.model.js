module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      course_name: {
        type: DataTypes.STRING,
      },
    });
  
    return Course;
  };