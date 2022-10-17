module.exports = (sequelize, Sequelize) => {
  const Email = sequelize.define("email", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return Email;
};
