'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [{
            nombre: 'carlos',
            email: 'prueba@gmail.com',
            password: '$2y$08$yg3YDZw0pKvC8wb53ehfGeXwoxIF6Lb7MtF3Qex.9OM6ic/cooyp2', //micontraseña
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};