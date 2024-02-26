const express = require('express');
const weightController = require('../controllers/weightController');
const router = express.Router();

router  
      .route('/createWeight')
      .post(weightController.createWeight);
router  
      .route('/getSpecificWeight/:id')
      .get(weightController.getSpecificWeight);
router  
      .route('/getAllWeights')
      .get(weightController.getAllWeights);
router  
      .route('/:id')
      .patch(weightController.updateWeight);
router  
      .route('/:id')
      .delete(weightController.deleteWeight);



module.exports = router;