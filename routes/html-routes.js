const router = require("express").Router();
const db = require("../models")

module.exports = function(router) {

  
router.get('/', (req, res) => {

    res.render('index', {layout: 'main'})
  })
};