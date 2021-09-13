module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("courses", {
        course: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Courses
}