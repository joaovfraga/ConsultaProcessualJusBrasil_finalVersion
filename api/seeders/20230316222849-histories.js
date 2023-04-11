'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Histories', [{
        description: "Suspensão do prazo referente ao usuário foi alterado para 18/07/2023 devido à alteração da tabela de feriados",
        processId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        processId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Suspensão do prazo referente ao usuário foi alterado para 18/07/2023 devido à alteração da tabela de feriados",
        processId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        processId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Suspensão do prazo referente ao usuário foi alterado para 18/07/2023 devido à alteração da tabela de feriados",
        processId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        processId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Suspensão do prazo referente ao usuário foi alterado para 18/07/2023 devido à alteração da tabela de feriados",
        processId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        processId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Suspensão do prazo referente ao usuário foi alterado para 18/07/2023 devido à alteração da tabela de feriados",
        processId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        processId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Histories', null, {});
  }
};
