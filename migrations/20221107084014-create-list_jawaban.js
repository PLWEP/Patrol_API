"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("list_jawaban", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_ruangan: {
				type: Sequelize.CHAR,
				allowNull: false,
			},
			jawaban1: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban2: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban3: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban4: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban5: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban6: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban7: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban8: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban9: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			jawaban10: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("list_jawaban");
	},
};
