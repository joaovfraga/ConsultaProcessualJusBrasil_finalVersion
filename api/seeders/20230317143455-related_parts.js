'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('RelatedParts', [{
        name: "Autor 1",
        role: "author",
        processId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 2",
        role: "author",
        processId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Reu 1",
        role: "defendant",
        processId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 1",
        role: "author",
        processId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 2",
        role: "author",
        processId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Reu 1",
        role: "defendant",
        processId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 1",
        role: "author",
        processId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 2",
        role: "author",
        processId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Reu 1",
        role: "defendant",
        processId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 1",
        role: "author",
        processId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 2",
        role: "author",
        processId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Reu 1",
        role: "defendant",
        processId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 1",
        role: "author",
        processId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Autor 2",
        role: "author",
        processId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Reu 1",
        role: "defendant",
        processId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
