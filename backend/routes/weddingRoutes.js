const express = require('express');

const {
  getWeddings,
  createWedding,
  getWedding,
  updateWedding,
  deleteWedding,
} = require('../controllers/weddingsController');

const router = express.Router();

router.get('/', getWeddings);
router.post('/', createWedding);
router.get('/:id', getWedding);
router.put('/:id', updateWedding);
router.delete('/:id', deleteWedding);

module.exports = router;
