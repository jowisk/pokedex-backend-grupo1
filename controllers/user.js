const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const createUser = (body) => {
  return knex("user").insert(body);
};

const findUser = (mail) => {
  return knex("user").where({ mail }).first();
};

const getUserByMail = (mail) => {
  return knex("user").where("mail", mail).select("mail");
};

module.exports = {
  createUser,
  findUser,
  getUserByMail,
};
