const router = require("express").Router();
const db = require("../models")

module.exports = function(router) {

  
router.get('/', (req, res) => {
  db.Thread.findAll({}).then(function(results){
    
    res.render('index', {Thread: results})
  })

});

router.get('/posts', (req, res) => {
  db.Thread.findAll({
    include: [db.Post]

  }).then(function(results){
    console.log(results)
  res.render('post', {Post: results})
})
});

router.get('/threads', (req, res) => {
  db.Thread.findAll({
    // order: '"createdAT" DESC'
  }).then(function(results){
    
  res.render('thread', {Thread: results})
})
});


};
