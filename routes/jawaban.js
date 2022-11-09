var express = require("express");
const Validator = require('fastest-validator');
var router = express.Router();

const { ListJawaban } = require("../models");

const v = new Validator();

router.get("/", async (req, res) => {
	const jawaban = await ListJawaban.findAll({
		attributes: [
			"id_ruangan",
			"jawaban1",
			"jawaban2",
			"jawaban3",
			"jawaban4",
			"jawaban5",
			"jawaban6",
			"jawaban7",
			"jawaban8",
			"jawaban9",
			"jawaban10",
            "createdAt",
		]
	});

	return res.status(200).send({
		status: "success",
		data: jawaban,
	});
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const jawaban = await ListJawaban.findAll({
		attributes: [
			"id_ruangan",
			"jawaban1",
			"jawaban2",
			"jawaban3",
			"jawaban4",
			"jawaban5",
			"jawaban6",
			"jawaban7",
			"jawaban8",
			"jawaban9",
			"jawaban10",
            "createdAt",
		],
		where: {
			id_ruangan: id,
		},
	});

	return res.status(200).send({
		status: "success",
		data: jawaban,
	});
});

router.post('/:id', async (req, res) => {
    const schema = {
        id_ruangan : 'string',
        pertanyaan1 : 'string|optional',
        pertanyaan2 : 'string|optional',
        pertanyaan3 : 'string|optional',
        pertanyaan4 : 'string|optional',
        pertanyaan5 : 'string|optional',
        pertanyaan6 : 'string|optional',
        pertanyaan7 : 'string|optional',
        pertanyaan8 : 'string|optional',
        pertanyaan9 : 'string|optional',
        pertanyaan10 : 'string|optional',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res.status(400).send({
            status: "failed",
            message: validate,
        });
    }

    await ListJawaban.create(req.body);
    res.status(200).send({
		status: "success",
		message: 'Jawaban Tersimpan',
	});
});

module.exports = router;
