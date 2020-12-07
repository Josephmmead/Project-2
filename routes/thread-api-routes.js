var db = require("../models");

module.exports = function(app) {
  app.get("/api/thread", function(req, res) {
    
    db.Thread.findAll({}).then(function(dbThread) {
      res.json(dbThread);
    });
  });

  app.get("/api/thread/:id", function(req, res) {
    
    db.Thread.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbThread) {
      res.json(dbThread);
    });
  });

  app.post("/api/thread", function(req, res) {
    db.Thread.create(req.body).then(function(dbThread) {
      res.json(dbThread);
    });
  });

  app.delete("/api/thread/:id", function(req, res) {
    db.Thread.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbThread) {
      res.json(dbThread);
    });
  });


  app.get("/api/thread/:category", function(req, res) {
    
    db.Thread.findAll({
      where: {
        category: req.params.category
      },
      include: [db.Post]
    }).then(function(dbThread) {
      res.json(dbThread);
    });
  });

};