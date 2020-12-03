
var db = require("../models");

module.exports = function(app) {

    // getting all threads for main page
    app.get("/", function(req, res){
        db.Thread.findAll({}).then(function(results){
            res.render("index", results);
        });
    });

    // getting specific thread
    app.get("/api/thread/:thread_name", function(req, res){
      db.Thread.findAll({
          where: {
              thread_name: req.params.thread_name
          }
      }).then(function(results) {
          res.json(results)
      })
  })

    // getting all categories for left side bar
    app.get("/api/category/:category", function(req, res){
        db.Thread.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(results) {
            res.json(results)
        })
    })

    // getting posts by id
    app.get("/api/posts/:id", function(req, res){
        db.Thread.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(results){
            res.json(results)
        });
    });

    // In case we need to delete posts
    app.delete("/api/posts/:id", function(req, res) {
       
        db.Thread.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(results){
          res.json(results)
        })
      });

      // the ability to update posts if we want
      app.put("/api/posts", function(req, res) {
        
        db.Thread.update({
          thread_name: req.body.thread_name,
          user: req.body.user,
          body: req.body.body,
          category: req.body.category,
          where:{
            id: req.body.id
          }
        }).then(function(results) {
          res.json(results)
        })
      });

      app.put("/api/thread", function(req, res) {
        db.Thread.create({
          thread_name: req.body.thread_name,
          user: req.body.user,
          body: req.body.body,
          category: req.body.category,
          where:{
            id: req.body.id
          }
        }).then(function(results) {
          res.json(results)
        })
      });

      app.put("/api/thread", function(req, res) {
        db.Thread.create({
          thread_name: req.body.thread_name,
          user: req.body.user,
          body: req.body.body,
          category: req.body.category,
          where:{
            id: req.body.id
          }
        }).then(function(results) {
          res.json(results)
        })
      });
};

