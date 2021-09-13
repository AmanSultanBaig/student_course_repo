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
        Students.belongsTo(models.courses, {
            foreignKey: {
                allowNull: false,
            }
        })
    }

    return Students
}