module.exports = app => {
  const tutorials = require("../controllers/email.controller.js");

  var router = require("express").Router();

  // Create a new email
  router.post("/", email.create);

  app.use('/api/emails', router);
};
