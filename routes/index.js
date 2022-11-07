var express = require("express");
var router = express.Router();

const { ListRuangan } = require("../models");

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const ruangan = await ListRuangan.findAll({
		attributes: ["id", "name"],
		where: {
			id: id,
		},
	});

	if (ruangan.length > 0) {
		return res.status(200).send({
			status: "success",
			data: ruangan,
		});
	}

	return res.status(404).send({
		status: "not found",
		data: ruangan,
	});
});

module.exports = router;
