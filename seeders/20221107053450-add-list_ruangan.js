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
					pertanyaan1: "Aman?",
					pertanyaan2: "Aman?",
					pertanyaan3: "Aman?",
					pertanyaan4: "Aman?",
					pertanyaan5: "Aman?",
					pertanyaan6: "Aman?",
					pertanyaan7: "Aman?",
					pertanyaan8: "Aman?",
					pertanyaan9: "Aman?",
					pertanyaan10: "Aman?",
				},
				{
					id: "R02",
					name: "Ruang Lantai 2",
					pertanyaan1: "Aman?",
					pertanyaan2: "Aman?",
					pertanyaan3: "Aman?",
					pertanyaan4: "Aman?",
					pertanyaan5: "Aman?",
					pertanyaan6: "Aman?",
					pertanyaan7: "Aman?",
					pertanyaan8: "Aman?",
					pertanyaan9: "Aman?",
					pertanyaan10: "Aman?",
				},
				{
					id: "R03",
					name: "Ruang Lantai 3",
					pertanyaan1: "Aman?",
					pertanyaan2: "Aman?",
					pertanyaan3: "Aman?",
					pertanyaan4: "Aman?",
					pertanyaan5: "Aman?",
					pertanyaan6: "Aman?",
					pertanyaan7: "Aman?",
					pertanyaan8: "Aman?",
					pertanyaan9: "Aman?",
					pertanyaan10: "Aman?",
				},
				{
					id: "R04",
					name: "Ruang Lantai 4",
					pertanyaan1: "Aman?",
					pertanyaan2: "Aman?",
					pertanyaan3: "Aman?",
					pertanyaan4: "Aman?",
					pertanyaan5: "Aman?",
					pertanyaan6: "Aman?",
					pertanyaan7: "Aman?",
					pertanyaan8: "Aman?",
					pertanyaan9: "Aman?",
					pertanyaan10: "Aman?",
				},
				{
					id: "R05",
					name: "Ruang Lantai 5",
					pertanyaan1: "Aman?",
					pertanyaan2: "Aman?",
					pertanyaan3: "Aman?",
					pertanyaan4: "Aman?",
					pertanyaan5: "Aman?",
					pertanyaan6: "Aman?",
					pertanyaan7: "Aman?",
					pertanyaan8: "Aman?",
					pertanyaan9: "Aman?",
					pertanyaan10: "Aman?",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('list_ruangan', null, {});
	},
};
