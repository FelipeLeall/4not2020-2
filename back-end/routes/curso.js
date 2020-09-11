const controller = require("../controllers/curso.js");
const express = require("express")

const router = express.Router();

router.post('/', controller.novo);
router.get('/', controller.listar)
router.get('/:id', controller.obterUm)

module.exports = router