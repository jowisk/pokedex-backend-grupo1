const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const getMoves = async () => {
  const movesArray = [];

  await knex("moves")
    .select("nombre", "id")
    .then((res) => {
      return movesArray.push[res];
    });
  console.log("moves", movesArray);
  return movesArray;
};

module.exports = {
  getMoves,
};
