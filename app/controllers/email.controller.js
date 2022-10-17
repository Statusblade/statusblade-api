const db = require('../models')
const Email = db.emails
const Op = db.Sequelize.Op

// Create and Save a new email contact
exports.create = (req, res) => {
  // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a email contact
    const email = {
      name: req.body.name,
      email: req.body.email,
    };

    // Save contact in the database
    Email.create(email)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });
      });
};
