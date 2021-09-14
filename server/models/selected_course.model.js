const student_model = require("./student.model")
const course_model = require("./course.model")

module.exports = (sequelize, DataTypes) => {
    const SelectedCourse = sequelize.define("selected_course", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id'
            },
        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'students',
                key: 'id'
            },
        },
    });

    SelectedCourse.belongsTo(student_model(sequelize, DataTypes), {
        foreignKey: "student_id",
        onDelete: "cascade",
    });
    SelectedCourse.belongsTo(course_model(sequelize, DataTypes), {
        foreignKey: "course_id",
        onDelete: "cascade",
    });

    student_model(sequelize, DataTypes).hasMany(SelectedCourse);
    course_model(sequelize, DataTypes).hasMany(SelectedCourse);

    return SelectedCourse;
};