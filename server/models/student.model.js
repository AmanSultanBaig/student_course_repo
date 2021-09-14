module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      class: {
        type: DataTypes.STRING,
      },
      contact_no: {
        type: DataTypes.STRING,
      },
    });
  
    return Student;
  };