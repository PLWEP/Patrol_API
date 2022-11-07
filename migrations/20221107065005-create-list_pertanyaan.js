"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("list_pertanyaan", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
      id_ruangan: {
        type : Sequelize.CHAR,
        allowNull: false
      },
      pertanyaan1 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan2 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan3 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan4 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan5 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan6 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan7 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan8 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan9 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
      pertanyaan10 : {
        type : Sequelize.TEXT,
        allowNull: true,
      },
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('list_pertanyaan');
	},
};
