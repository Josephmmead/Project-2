const router = require("express").Router();
const db = require("../models")

module.exports = function(router) {

  
router.get('/', (req, res) => {
  db.Thread.findAll({}).then(function(results){
    let jsonResults = Json.parse(JSON.stringify(results))
    let mainObject = {
      thread: jsonResults
    }
    console.log(mainObject)
  })
    res.render('index', mainObject)
  })


router.get('/posts', (req, res) => {
  db.Post.findAll({}).then(function(results){
    let jsonResults = Json.parse(JSON.stringify(results))
    let postObject = {
      post: jsonResults
    }
    console.log(postObject)
  })
  res.render('post', postObject)
})


router.get('/threads', (req, res) => {
  db.Thread.findAll({}).then(function(results){
    let jsonResults = Json.parse(JSON.stringify(results))
    let threadObject = {
      thread: jsonResults
    }
    console.log(threadObject)
  })
  res.render('thread', threadObject)
})


};