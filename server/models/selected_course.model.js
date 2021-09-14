const { student_model } = require("./student.model")
// const { course_model } = require("./course.model")

module.exports = (sequelize, DataTypes) => {
    const SelectedCourse = sequelize.define("selected_course", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        course_id: {
            type: DataTypes.INTEGER,
        },
        student_id: {
            type: DataTypes.INTEGER,
        },
    });

    // SelectedCourse.hasOne(student_model, {
    //     foreignKey: 'student_id'
    //   });
    //   student_model.belongsTo(SelectedCourse);

    // SelectedCourse.belongsTo(course_model, {
    //     foreignKey: "course_id",
    // });
    // SelectedCourse.belongsTo(student_model, {
    //     foreignKey: "student_id",
    //     // onDelete: "RESTRICT",
    // });

    // SelectedCourse.associate = (models) => {
    //     SelectedCourse.belongsTo(models.Student, {
    //         foreignKey: "student_id"
    //     });
    // }

    // student_model.hasMany(SelectedCourse);
    // course_model.hasMany(SelectedCourse);

    return SelectedCourse;
};