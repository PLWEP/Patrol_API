"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("list_ruangan", {
			id: {
        type : Sequelize.CHAR,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type : Sequelize.TEXT,
        allowNull: false,
      },
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("list_ruangan");
	},
};
