var express = require("express");
const Validator = require("fastest-validator");
var router = express.Router();

const { ListRuangan } = require("../models");

const v = new Validator();

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const namaRuangan = await ListRuangan.findAll({
		attributes: ["id", "name"],
		where: {
			id: id,
		},
	});

	if (namaRuangan.length > 0) {
		return res.status(200).send({
			status: "success",
			data: namaRuangan,
		});
	}

	return res.status(404).send({
		status: "not found",
		data: namaRuangan,
	});
});

module.exports = router;
