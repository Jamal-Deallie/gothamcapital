const express = require('express');
const fundsController = require('../controllers/fundsController');

const router = express.Router();

router
  .route('/')
  .get(fundsController.getAllFunds)
  .post(fundsController.createFunds);

router.get('/search', fundsController.getFundsBySearch);

router
  .route('/:id')
  .get(fundsController.getFund)
  .patch(fundsController.updateFund)
  .delete(fundsController.deleteFund);

module.exports = router;
