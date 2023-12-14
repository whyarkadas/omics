const sequelize = require('../sequelize');
const { Sequelize } = require('sequelize');
const stats = require('../helpers/stats')

module.exports = {
    getGenData(req, res) {
        return sequelize.models.omic
            .findAll({
                where: {
                    gene: req.body.genes
                }
            })
            .then((omics) => {
                if (!omics) {
                    return res.status(404).send({
                        message: 'Omics Not Found',
                    });
                }
                return res.status(200).send(omics);
            })
            .catch((error) => res.status(400).send(error));
    },
    getAllGenName(req, res) {
        return sequelize.models.omic
            .findAll({
                limit: 5000,
                attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('gene')), 'name'],]
            }).then((omics) => {
                if (!omics) {
                    return res.status(404).send({
                        message: 'Omics Not Found',
                    });
                }
                return res.status(200).send(omics);
            })
            .catch((error) => res.status(400).send(error));
    },

    getGenStats(req, res) {
        return sequelize.models.omic
            .findAll({
                where: {
                    gene: req.body.gene
                }
            })
            .then((omics) => {
                if (!omics) {
                    return res.status(404).send({
                        message: 'Omics Not Found',
                    });
                }
                return res.status(200).send(stats(req.body.gene, omics[0]));
            })
            .catch((error) => res.status(400).send(error));
    }
};