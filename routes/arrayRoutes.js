const express = require('express');
const router = express.Router();
const arrayController = require('../controller/arrayController')

router.get('/', arrayController.add);
    
    
router.post('/',arrayController.findVal)


module.exports = router;