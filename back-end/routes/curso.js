const controller = require("../controllers/curso.js");
const express = require("express")

const router = express.Router();

router.post('/', controller.novo);

module.exports = router