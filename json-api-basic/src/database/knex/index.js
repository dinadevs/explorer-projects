const config = require("../../../knexfile")
const knex = require("knex")

const connnection = knex(config.development)

module.exports = connnection