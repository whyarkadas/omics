const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('omic', {
        gene: {
            type: DataTypes.STRING,
        },
        transcript: {
            type: DataTypes.STRING,
        },
        exper_rep1: {
            type: DataTypes.FLOAT,
        },
        exper_rep2: {
            type: DataTypes.FLOAT,
        },
        exper_rep3: {
            type: DataTypes.FLOAT,
        },
        control_rep1: {
            type: DataTypes.FLOAT,
        },
        control_rep2: {
            type: DataTypes.FLOAT,
        },
        control_rep3: {
            type: DataTypes.FLOAT,
        }
    });
};