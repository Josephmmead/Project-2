var db = require("../models");

module.exports = function(app) {
  app.get("/api/threads", function(req, res) {
    
    db.Thread.findAll({}).then(function(dbThread) {
      res.json(dbThread);
    });
  });

  app.get("/api/threads/:id", function(req, res) {
    
    db.Thread.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbThread) {
      res.json(dbThread);
    });
  });

  app.post("/api/threads", function(req, res) {
    db.Thread.create(req.body).then(function(dbThread) {
      res.json(dbThread);
    });
  });


  app.get("/api/threads/:category", function(req, res) {
    
    db.Thread.findAll({
      where: {
        category: req.params.category
      },
     
    }).then(function(dbThread) {
      res.json(dbThread);
    });

  });





};