var express = require("express");
var router = express.Router();

const { ListPertanyaan } = require("../models");

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const pertanyaan = await ListPertanyaan.findAll({
		attributes: [
			"pertanyaan1",
			"pertanyaan2",
			"pertanyaan3",
			"pertanyaan4",
			"pertanyaan5",
			"pertanyaan6",
			"pertanyaan7",
			"pertanyaan8",
			"pertanyaan9",
			"pertanyaan10",
		],
		where: {
			id_ruangan: id,
		},
	});

	if (pertanyaan.length > 0) {
		return res.status(200).send({
			status: "success",
			data: pertanyaan,
		});
	}

	return res.status(404).send({
		status: "not found",
		data: pertanyaan,
	});
});

module.exports = router;
