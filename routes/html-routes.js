const router = require("express").Router();
const db = require("../models")

module.exports = function(router) {

  
router.get('/', (req, res) => {
  db.Thread.findAll({}).then(function(results){
  
    console.log(results)
    res.render('index', {Thread: results})
  })

});

router.get('/posts', (req, res) => {
  db.Post.findAll({}).then(function(results){
    console.log(results)
  res.render('post', results)
})
});

router.get('/threads', (req, res) => {
  db.Thread.findAll({}).then(function(results){
    console.log(results)
  res.render('thread', results)
})
});


};
