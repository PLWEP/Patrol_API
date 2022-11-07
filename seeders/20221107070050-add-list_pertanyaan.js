"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"list_pertanyaan",
			[
				{
					id_ruangan: "R01",
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
					id_ruangan: "R02",
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
		await queryInterface.bulkDelete('list_pertanyaan', null, {});
	},
};
