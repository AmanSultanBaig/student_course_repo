module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("courses", {
        course: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    Courses.associate = (models) => {
        Courses.hasMany(models.assign_courses, {
            onDelete: "cascade"
        })
    }

    return Courses
}