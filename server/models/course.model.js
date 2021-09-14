module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
      course_name: {
        type: DataTypes.STRING,
      },
    });
  
    return Course;
  };