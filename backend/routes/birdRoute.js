const express = require('express');
const birdController = require('../controllers/birdController');

const router = express.Router();


router  
      .route('/createBird')
      .post(birdController.createNewBird);

router
      .route('/findAllBirds')
      .get(birdController.findAllBirds)

router
      .route('/getAbird/:id')
      .get(birdController.findAbird)

router
      .route('/:id')
      .delete(birdController.deleteAbird)

router
      .route('/:id')
      .patch(birdController.updateAbird)


module.exports = router;