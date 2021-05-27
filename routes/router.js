const express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var vendor_api = require('../vendor_API');

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/')
      .get(vendor_api.homePage);

router.route('/additem')
      .post(vendor_api.getUserInput);
       

module.exports = router;