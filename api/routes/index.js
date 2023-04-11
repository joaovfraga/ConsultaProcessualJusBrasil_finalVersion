var express = require('express');
const ProcessController = require('../controllers/processes');
var router = express.Router();

/* GET processes listing. */
router.get('/processes', ProcessController.getAllProcesses);

/* GET a single process by id */
router.get('/processes/:id', ProcessController.getProcessById);

/* GET a single process by CNJ */
router.get('/processes/cnj/:number', ProcessController.getProcessByCNJ);

module.exports = router;
