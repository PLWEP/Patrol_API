"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"list_ruangan",
			[
				{
					id: "R01",
					name: "Ruang Lantai 1",
				},
				{
					id: "R02",
					name: "Ruang Lantai 2",
				},
				{
					id: "R03",
					name: "Ruang Lantai 3",
				},
				{
					id: "R04",
					name: "Ruang Lantai 4",
				},
				{
					id: "R05",
					name: "Ruang Lantai 5",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('list_ruangan', null, {});
	},
};
