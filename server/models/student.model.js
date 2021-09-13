module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Students.associate = (models) => {
        Students.hasMany(models.assign_courses, {
            onDelete: "cascade"
        })
    }

    return Students
}