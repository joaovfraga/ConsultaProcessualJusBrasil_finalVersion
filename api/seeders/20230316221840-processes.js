'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Processes', [{
      cnj: "1001682-88.2020.8.13.0672",
      distributedAt: "2023-01-01 13:00:00",
      forum: "TJBA",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnj: "2001682-88.2020.8.13.0672",
      distributedAt: "2023-02-01 14:00:00",
      forum: "TJSE",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnj: "3001682-88.2020.8.13.0672",
      distributedAt: "2023-03-01 15:00:00",
      forum: "TJAL",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnj: "4001682-88.2020.8.13.0672",
      distributedAt: "2023-04-01 16:00:00",
      forum: "TJBA",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnj: "5001682-88.2020.8.13.0672",
      distributedAt: "2023-05-01 17:00:00",
      forum: "TJSE",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Processes', null, {});
  }
};
