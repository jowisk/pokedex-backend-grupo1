const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const createUser = (body) => {
  return knex("user").insert(body);
};

const findUser = async (mail) => {
  const user = await knex

    .select("*")
    .from("user")
    .where("user.mail", mail)

    .then((user) => {
      return user;
    });

  return user;
};

const getUserByMail = (mail) => {
  return knex("user").where("mail", mail).select("mail");
};

// const findUser = async (mail) => {
//   const user = await knex
//     .select("*")
//     .from("user")
//     .where("user.mail", mail)
//     .then((user) => {
//       return user;
//     });
//   return user;
// };

module.exports = {
  createUser,
  findUser,
  getUserByMail,
};
