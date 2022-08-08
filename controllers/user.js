const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const createUser = (body) => {
  return knex("user").insert(body);
};

const findUser = (email) => {
  return knex("user").where({ email }).first();
};

module.exports = {
  createUser,
  findUser,
};
